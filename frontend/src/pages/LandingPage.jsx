import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        backgroundImage:
          'url("https://images.unsplash.com/photo-1504893524553-b855bce32c7c?ixlib=rb-4.0.3")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)",
        }}
      ></div>
      <div
        style={{
          position: "relative",
          textAlign: "center",
          zIndex: 1,
          maxWidth: "800px",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>
          Discover the Land of Fire and Ice
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Experience Iceland's breathtaking landscapes
        </p>
        <div>
          <Link to="/signup">
            <button
              style={{
                padding: "15px 30px",
                margin: "0 10px",
                borderRadius: "50px",
                border: "none",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Start Your Journey
            </button>
          </Link>
          <Link to="/login">
            <button
              style={{
                padding: "15px 30px",
                margin: "0 10px",
                borderRadius: "50px",
                border: "2px solid white",
                background: "transparent",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
