import React, { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "Aspiring Footballer",
    quote:
      "Athletes On-Chain has given me the opportunity to connect with top scouts and showcase my skills on a global stage.",
    image: "/images/man1.jpeg",
  },
  {
    name: "Jane Smith",
    role: "Professional Scout",
    quote:
      "This platform has revolutionized the way we discover talent. The transparency and data-driven insights are game-changers.",
    image: "/images/woman1.jpeg",
  },
  {
    name: "Mike Johnson",
    role: "Football Coach",
    quote:
      "The tools provided by Athletes On-Chain have made talent development much more efficient for our academy.",
    image: "/images/man2.jpeg",
  },
  {
    name: "Sarah Williams",
    role: "Sports Enthusiast",
    quote:
      "As a fan, I love how easy it is to follow and support upcoming talent on the platform.",
    image: "/images/woman2.jpeg",
  },
  // Add more testimonials here as needed
];

const TestimonialsSection = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    let scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollBy({ left: 200, behavior: "smooth" });

        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0; // Reset scroll to the beginning
        }
      
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  return (
    <section className="py-14 text-gray-100 custom-gradient">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What People Are Saying</h2>

        {/* Horizontal scrolling with smooth animation */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-hidden text-gray-100 space-x-5 px-4 snap-x snap-mandatory scroll-smooth"
        >
          {/* Duplicate the testimonials for infinite scrolling */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1b1a1a] hover:bg-[#3c3b3b] p-4 rounded-3xl shadow-lg w-[300px] h-[300px] flex-shrink-0 snap-center transition-transform duration-800 hover:scale-105"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-26 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-sm text-gray-100 mb-2">
                {testimonial.role}
              </p>
              <p className="text-gray-100">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        /* Hide the scrollbar */
        .overflow-hidden::-webkit-scrollbar {
          display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
        }
        .overflow-hidden {
          -ms-overflow-style: none; /* Hide scrollbar for Internet Explorer and Edge */
          scrollbar-width: none; /* Hide scrollbar for Firefox */
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
