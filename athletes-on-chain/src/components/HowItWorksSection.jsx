import React from "react";

const steps = [
  {
    title: "Sign Up",
    description:
      "Create your profile as an athlete, coach, or scout to get started.",
    icon: "📝", // Replace with an appropriate icon/image
  },
  {
    title: "Discover Talent",
    description:
      "Scouts and coaches discover athletes based on data-driven insights.",
    icon: "🔍",
  },
  {
    title: "Engage & Develop",
    description:
      "Athletes engage with scouts and coaches to receive guidance and develop their skills.",
    icon: "⚽",
  },
  {
    title: "Track Progress",
    description: "Monitor progress over time with detailed performance data.",
    icon: "📈",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
