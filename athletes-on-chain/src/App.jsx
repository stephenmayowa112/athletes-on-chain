// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import "./index.css"; 

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection/>
      <FeaturesSection/>
      <HowItWorksSection/>
    </div>
  );
};

export default App;
