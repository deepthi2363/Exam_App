import express from "express";
import Result from "../models/result.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get latest result for logged-in user
router.get("/result", authMiddleware, async (req, res) => {
  try {
    const result = await Result.findOne({ userId: req.user })
      .sort({ submittedAt: -1 })
      .limit(1);
    res.json(result);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;
