const MembershipPlan = require("../models/MembershipPlan");

exports.createPlan = async (req, res) => {
  try {
    const plan = new MembershipPlan(req.body);
    await plan.save();
    res.status(201).json(plan);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getPlans = async (req, res) => {
  try {
    const plans = await MembershipPlan.find();
    res.json(plans);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.updatePlan = async (req, res) => {
  try {
    const plan = await MembershipPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(plan);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deletePlan = async (req, res) => {
  try {
    await MembershipPlan.findByIdAndDelete(req.params.id);
    res.json({ message: "Plan deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
