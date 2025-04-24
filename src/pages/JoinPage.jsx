import React from "react";
import { Link } from "react-router-dom";

function JoinPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Join Our Gym</h1>
      <p className="mt-4 text-lg">Start your fitness journey with us today!</p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-red-600 rounded-lg shadow-lg hover:bg-red-700 transition-all"
      >
        Go Back
      </Link>
    </div>
  );
}

export default JoinPage;
