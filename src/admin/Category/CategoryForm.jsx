import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form, Input, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'; // ✅ Base API URL
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

export default function CategoryForm() {
  const [categories, setCategories] = useState([]);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingCategory, setEditingCategory] = useState(null);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () => {
    axios.get('/categories/')
      .then(res => setCategories(res.data))
      .catch(() => message.error('Failed to fetch categories'));
  };

  const handleSubmit = (values) => {
    const formData = new FormData();

    // Append values
    formData.append('name', values.name);
    formData.append('slug', values.slug);

    if (values.icon && values.icon.length > 0 && values.icon[0].originFileObj) {
      formData.append('icon', values.icon[0].originFileObj);
    }

    const request = editingCategory
      ? axios.put(`/categories/${editingCategory.id}/`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
      : axios.post('/categories/', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });

    request
      .then(() => {
        setVisible(false);
        form.resetFields();
        setEditingCategory(null);
        loadCategories();
        message.success('Category saved successfully');
      })
      .catch(() => message.error('Failed to save category'));
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    form.setFieldsValue({
      name: category.name,
      slug: category.slug,
      icon: category.icon
        ? [{
            uid: '-1',
            name: 'icon.png',
            status: 'done',
            url: category.icon
          }]
        : []
    });
    setVisible(true);
  };

  const handleDelete = (id) => {
    axios.delete(`/categories/${id}/`)
      .then(() => {
        message.success('Category deleted');
        loadCategories();
      })
      .catch(() => message.error('Failed to delete category'));
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
          setEditingCategory(null);
          form.resetFields();
        }}
      >
        Add Category
      </Button>

      <Table
        dataSource={categories}
        columns={[
          { title: 'Name', dataIndex: 'name' },
          { title: 'Slug', dataIndex: 'slug' },
          {
            title: 'Icon',
            dataIndex: 'icon',
            render: (icon) => icon && <img src={icon} alt="icon" style={{ width: 40 }} />
          },
          {
            title: 'Actions',
            render: (_, record) => (
              <>
                <Button size="small" onClick={() => handleEdit(record)}>Edit</Button>
                <Button
                  danger
                  size="small"
                  style={{ marginLeft: 8 }}
                  onClick={() => handleDelete(record.id)}
                >
                  Delete
                </Button>
              </>
            )
          }
        ]}
        rowKey="id"
        style={{ marginTop: 16 }}
      />

      <Modal
        title={editingCategory ? "Edit Category" : "Add Category"}
        open={visible}
        onCancel={() => setVisible(false)}
        onOk={() => form.submit()}
        okText="Save"
      >
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="slug" label="Slug" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="icon"
            label="Icon"
            valuePropName="fileList"
            getValueFromEvent={(e) => e.fileList}
          >
            <Upload listType="picture" beforeUpload={() => false} maxCount={1}>
              <Button icon={<UploadOutlined />}>Select Icon</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
