import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [String],
  answer: { type: Number, required: true } // index of correct option
});

export default mongoose.model("Question", questionSchema);
