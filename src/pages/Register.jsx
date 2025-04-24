import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Simulated API call for registration
  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setLoading(true);
    setTimeout(() => setLoading(false), 3000); // Simulated delay
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-red-900 text-white">
      {/* Wrapper */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        
        {/* Left Side - Gym Image */}
        <div className="hidden md:block md:w-1/2 bg-cover bg-center relative" 
          style={{ backgroundImage: "url('https://source.unsplash.com/600x800/?gym,fitness')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white text-center">Join the <span className="text-red-500">Best Gym</span> Today!</h2>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          className="w-full md:w-1/2 p-8"
        >
          <h2 className="text-4xl font-bold text-center text-red-500">🏋️ Register</h2>
          <p className="text-gray-400 text-center mt-2">Create your fitness account</p>

          {/* Progress Bar Animation */}
          {loading && (
            <motion.div 
              className="w-full h-1 bg-red-500 mt-4"
              initial={{ width: "0%" }} 
              animate={{ width: "100%" }} 
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          )}

          {/* Registration Form */}
          <form className="mt-6 space-y-4" onSubmit={handleRegister}>
            {/* Name */}
            <div>
              <label className="block text-gray-300">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-300">Password</label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter a strong password"
                  className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 pr-10"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span 
                  className="absolute top-3 right-3 cursor-pointer text-gray-400"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </span>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-300">Confirm Password</label>
              <div className="relative">
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 pr-10"
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span 
                  className="absolute top-3 right-3 cursor-pointer text-gray-400"
                  onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                >
                  {confirmPasswordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </span>
              </div>
            </div>

            {/* Register Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg flex justify-center items-center"
              disabled={loading}
            >
              {loading ? "Registering..." : "Sign Up"}
            </motion.button>
          </form>

          {/* Social Login */}
          <div className="flex justify-center space-x-4 mt-6">
            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              <FaFacebook size={20} className="mr-2" /> Facebook
            </button>
            <button className="flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
              <FaGoogle size={20} className="mr-2" /> Google
            </button>
          </div>

          {/* Already Have an Account? */}
          <p className="mt-6 text-center text-gray-400">
            Already have an account? <a href="/login" className="text-red-500 hover:underline">Login</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Register;
