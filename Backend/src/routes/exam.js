import express from "express";
import Question from "../models/Question.js";
import Result from "../models/result.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get random questions
router.get("/questions", authMiddleware, async (req, res) => {
  try {
    const questions = await Question.aggregate([{ $sample: { size: 5 } }]); // 5 random
    res.json(questions);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// Submit exam
router.post("/submit", authMiddleware, async (req, res) => {
  try {
    const { answers } = req.body; // array of chosen option indices
    const questions = await Question.find({}).limit(answers.length);
    let score = 0;

    questions.forEach((q, i) => {
      if (answers[i] === q.answer) score++;
    });

    const result = new Result({
      userId: req.user,
      score,
      total: answers.length
    });

    await result.save();
    res.json(result);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;
