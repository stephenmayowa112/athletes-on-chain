// src/components/NavBar.jsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from React Icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold">Athletes On-Chain</div>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-white text-2xl" />
          ) : (
            <FaBars className="text-white text-2xl" />
          )}
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex-col md:flex md:flex-row md:space-x-4 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <li>
            <a href="/discover" className="text-white hover:text-blue-500">
              Discover
            </a>
          </li>
          <li>
            <a href="/events" className="text-white hover:text-blue-500">
              Events
            </a>
          </li>
          <li>
            <a href="/sponsorship" className="text-white hover:text-blue-500">
              Sponsorship
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-blue-500">
              Contact
            </a>
          </li>
          <li>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Check In
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
