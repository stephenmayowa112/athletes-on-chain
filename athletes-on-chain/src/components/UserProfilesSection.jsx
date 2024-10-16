import React from "react";

const profiles = [
  {
    name: "David Beckham",
    role: "Professional Scout",
    bio: "Discovering the next generation of football stars. Currently scouting for top talent across Europe.",
    image: "/path/to/beckham-image.jpg",
  },
  {
    name: "Marta Silva",
    role: "Football Coach",
    bio: "Passionate about coaching and developing young footballers to reach their full potential.",
    image: "/path/to/marta-image.jpg",
  },
  {
    name: "Lionel Messi",
    role: "Aspiring Footballer",
    bio: "Working hard every day to become a professional footballer. Dreaming big and taking the steps to get there.",
    image: "/path/to/messi-image.jpg",
  },
  // Add more profiles as needed
];

const UserProfilesSection = () => {
  return (
    <section className="py-16 custom-gradient">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl text-white font-bold mb-8">Meet the Talent</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-gray-300 hover:bg-blue-200 hover:scale-105 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={profile.image}
                alt={profile.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{profile.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{profile.role}</p>
              <p className="text-gray-700">{profile.bio}</p>
              <a
                href="/profile"
                className="block bg-blue-600 text-white mt-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserProfilesSection;
