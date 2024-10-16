// src/components/EventListingsSection.jsx
import React from "react";

const events = [
  {
    name: "Scouting Event in London",
    date: "October 20, 2024",
    location: "London, UK",
    description:
      "Join top scouts to discover rising football talent in the UK.",
    image: "/path/to/london-event.jpg",
  },
  {
    name: "African Football Academy Tournament",
    date: "November 5, 2024",
    location: "Lagos, Nigeria",
    description:
      "Showcase your skills in one of the biggest football tournaments in Africa.",
    image: "/path/to/lagos-event.jpg",
  },
  {
    name: "Youth Soccer Cup",
    date: "December 10, 2024",
    location: "New York, USA",
    description:
      "Compete in the annual Youth Soccer Cup and catch the attention of global scouts.",
    image: "/path/to/ny-event.jpg",
  },
  // Add more events as needed
];

const EventListingsSection = () => {
  return (
    <section className="py-16 text-gray-100 custom-gradient">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl  text-white font-bold mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-[#1b1a1a] p-6 rounded-lg hover:bg-[#3c3b3b] hover:scale-105 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
              <p className="text-[#c4d14e] mb-2">{event.date}</p>
              <p className="text-[#c4d14e] mb-2">{event.location}</p>
              <p className="text-gray-100">{event.description}</p>
              <a
                href="/event"
                className="block bg-blue-600 text-white mt-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventListingsSection;
