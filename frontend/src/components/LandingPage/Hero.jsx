import React from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        height: "100vh",
        backgroundImage:
          'url("https://images.unsplash.com/photo-1504893524553-b855bce32c7c?ixlib=rb-4.0.3")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
            "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)",
        }}
      ></div>

      <div
        style={{
          position: "relative",
          textAlign: "center",
          color: "white",
          zIndex: 1,
          maxWidth: "800px",
          padding: "2rem",
        }}
      >
        <h1
          className="fade-up"
          style={{
            fontSize: "4rem",
            marginBottom: "1rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          Discover the Land of{" "}
          <span style={{ color: "#667eea" }}>Fire and Ice</span>
        </h1>
        <p
          className="fade-up"
          style={{
            fontSize: "1.2rem",
            marginBottom: "2rem",
            opacity: 0.9,
          }}
        >
          Experience Iceland's breathtaking landscapes, from volcanic craters to
          glacial lagoons, waterfalls, and the magical Northern Lights.
        </p>
        <div className="fade-up">
          <Link to="/signup">
            <button
              style={{
                padding: "1rem 2rem",
                margin: "0 1rem",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                border: "none",
                borderRadius: "50px",
                color: "white",
                fontSize: "1rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.target.style.transform = "translateY(-3px)")
              }
              onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
            >
              Start Your Journey
            </button>
          </Link>
          <button
            style={{
              padding: "1rem 2rem",
              margin: "0 1rem",
              background: "transparent",
              border: "2px solid white",
              borderRadius: "50px",
              color: "white",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "white";
              e.target.style.color = "#667eea";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "white";
            }}
          >
            <FaPlay /> Watch Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
