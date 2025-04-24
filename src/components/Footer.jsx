import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1 - Brand & About */}
        <div>
          <h2 className="text-2xl font-bold text-red-500">🏋️ Gym Fitness</h2>
          <p className="mt-3 text-gray-400">
            Your journey to a healthier life starts here. Join us for the best training and facilities.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-red-500">Quick Links</h2>
          <ul className="mt-3 space-y-2">
            <li><a href="/" className="hover:text-red-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-red-400 transition">About Us</a></li>
            <li><a href="/services" className="hover:text-red-400 transition">Services</a></li>
            <li><a href="/contact" className="hover:text-red-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact & Social Media */}
        <div>
          <h2 className="text-xl font-bold text-red-500">Get in Touch</h2>
          <p className="mt-2 text-gray-400">📍 Shastri Bhawan, Parul University</p>

          {/* Email Contact */}
          <p className="mt-2 flex items-center text-gray-400 hover:text-red-400 transition cursor-pointer">
            <FaEnvelope className="mr-2 text-lg" />
            <a href="mailto:yuvviirajpu@gmail.com">contact@gymfitness.com</a>
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition text-2xl">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition text-2xl">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition text-2xl">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition text-2xl">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Gym Fitness. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
