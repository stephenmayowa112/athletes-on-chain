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
    <section id="fiit" className="py-16 mt-0 custom-gradient">
      <div className="scontainer mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-100 mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1b1a1a] hover:bg-[#3c3b3b] text-gray-100 hover:scale-105 shadow-lg rounded-lg p-6"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl  font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
