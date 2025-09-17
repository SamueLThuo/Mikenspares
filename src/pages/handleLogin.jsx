  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:8000/api/token/", {
        username,
        password,
      });

      const { access, refresh } = response.data;

      // Decode JWT to check role
      const decoded = jwtDecode(access);

      // Save tokens and role info
      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
      localStorage.setItem("is_superuser", decoded.is_superuser || false);
      localStorage.setItem("is_staff", decoded.is_staff || false);

      alert("Login successful!");

      // ✅ Clear input fields
      setUsername("");
      setPassword("");

      // ✅ Redirect
      if (decoded.is_superuser || decoded.is_staff) {
        navigate("/admin"); // Admin dashboard
      } else {
        navigate("/"); // Homepage
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.detail || "Login failed. Please try again.");
    }
  };
