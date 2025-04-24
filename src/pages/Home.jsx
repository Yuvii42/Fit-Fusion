import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaDumbbell, FaRunning, FaHeartbeat, FaUsers } from "react-icons/fa";

function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full transition-transform duration-700"
          style={{
            backgroundImage: `url('https://t3.ftcdn.net/jpg/06/51/49/90/360_F_651499051_tQQimfoC1v8z8cD7m0mQjXElxJrMFppt.jpg')`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-5xl md:text-7xl font-extrabold uppercase tracking-wide"
          >
            Champions <span className="text-red-500">Trained</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-300 mt-4 text-lg md:text-xl"
          >
            Push Your Limits | Build Strength | Elevate Performance
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex gap-6"
          >
            <Link
              to="/join"
              className="px-6 py-3 text-lg font-semibold text-white bg-red-600 rounded-lg shadow-lg hover:bg-red-700 transition-all"
            >
              Join Now
            </Link>
            <Link
              to="/pricing"
              className="px-6 py-3 text-lg font-semibold text-white bg-yellow-500 rounded-lg shadow-lg hover:bg-yellow-600 transition-all"
            >
              View Plans
            </Link>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold uppercase mb-6"
        >
          Why Choose <span className="text-red-500">Us?</span>
        </motion.h2>

        <p className="text-gray-300 max-w-3xl mx-auto">
          We provide top-tier facilities, expert trainers, and custom fitness programs to help you reach your goals.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
          {[
            { icon: <FaDumbbell />, title: "Personal Training", desc: "Customized training for your goals." },
            { icon: <FaRunning />, title: "Cardio & Endurance", desc: "Boost your stamina and strength." },
            { icon: <FaHeartbeat />, title: "Wellness Programs", desc: "Holistic fitness for mind & body." },
            { icon: <FaUsers />, title: "Group Classes", desc: "Train together for motivation." },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-black/60 rounded-lg text-center shadow-md hover:scale-105 transition-transform duration-300"
            >
              <div className="text-red-500 text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-300 mt-2">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white uppercase mb-10">
          What Our <span className="text-red-500">Members Say</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { name: "Yuvi Rajput", text: "Best gym experience ever! Highly recommend." },
            { name: "Yash Shinde", text: "Great trainers and facilities, love the environment!" },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-black/70 p-6 rounded-lg shadow-lg"
            >
              <p className="text-gray-300">"{testimonial.text}"</p>
              <h3 className="text-red-500 font-semibold mt-4">- {testimonial.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase text-white">
          Ready to Join the Best Gym?
        </h2>
        <p className="text-gray-200 mt-3">Start your fitness journey with us today.</p>
        <Link
          to="/join"
          className="mt-6 inline-block bg-white text-red-600 px-6 py-3 text-lg font-bold rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}

export default Home;
