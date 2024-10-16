import React, { useState } from "react";

const sponsorships = [
  {
    name: "Football Tournament Sponsorship",
    description:
      "We are offering sponsorship for local football tournaments across Europe. Apply now for support!",
    amount: "$10,000",
  },
  {
    name: "Youth Team Equipment Sponsorship",
    description:
      "Get sponsorship for equipment and gear for your youth football team. Open to teams in Africa and Latin America.",
    amount: "$5,000",
  },
  {
    name: "Training Camp Sponsorship",
    description:
      "Apply for our training camp sponsorship, designed to help aspiring athletes receive world-class coaching.",
    amount: "$7,500",
  },
  // Add more sponsorships as needed
];

const SponsorshipRequestsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sponsorship request submitted!");
    // Handle form submission (e.g., send data to backend)
  };

  return (
    <section className="py-16 custom-gradient">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Sponsorship Opportunities
        </h2>

        {/* Sponsorship Opportunities List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sponsorships.map((sponsorship, index) => (
            <div
              key={index}
              className="bg-[#1b1a1a] hover:bg-[#3c3b3b] hover:scale-105 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl text-gray-100 font-semibold mb-2">
                {sponsorship.name}
              </h3>
              <p className="text-gray-100 mb-2">{sponsorship.description}</p>
              <p className="text-green-600 font-bold">
                Amount: {sponsorship.amount}
              </p>
            </div>
          ))}
        </div>

        {/* Sponsorship Request Form */}
        <div className=" p-6 rounded-lg shadow-lg max-w-lg mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Request Sponsorship
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-200">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
                required
              />
            </div>
            <div>
              <label className="block text-gray-200">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
                required
              />
            </div>
            <div>
              <label className="block text-gray-200">
                Why do you need sponsorship?
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 w-full"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipRequestsSection;
