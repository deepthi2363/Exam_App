import express from "express";
import Question from "../models/Question.js";
import { authMiddleware } from "../middleware/authMiddleware.js"; // named import

const router = express.Router();

// Add question (for testing only, public)
router.post("/add", async (req, res) => {
  try {
    const question = new Question(req.body);
    await question.save();
    res.status(201).json({ message: "Question added", question });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all questions (protected route)
router.get("/", authMiddleware, async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions); // return array of questions
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
