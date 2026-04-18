import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      setUser(JSON.parse(userStr));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  if (!user) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>Loading...</div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <nav
        style={{
          background: "white",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ margin: 0, color: "#333" }}>Welcome, {user.firstName}!</h1>
        <button
          onClick={handleLogout}
          style={{
            padding: "0.5rem 1rem",
            background: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Logout
        </button>
      </nav>
      <div style={{ padding: "2rem" }}>
        <div
          style={{
            background: "white",
            borderRadius: "10px",
            padding: "2rem",
            maxWidth: "800px",
            margin: "0 auto",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Your Iceland Adventure Awaits!</h2>
          <p>Explore our amazing tours and packages</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <div
              style={{
                textAlign: "center",
                padding: "1rem",
                background: "#f8f9fa",
                borderRadius: "5px",
              }}
            >
              <h3 style={{ color: "#667eea", fontSize: "2rem", margin: 0 }}>
                5+
              </h3>
              <p>Popular Tours</p>
            </div>
            <div
              style={{
                textAlign: "center",
                padding: "1rem",
                background: "#f8f9fa",
                borderRadius: "5px",
              }}
            >
              <h3 style={{ color: "#667eea", fontSize: "2rem", margin: 0 }}>
                1000+
              </h3>
              <p>Happy Travelers</p>
            </div>
            <div
              style={{
                textAlign: "center",
                padding: "1rem",
                background: "#f8f9fa",
                borderRadius: "5px",
              }}
            >
              <h3 style={{ color: "#667eea", fontSize: "2rem", margin: 0 }}>
                24/7
              </h3>
              <p>Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
