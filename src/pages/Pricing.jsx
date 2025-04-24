// import React from "react";
// import { motion } from "framer-motion";

// const pricingPlans = [
//   {
//     title: "Basic",
//     price: "$19/mo",
//     features: ["Access to gym", "Free fitness assessment", "Locker room access"],
//     bg: "bg-gray-800",
//     border: "border-gray-600",
//   },
//   {
//     title: "Pro",
//     price: "$39/mo",
//     features: ["Basic features", "Personal trainer (2 sessions/month)", "Group classes"],
//     bg: "bg-red-600",
//     border: "border-red-500",
//   },
//   {
//     title: "Elite",
//     price: "$59/mo",
//     features: ["Pro features", "Unlimited personal training", "Premium supplements"],
//     bg: "bg-yellow-500 text-black",
//     border: "border-yellow-400",
//   },
// ];

// function Pricing() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white flex flex-col items-center p-10">
//       <motion.h1
//         className="text-5xl font-extrabold uppercase tracking-wide"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         💪 Gym Membership Plans
//       </motion.h1>
//       <p className="text-lg text-gray-300 mt-2">Choose the best plan for your fitness goals</p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
//         {pricingPlans.map((plan, index) => (
//           <motion.div
//             key={index}
//             className={`p-8 rounded-2xl shadow-lg border ${plan.border} ${plan.bg} transform transition-all hover:scale-105`}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: index * 0.3 }}
//           >
//             <h2 className="text-3xl font-bold">{plan.title}</h2>
//             <p className="text-2xl font-extrabold mt-2">{plan.price}</p>
//             <ul className="mt-4 text-gray-200 space-y-2">
//               {plan.features.map((feature, i) => (
//                 <li key={i} className="flex items-center">
//                   ✅ {feature}
//                 </li>
//               ))}
//             </ul>
//             <button className="mt-6 w-full px-6 py-3 bg-black rounded-full text-white font-bold hover:bg-opacity-80 transition-all">
//               Join Now
//             </button>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Pricing;


import React from "react";
import { motion } from "framer-motion";
import Services from "./Services";

const pricingPlans = [
  {
    title: "Basic",
    price: "$19/mo",
    features: ["Access to gym", "Fitness assessment", "Locker room"],
    bg: "bg-gray-800",
    border: "border-gray-600",
  },
  {
    title: "Pro",
    price: "$39/mo",
    features: ["Basic features", "Personal trainer (2 sessions/month)", "Group classes"],
    bg: "bg-red-600",
    border: "border-red-500",
  },
  {
    title: "Elite",
    price: "$59/mo",
    features: ["Pro features", "Unlimited personal training", "Premium supplements"],
    bg: "bg-yellow-500 text-black",
    border: "border-yellow-400",
  },
];

const comparisonData = [
  { feature: "Gym Access", basic: "✅", pro: "✅", elite: "✅" },
  { feature: "Fitness Assessment", basic: "✅", pro: "✅", elite: "✅" },
  { feature: "Locker Room", basic: "✅", pro: "✅", elite: "✅" },
  { feature: "Personal Trainer", basic: "❌", pro: "✅ (2/month)", elite: "✅ (Unlimited)" },
  { feature: "Group Classes", basic: "❌", pro: "✅", elite: "✅" },
  { feature: "Premium Supplements", basic: "❌", pro: "❌", elite: "✅" },
];

function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white flex flex-col items-center p-10">
      {/* Pricing Header */}
      <motion.h1
        className="text-5xl font-extrabold uppercase tracking-wide"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        💪 Gym Membership Plans
      </motion.h1>
      <p className="text-lg text-gray-300 mt-2">Choose the best plan for your fitness goals</p>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            className={`p-8 rounded-2xl shadow-lg border ${plan.border} ${plan.bg} transform transition-all hover:scale-105`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <h2 className="text-3xl font-bold">{plan.title}</h2>
            <p className="text-2xl font-extrabold mt-2">{plan.price}</p>
            <ul className="mt-4 text-gray-200 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full px-6 py-3 bg-black rounded-full text-white font-bold hover:bg-opacity-80 transition-all">
              Join Now
            </button>
          </motion.div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="mt-16 w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-6">🆚 Compare Plans</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-700 text-left">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-3 border border-gray-700">Features</th>
                <th className="p-3 border border-gray-700 text-center">Basic</th>
                <th className="p-3 border border-gray-700 text-center">Pro</th>
                <th className="p-3 border border-gray-700 text-center">Elite</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border border-gray-700 text-center">
                  <td className="p-3 border border-gray-700 text-left">{row.feature}</td>
                  <td className="p-3 border border-gray-700">{row.basic}</td>
                  <td className="p-3 border border-gray-700">{row.pro}</td>
                  <td className="p-3 border border-gray-700">{row.elite}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>

    </div>
  );
}

export default Pricing;
