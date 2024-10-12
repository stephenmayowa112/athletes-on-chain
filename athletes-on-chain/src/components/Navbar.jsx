// src/components/NavBar.jsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from React Icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold">Athletes On-Chain</div>

        {/* Hamburger Icon */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-white text-2xl" />
          ) : (
            <FaBars className="text-white text-2xl" />
          )}
        </div>

        {/* Full Nav for larger screens */}
        <ul className="hidden md:flex md:flex-row md:space-x-4 justify-end items-center">
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

      {/* Overlay Menu for Mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col items-center justify-center">
          <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={toggleMenu}
          >
            <FaTimes className="text-white text-2xl" />
          </div>
          <ul className="space-y-4">
            <li>
              <a
                href="/discover"
                className="text-white text-lg hover:text-blue-500"
                onClick={toggleMenu}
              >
                Discover
              </a>
            </li>
            <li>
              <a
                href="/events"
                className="text-white text-lg hover:text-blue-500"
                onClick={toggleMenu}
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="/sponsorship"
                className="text-white text-lg hover:text-blue-500"
                onClick={toggleMenu}
              >
                Sponsorship
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-white text-lg hover:text-blue-500"
                onClick={toggleMenu}
              >
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
      )}
    </nav>
  );
};

export default NavBar;
