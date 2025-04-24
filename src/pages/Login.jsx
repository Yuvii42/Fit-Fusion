// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";

// function Login() {
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-red-900 text-white">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-xl"
//       >
//         {/* Logo & Heading */}
//         <h2 className="text-4xl font-bold text-center text-red-500">🏋️ Gym Login</h2>
//         <p className="text-gray-400 text-center mt-2">Access your fitness dashboard</p>

//         {/* Form Fields */}
//         <form className="mt-6 space-y-4">
//           {/* Email Input */}
//           <div>
//             <label className="block text-gray-300">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
//             />
//           </div>

//           {/* Password Input */}
//           <div>
//             <label className="block text-gray-300">Password</label>
//             <div className="relative">
//               <input
//                 type={passwordVisible ? "text" : "password"}
//                 placeholder="Enter your password"
//                 className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 pr-10"
//               />
//               <span
//                 className="absolute top-3 right-3 cursor-pointer text-gray-400"
//                 onClick={() => setPasswordVisible(!passwordVisible)}
//               >
//                 {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
//               </span>
//             </div>
//           </div>

//           {/* Login Button */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg"
//           >
//             Login
//           </motion.button>
//         </form>

//         {/* Divider */}
//         <div className="flex items-center my-6">
//           <hr className="flex-grow border-gray-600" />
//           <span className="px-3 text-gray-400">OR</span>
//           <hr className="flex-grow border-gray-600" />
//         </div>

//         {/* Social Media Login */}
//         <div className="flex justify-center space-x-4">
//           <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
//             <FaFacebook size={20} className="mr-2" /> Facebook
//           </button>
//           <button className="flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
//             <FaGoogle size={20} className="mr-2" /> Google
//           </button>
//         </div>

//         {/* Sign Up Link */}
//         <p className="mt-6 text-center text-gray-400">
//           Don't have an account? <a href="/register" className="text-red-500 hover:underline">Sign Up</a>
//         </p>
//       </motion.div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // Simulate login loading
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 3000); // Simulate API call delay
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-red-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-xl"
      >
        {/* Logo & Heading */}
        <h2 className="text-4xl font-bold text-center text-red-500">🏋️ Gym Login</h2>
        <p className="text-gray-400 text-center mt-2">Access your fitness dashboard</p>

        {/* Progress Bar */}
        {loading && (
          <motion.div
            className="w-full h-1 bg-red-500 mt-4"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        )}

        {/* Form Fields */}
        <form className="mt-6 space-y-4" onSubmit={handleLogin}>
          {/* Email Input */}
          <div>
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-300">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 pr-10"
                required
              />
              <span
                className="absolute top-3 right-3 cursor-pointer text-gray-400"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </span>
            </div>
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg flex justify-center items-center"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-600" />
          <span className="px-3 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* Social Media Login */}
        <div className="flex justify-center space-x-4">
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            <FaFacebook size={20} className="mr-2" /> Facebook
          </button>
          <button className="flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
            <FaGoogle size={20} className="mr-2" /> Google
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-gray-400">
          Don't have an account? <a href="/register" className="text-red-500 hover:underline">Sign Up</a>
        </p>
      </motion.div>
    </div>
  );
}

export default Login;
