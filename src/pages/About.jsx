import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?gym,fitness')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold uppercase text-red-500">
            About Our Gym
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your body, mind, and soul with expert trainers and state-of-the-art equipment.
          </p>
        </motion.div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-white uppercase mb-10"
        >
          Why Choose <span className="text-red-500">Us?</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Section - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img
              src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg"
              alt="Gym Workout"
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 w-100 h-100"
            />
          </motion.div>

          {/* Right Section - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Our gym is more than just a place to work out—it's a **community** that pushes you to **achieve your fitness goals**. With **top-tier facilities**, **expert trainers**, and **tailored fitness programs**, we ensure every member gets the best results.
            </p>

            <div className="mt-6 space-y-4">
              {[
                "Personalized Training Programs",
                "24/7 Gym Access",
                "Expert Trainers & Nutritionists",
                "Modern Equipment & Facilities",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="flex items-center space-x-4"
                >
                  <span className="bg-red-600 text-white p-2 rounded-lg text-lg font-semibold">
                    ✅
                  </span>
                  <p className="text-gray-300">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-red-600 py-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold uppercase text-white">
          Join Now & Transform Your Fitness Journey!
        </h2>
        <p className="text-gray-200 mt-3">Take the first step towards a healthier life.</p>
        <Link
          to="/pricing"
          className="mt-6 inline-block bg-white text-red-600 px-6 py-3 text-lg font-bold rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          View Membership Plans
        </Link>
      </motion.div>
    </div>
  );
}

export default About;
