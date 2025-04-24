import React from "react";
import { FaDumbbell, FaRunning, FaHeartbeat, FaUtensils, FaUserShield, FaSpa } from "react-icons/fa";

function Services() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[70vh] flex items-center justify-center" 
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?gym,workout')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold uppercase text-red-500 animate-fadeIn">
            Our Services
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fadeIn delay-200">
            Elevate your fitness with our specialized services, designed to help you reach your goals.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-white uppercase mb-10">
          What We <span className="text-red-500">Offer</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Service Cards */}
          {servicesData.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 text-center">
              <div className="text-red-500 text-5xl mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-red-600 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase text-white">
          Ready to Transform Your Life?
        </h2>
        <p className="text-gray-200 mt-3">Join us today and start your fitness journey!</p>
        <a href="/pricing" className="mt-6 inline-block bg-white text-red-600 px-6 py-3 text-lg font-bold rounded-lg shadow-md hover:bg-gray-200 transition">
          Get Membership Now
        </a>
      </div>
    </div>
  );
}

// Services Data
const servicesData = [
  { title: "Personal Training", description: "Work one-on-one with our certified trainers to achieve your fitness goals.", icon: <FaDumbbell /> },
  { title: "Cardio & Endurance", description: "Improve your stamina with our top-of-the-line treadmills and cycling equipment.", icon: <FaRunning /> },
  { title: "Health & Wellness", description: "Expert guidance on diet, nutrition, and mental well-being.", icon: <FaHeartbeat /> },
  { title: "Nutrition Plans", description: "Customized meal plans to help you stay in peak shape.", icon: <FaUtensils /> },
  { title: "Strength Training", description: "Build muscle and increase strength with our advanced weight training programs.", icon: <FaUserShield /> },
  { title: "Relaxation & Recovery", description: "Enjoy post-workout recovery with our sauna and massage therapy.", icon: <FaSpa /> }
];

export default Services;
