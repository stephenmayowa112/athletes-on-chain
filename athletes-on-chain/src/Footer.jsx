// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Athletes On-Chain</h3>
            <p className="text-gray-400">
              Athletes On-Chain is the premier platform for talent discovery,
              development, and community building in the football world.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#fiit"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Discover
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#sponsor"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Sponsorship
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://twitter.com"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@athletesonchain.com"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  support@athletesonchain.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+1234567890"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  +234 811 538 3780
                </a>
              </li>
              <li>Location: 123 Football Ave, Sport City</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Athletes On-Chain. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
