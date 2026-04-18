import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaSignOutAlt, FaCompass } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "1rem 5%",
        transition: "all 0.3s ease",
        background: isScrolled ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0.3)",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <FaCompass size={30} color="#667eea" />
        <h1 style={{ color: "white", fontSize: "1.5rem" }}>
          Iceland<span style={{ color: "#667eea" }}>Tour</span>
        </h1>
      </div>

      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <a
          href="#home"
          style={{ color: "white", textDecoration: "none", fontWeight: "500" }}
        >
          Home
        </a>
        <a
          href="#attractions"
          style={{ color: "white", textDecoration: "none", fontWeight: "500" }}
        >
          Attractions
        </a>
        <a
          href="#tours"
          style={{ color: "white", textDecoration: "none", fontWeight: "500" }}
        >
          Tours
        </a>
        <a
          href="#contact"
          style={{ color: "white", textDecoration: "none", fontWeight: "500" }}
        >
          Contact
        </a>

        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            style={{
              padding: "0.5rem 1.5rem",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              border: "none",
              borderRadius: "25px",
              color: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaSignOutAlt /> Logout
          </button>
        ) : (
          <Link to="/login">
            <button
              style={{
                padding: "0.5rem 1.5rem",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                border: "none",
                borderRadius: "25px",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FaUser /> Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
