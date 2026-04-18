import React from "react";
import Navbar from "../components/LandingPage/Navbar";
import Hero from "../components/LandingPage/Hero";
import Attractions from "../components/LandingPage/Attractions";
import Tours from "../components/LandingPage/Tours";
import Testimonials from "../components/LandingPage/Testimonials";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Attractions />
      <Tours />
      <Testimonials />
    </div>
  );
};

export default LandingPage;
