import React from "react";

function Timetable() {
  const timetableData = [
    { day: "Monday", time: "6:00 AM - 8:00 AM", session: "🏋️ Strength Training" },
    { day: "Tuesday", time: "7:00 AM - 9:00 AM", session: "🔥 Cardio & HIIT" },
    { day: "Wednesday", time: "6:00 AM - 8:00 AM", session: "🧘 Yoga & Flexibility" },
    { day: "Thursday", time: "7:00 AM - 9:00 AM", session: "💪 Weightlifting" },
    { day: "Friday", time: "6:00 AM - 8:00 AM", session: "🏃 CrossFit" },
    { day: "Saturday", time: "8:00 AM - 10:00 AM", session: "🦵 Full Body Workout" },
    { day: "Sunday", time: "Rest Day", session: "😴 Recovery & Mobility" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white flex flex-col items-center p-10">
      {/* Header Section */}
      <h1 className="text-5xl font-extrabold text-white uppercase mb-4 tracking-wide">
        📅 Gym Timetable
      </h1>
      <p className="text-lg text-gray-300 mb-8 italic">
        "Your fitness schedule, your success!"
      </p>

      {/* Timetable Grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {timetableData.map((slot, index) => (
          <div
            key={index}
            className="relative bg-black/30 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-700 
                       transform transition-all duration-300 hover:scale-105 hover:shadow-red-500/50 hover:border-red-500"
          >
            {/* Neon Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-red-500 opacity-10 blur-xl"></div>

            <h2 className="text-2xl font-bold text-red-400 drop-shadow-lg">{slot.day}</h2>
            <p className="text-gray-300 mt-2 font-semibold">{slot.time}</p>
            <p className="text-lg font-medium mt-1 text-white">{slot.session}</p>
          </div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <button className="mt-10 px-6 py-3 text-lg font-bold text-white bg-red-500 rounded-full shadow-lg 
                         hover:bg-red-700 transition-all duration-300 hover:scale-110">
        Join a Session Today!
      </button>
    </div>
  );
}

export default Timetable;
