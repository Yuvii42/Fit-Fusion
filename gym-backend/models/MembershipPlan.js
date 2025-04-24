const mongoose = require("mongoose");

const MembershipPlanSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: String, required: true }, // e.g., "1 Month", "6 Months"
    benefits: { type: [String], required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MembershipPlan", MembershipPlanSchema);
