const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { createPlan, getPlans, updatePlan, deletePlan } = require("../controllers/membershipController");

const router = express.Router();

router.post("/", protect, createPlan);
router.get("/", getPlans);
router.put("/:id", protect, updatePlan);
router.delete("/:id", protect, deletePlan);

module.exports = router;
