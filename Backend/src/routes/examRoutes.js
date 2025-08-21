import express from "express";
import jwt from "jsonwebtoken";
import Question from "../models/Question.js";
import Result from "../models/result.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();


// Start Exam - fetch random questions
router.get("/start", authMiddleware, async (req, res) => {
  try {
    const questions = await Question.aggregate([{ $sample: { size: 10 } }]); // random 10
    const sanitized = questions.map(q => ({
      _id: q._id,
      question: q.question,
      options: q.options
    }));
    res.json({ questions: sanitized });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Submit Exam - calculate score
router.post("/submit", authMiddleware, async (req, res) => {
  try {
    const { answers } = req.body;
    let score = 0;

    for (const ans of answers) {
      const q = await Question.findById(ans.questionId);
      if (q && q.correctAnswer === ans.selectedOption) score++;
    }

    const result = new Result({
      user: req.userId,
      score,
      total: answers.length
    });
    await result.save();

    res.json({
      message: "Exam submitted successfully",
      result: {
        id: result._id,
        score: result.score,
        total: result.total,
        date: result.date
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/results", authMiddleware, async (req, res) => {
  try {
    const results = await Result.find({ user: req.userId }).sort({ date: -1 });
    res.json({ results }); // return array of past results
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export default router;
