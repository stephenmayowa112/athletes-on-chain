// src/components/CTASection.jsx
import React from "react";

const CTASection = () => {
  return (
    <section className="custom-gradient text-white py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Join the Future of Football</h2>
        <p className="text-lg mb-8">
          Athletes On-Chain is the premier platform for talent discovery and
          development in football. Start your journey today!
        </p>
        <a
          href="/signup"
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default CTASection;
