import React, { useState } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import {
  MenuUnfoldOutlined,
  DashboardOutlined,
  AppstoreOutlined,
  TagsOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useNavigate } from "react-router-dom";

// ✅ Import custom CSS
import "./AdminLayout.css";

const { Sider, Content, Header } = Layout;

export default function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const menuItems = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: <Link to="">Dashboard</Link>,
    },
    {
      key: "2",
      icon: <AppstoreOutlined />,
      label: <Link to="products">Manage Products</Link>,
    },
    {
      key: "3",
      icon: <TagsOutlined />,
      label: <Link to="categories">Manage Categories</Link>,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Desktop Sidebar */}
      <Sider breakpoint="lg" collapsedWidth="0" className="desktop-sider">
        <div className="logo">🛠 Miken Spares</div>
        <Menu theme="dark" mode="inline" items={menuItems} />
      </Sider>

      {/* Mobile Drawer Menu */}
      <Drawer
        title="Miken Spares"
        placement="left"
        closable
        onClose={() => setMobileOpen(false)}
        open={mobileOpen}
        className="mobile-drawer"
      >
        <Menu theme="dark" mode="inline" items={menuItems} />
      </Drawer>

      <Layout>
        {/* Header */}
        <Header
          style={{
            background: "#fff",
            padding: "0 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Mobile Hamburger */}
          <Button
            type="text"
            icon={<MenuUnfoldOutlined />}
            onClick={() => setMobileOpen(true)}
            className="mobile-toggle"
          />

          <span className="admin-title">Admin Panel</span>

          <Button
            type="primary"
            danger
            onClick={handleLogout}
            icon={<LogoutOutlined />}
          >
            Logout
          </Button>
        </Header>

        {/* Content */}
        <Content
          style={{
            margin: "16px",
            background: "#fff",
            padding: "16px",
            borderRadius: "8px",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
