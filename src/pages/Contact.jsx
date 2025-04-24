import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-900 text-white flex flex-col items-center p-10">
      
      {/* Heading */}
      <motion.h1
        className="text-5xl font-extrabold uppercase tracking-wide text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        📞 Contact Us
      </motion.h1>
      <p className="text-lg text-gray-300 mt-2 text-center">
        Have questions? Get in touch with us!
      </p>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 w-full max-w-5xl">
        
        {/* Contact Info */}
        <motion.div 
          className="bg-gray-800 p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">📍 Location</h2>
          <p className="text-gray-300 flex items-center">
            <FaMapMarkerAlt className="mr-2 text-red-500" /> 123 Gym Street, Fitness City
          </p>
          <p className="text-gray-300 flex items-center mt-2">
            <FaPhone className="mr-2 text-red-500" /> +1 234 567 890
          </p>
          <p className="text-gray-300 flex items-center mt-2">
            <FaEnvelope className="mr-2 text-red-500" /> info@gymfitness.com
          </p>

          {/* Social Media Icons */}
          {/* <div className="flex space-x-4 mt-6">
            <FaFacebook className="text-2xl cursor-pointer hover:text-red-500 transition" />
            <FaInstagram className="text-2xl cursor-pointer hover:text-red-500 transition" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-red-500 transition" />
          </div> */}

<div className="flex space-x-4 mt-6">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className="text-2xl cursor-pointer hover:text-red-500 transition" />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="text-2xl cursor-pointer hover:text-red-500 transition" />
      </a>
      <a
        href="https://www.twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className="text-2xl cursor-pointer hover:text-red-500 transition" />
      </a>
    </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">✉️ Send Us a Message</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-red-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-red-500 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-red-500 outline-none"
            ></textarea>
            <button className="bg-red-600 hover:bg-red-500 px-6 py-3 rounded-full text-white font-bold transition-all">
              Send Message
            </button>
          </form>
        </motion.div>

      </div>

      {/* Google Maps Embed */}
      <div className="mt-16 w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-6">📍 Find Us on Google Maps</h2>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-72 rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.9630578153152!3d-37.81627937975178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1a709b3%3A0xfebc9c3a9df0e27b!2sFitness%20Gym!5e0!3m2!1sen!2sus!4v1613530496542!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </div>
  );
}

export default Contact;

