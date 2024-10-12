import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-lg">AthletesOnChain</h1>
        <ul className="flex flex-col md:flex-row md:space-x-4">
          <li>
            <a href="#" className="text-white">
              Discover
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Quest
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Pass
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Benefits
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Launchpad
            </a>
          </li>
          <li>
            <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded">
              Check In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
