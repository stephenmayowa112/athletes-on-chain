// src/components/FeaturesSection.jsx
import React from "react";

const features = [
  {
    title: "Talent Discovery",
    description:
      "Discover and nurture the next generation of football talents using blockchain technology.",
    icon: "🌟", // You can replace this with an SVG icon or image
  },
  {
    title: "Transparent Scouting",
    description:
      "Transparent and unbiased scouting process ensuring fairness and equality.",
    icon: "🔍",
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Utilize data analytics for better decision-making in talent management.",
    icon: "📊",
  },
  {
    title: "Community Engagement",
    description:
      "Engage with a community of athletes, coaches, and scouts to enhance development.",
    icon: "🤝",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-14 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
