import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Admindashboard.css";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    categories: 0,
    products: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [catRes, prodRes] = await Promise.all([
          axios.get("http://localhost:8000/api/categories/"),
          axios.get("http://localhost:8000/api/products/"),
        ]);

        setStats({
          categories: catRes.data.length,
          products: prodRes.data.length,
        });
      } catch (error) {
        console.error("Error fetching stats", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {/* Stats Section */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Categories</h3>
          <p>{stats.categories}</p>
        </div>
        <div className="stat-card">
          <h3>Total Products</h3>
          <p>{stats.products}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <Link to="/admin/products/new" className="btn-primary">
            ➕ Add Product
          </Link>
          <Link to="/admin/categories/new" className="btn-secondary">
            ➕ Add Category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
