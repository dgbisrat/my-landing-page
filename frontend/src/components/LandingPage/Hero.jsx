import React from "react";
import "./Landing.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Discover the Land of Fire and Ice</h1>
        <p>
          Experience Iceland's breathtaking landscapes, from volcanic craters to
          glacial lagoons
        </p>
        <div className="hero-buttons">
          <a href="/signup" className="btn-primary">
            Start Your Journey
          </a>
          <a href="#tours" className="btn-secondary">
            Explore Tours
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
