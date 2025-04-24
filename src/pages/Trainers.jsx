import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaCalendarCheck } from "react-icons/fa";

const trainers = [
  {
    id: 1,
    name: "John Doe",
    specialty: "Strength & Conditioning",
    image: "https://source.unsplash.com/300x300/?gym,trainer",
    social: { facebook: "#", instagram: "#", twitter: "#" },
  },
  {
    id: 2,
    name: "Emily Smith",
    specialty: "Yoga & Flexibility",
    image: "https://source.unsplash.com/300x300/?yoga,trainer",
    social: { facebook: "#", instagram: "#", twitter: "#" },
  },
  {
    id: 3,
    name: "Michael Johnson",
    specialty: "Cardio & HIIT",
    image: "https://source.unsplash.com/300x300/?running,trainer",
    social: { facebook: "#", instagram: "#", twitter: "#" },
  },
];

function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [isBooking, setIsBooking] = useState(false);

  const openBooking = (trainer) => {
    setSelectedTrainer(trainer);
    setIsBooking(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white flex flex-col items-center p-10">
      {/* Header */}
      <motion.h1 
        className="text-5xl font-extrabold uppercase tracking-wide"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🏋️ Meet Our Trainers
      </motion.h1>
      <p className="text-lg text-gray-300 mt-4 italic">
        "Train with the best, achieve your goals!"
      </p>

      {/* Trainer Cards */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {trainers.map((trainer) => (
          <motion.div
            key={trainer.id}
            className="relative bg-black/30 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-700 
                      transform transition-all duration-300 hover:scale-105 hover:shadow-red-500/50 hover:border-red-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: trainer.id * 0.3 }}
          >
            {/* Trainer Image */}
            <img src={trainer.image} alt={trainer.name} className="w-32 h-32 mx-auto rounded-full border-4 border-red-500 shadow-lg" />

            {/* Trainer Details */}
            <h2 className="text-2xl font-bold mt-4">{trainer.name}</h2>
            <p className="text-gray-300">{trainer.specialty}</p>

            {/* Social Icons */}
            <div className="flex justify-center space-x-4 mt-4">
              <a href={trainer.social.facebook} className="text-blue-400 hover:text-blue-600 transition-all"><FaFacebook size={24} /></a>
              <a href={trainer.social.instagram} className="text-pink-400 hover:text-pink-600 transition-all"><FaInstagram size={24} /></a>
              <a href={trainer.social.twitter} className="text-blue-300 hover:text-blue-500 transition-all"><FaTwitter size={24} /></a>
            </div>

            {/* Booking Button */}
            <button
              className="mt-4 px-4 py-2 bg-red-500 rounded-full text-white font-bold flex items-center justify-center gap-2 
                         hover:bg-red-700 transition-all duration-300 w-full"
              onClick={() => openBooking(trainer)}
            >
              <FaCalendarCheck /> Book Session
            </button>
          </motion.div>
        ))}
      </div>

      {/* Booking Popup */}
      {isBooking && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-white">Book a Session with {selectedTrainer.name}</h2>
            <p className="text-gray-400 mt-2">Specialty: {selectedTrainer.specialty}</p>
            <button
              className="mt-4 px-6 py-2 bg-green-500 rounded-full text-white font-bold hover:bg-green-700 transition-all"
              onClick={() => setIsBooking(false)}
            >
              Confirm Booking
            </button>
            <button
              className="mt-4 px-6 py-2 bg-gray-600 rounded-full text-white font-bold hover:bg-gray-800 transition-all ml-4"
              onClick={() => setIsBooking(false)}
            >
              Cancel
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Trainers;
