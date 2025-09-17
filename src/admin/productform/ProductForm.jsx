// src/components/ProductForm.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  Select,
  Switch,
  Upload,
  message,
  Popconfirm,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./ProductForm.css";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

export default function ProductForm() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [visible, setVisible] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    loadProducts();
    loadCategories();
  }, []);

  const loadProducts = () => {
    axios
      .get("/products/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error loading products:", err));
  };

  const loadCategories = () => {
    axios
      .get("/categories/")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error loading categories:", err));
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("brand", values.brand);
    formData.append("category_id", values.category); // ✅ FIXED
    formData.append("description", values.description || "");
    formData.append("price", values.price);
    formData.append("is_deal", values.is_deal ? "true" : "false");
    formData.append("discount_percent", values.discount_percent || 0);

    if (values.image && values.image.length > 0) {
      const imgFile = values.image[0].originFileObj;
      if (imgFile) {
        formData.append("image", imgFile);
      }
    }

    try {
      if (editingId) {
        await axios.put(`/products/${editingId}/`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        message.success("Product updated successfully");
      } else {
        await axios.post("/products/", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        message.success("Product created successfully");
      }
      resetForm();
      loadProducts();
    } catch (err) {
      console.error("Error saving product:", err.response?.data || err);
      message.error("Failed to save product");
    }
  };

  const handleEdit = (record) => {
    setEditingId(record.id);
    setVisible(true);
    form.setFieldsValue({
      name: record.name,
      brand: record.brand,
      category: record.category?.id, // ✅ FIXED
      description: record.description,
      price: record.price,
      is_deal: record.is_deal,
      discount_percent: record.discount_percent,
      image: record.image
        ? [
            {
              uid: "-1",
              name: "Current Image",
              status: "done",
              url: record.image,
            },
          ]
        : [],
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/products/${id}/`);
      message.success("Product deleted successfully");
      loadProducts();
    } catch {
      message.error("Failed to delete product");
    }
  };

  const resetForm = () => {
    form.resetFields();
    setEditingId(null);
    setVisible(false);
  };

  return (
    <div className="product-form-wrapper">
      <Button type="primary" onClick={() => setVisible(true)}>
        Add Product
      </Button>

      <Table
        style={{ marginTop: 20 }}
        dataSource={products}
        columns={[
          { title: "Name", dataIndex: "name" },
          { title: "Brand", dataIndex: "brand" },
          {
            title: "Category",
            dataIndex: "category",
            render: (category) => category?.name || "—", // ✅ FIXED
          },
          { title: "Price", dataIndex: "price" },
          {
            title: "Is Deal",
            dataIndex: "is_deal",
            render: (deal) => (deal ? "Yes" : "No"),
            responsive: ["sm", "md"],
          },
          {
            title: "Actions",
            render: (_, record) => (
              <div className="action-buttons">
                <Button size="small" onClick={() => handleEdit(record)}>
                  Edit
                </Button>
                <Popconfirm
                  title="Are you sure to delete?"
                  onConfirm={() => handleDelete(record.id)}
                >
                  <Button size="small" danger>
                    Delete
                  </Button>
                </Popconfirm>
              </div>
            ),
          },
        ]}
        rowKey="id"
        scroll={{ x: "max-content" }}
        pagination={{ pageSize: 5, responsive: true }}
      />

      <Modal
        title={editingId ? "Edit Product" : "Create Product"}
        open={visible}
        onCancel={() => setVisible(false)}
        onOk={() => form.submit()}
        destroyOnClose
      >
        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          className="product-form"
        >
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="brand" label="Brand" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select a category">
              {categories.map((c) => (
                <Select.Option key={c.id} value={c.id}>
                  {c.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea rows={3} />
          </Form.Item>
          <Form.Item name="price" label="Price" rules={[{ required: true }]}>
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="is_deal" label="Is Deal" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item name="discount_percent" label="Discount (%)">
            <InputNumber min={0} max={100} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="image"
            label="Product Image"
            valuePropName="fileList"
            getValueFromEvent={(e) => e.fileList}
          >
            <Upload beforeUpload={() => false} listType="picture">
              <Button icon={<UploadOutlined />}>Select Image</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
