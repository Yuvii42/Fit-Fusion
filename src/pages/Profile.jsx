import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check if the user is logged in
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login"); // Redirect to login if not authenticated
      return;
    }

    // Mock user data (Replace this with actual user details from the backend later)
    setUser({
      name: "John Doe",
      email: "johndoe@example.com",
      membership: "Premium",
    });
  }, [navigate]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://t3.ftcdn.net/jpg/06/51/49/90/360_F_651499051_tQQimfoC1v8z8cD7m0mQjXElxJrMFppt.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md text-center"
      >
        <h2 className="text-3xl font-bold text-yellow-500">Your Profile</h2>
        {user ? (
          <div className="mt-4">
            <p className="text-lg">
              <span className="font-semibold">Name:</span> {user.name}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Membership:</span> {user.membership}
            </p>
          </div>
        ) : (
          <p className="mt-4 text-gray-300">Loading user details...</p>
        )}

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-6 px-6 py-2 text-lg font-semibold text-white bg-red-600 rounded-lg shadow-lg hover:bg-red-700 transition-all"
        >
          Logout
        </button>
      </motion.div>
    </div>
  );
}

export default Profile;
