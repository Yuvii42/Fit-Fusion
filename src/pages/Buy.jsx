import React from "react";

function BuyNow() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-red-900 text-white flex flex-col items-center p-10">
      {/* Heading Section */}
      <h1 className="text-5xl font-extrabold uppercase tracking-wide text-center">
        💪 Get Fit for Life!
      </h1>
      <p className="text-lg text-gray-300 mt-2 text-center">
        Choose a plan and take control of your fitness journey.
      </p>

      {/* Pricing Plans */}
      <div className="grid md:grid-cols-4 gap-6 mt-10 max-w-6xl">
        {/* Basic Plan */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-bold">Basic Plan</h2>
          <p className="text-gray-400 mt-2">Access to gym equipment</p>
          <p className="text-3xl font-bold mt-4">$19/month</p>
          <button className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg">
            Buy Now
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition border-2 border-red-500">
          <h2 className="text-2xl font-bold text-red-500">Premium Plan</h2>
          <p className="text-gray-400 mt-2">Gym + Personal Trainer + Diet Plan</p>
          <p className="text-3xl font-bold mt-4">$49/month</p>
          <button className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg">
            Buy Now
          </button>
        </div>

        {/* Elite Plan */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-bold">Elite Plan</h2>
          <p className="text-gray-400 mt-2">All Benefits + 24/7 Access</p>
          <p className="text-3xl font-bold mt-4">$79/month</p>
          <button className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg">
            Buy Now
          </button>
        </div>

        {/* Lifetime Plan */}
        <div className="bg-yellow-500 p-6 rounded-lg shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-bold text-black">Lifetime Access 🔥</h2>
          <p className="text-gray-900 mt-2">One-time payment, unlimited access!</p>
          <p className="text-3xl font-bold mt-4 text-black">$299</p>
          <button className="mt-4 bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg">
            Buy Lifetime
          </button>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold">🔥 Why Choose Us?</h2>
        <ul className="mt-4 text-gray-300 space-y-2">
          <li>✅ State-of-the-art Equipment</li>
          <li>✅ Expert Trainers & Diet Plans</li>
          <li>✅ Flexible Timings & 24/7 Access</li>
          <li>✅ Group Classes & Personal Training</li>
          <li>✅ Lifetime Plan: Pay Once, Stay Fit Forever!</li>
        </ul>
      </div>
    </div>
  );
}

export default BuyNow;
