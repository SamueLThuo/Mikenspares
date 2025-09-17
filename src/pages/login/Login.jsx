import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const phoneNumber = "254712345678"; // ✅ Now we use it

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:8000/api/token/', {
        username,
        password,
      });

      const { access, refresh } = response.data;

      // Decode token to get user info
      const decoded = jwtDecode(access);

      console.log('Decoded Token:', decoded);

      // Save tokens and role info
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);
      localStorage.setItem('is_superuser', decoded.is_superuser || false);
      localStorage.setItem('is_staff', decoded.is_staff || false);

      alert('Login successful!');
 if (decoded.is_superuser || decoded.is_staff) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.detail || 'Login failed. Please try again.');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
        />
        <button type="submit" style={{ width: '100%', padding: '0.75rem' }}>
          Login
        </button>
      </form>

      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}

      {/* ✅ WhatsApp Help Link */}
      <p style={{ marginTop: '1rem', textAlign: 'center' }}>
        Need help?{" "}
        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#25D366', fontWeight: 'bold', textDecoration: 'none' }}
        >
          Chat with us on WhatsApp
        </a>
      </p>
    </div>
  );
};

export default Login;
