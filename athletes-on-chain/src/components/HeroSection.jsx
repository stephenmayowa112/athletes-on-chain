import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-800 text-white min-h-screen flex flex-col justify-center items-center text-center p-2">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome to Athletes On-Chain
      </h1>
      <p className="text-lg md:text-xl mb-8">
        Your platform for talent discovery and development in football.
      </p>
      <a
        href="#"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Get Started
      </a>
    </section>
  );
};

export default HeroSection;
