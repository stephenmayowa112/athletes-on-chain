// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import UserProfilesSection from "./components/UserProfilesSection";
import EventListingsSection from "./components/EventListingsSection";
import SponsorshipRequestsSection from "./SponsorshipRequestsSection";
import Footer from "./Footer";
import "./index.css"; 

const App = () => {
  return (
    <div className="min-h-screen px-8 md:px-16 lg:px-34 custom-gradient flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <UserProfilesSection />
      <EventListingsSection />
      <SponsorshipRequestsSection />
      <Footer />
    </div>
  );
};

export default App;
