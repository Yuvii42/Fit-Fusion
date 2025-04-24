import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
        style={{
          backgroundImage: `url('https://t3.ftcdn.net/jpg/06/51/49/90/360_F_651499051_tQQimfoC1v8z8cD7m0mQjXElxJrMFppt.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="z-10 text-center px-6">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold uppercase tracking-wide">
          Champions <span className="text-red-500">Trained</span>
        </h1>
        <p className="text-gray-300 mt-4 text-lg md:text-xl">
          Push Your Limits | Build Strength | Elevate Performance
        </p>
        <div className="mt-8">
          <Link
            to="/join"
            className="px-6 py-3 text-lg font-semibold text-white bg-red-600 rounded-lg shadow-lg hover:bg-red-700 transition-all"
          >
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
