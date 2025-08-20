import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true } // keep as correctAnswer
});

export default mongoose.model("Question", questionSchema);
