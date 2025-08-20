import express from "express";
import Question from "../models/Question.js";

const router = express.Router();

// Add question (for testing only)
router.post("/add", async (req, res) => {
  try {
    const question = new Question(req.body);
    await question.save();
    res.status(201).json({ message: "Question added", question });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all questions
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
