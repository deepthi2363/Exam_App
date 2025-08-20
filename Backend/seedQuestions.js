import mongoose from "mongoose";
import dotenv from "dotenv";
import Question from "./src/models/Question.js"; // adjust path

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Arrays of topics and options to generate diverse questions
const topics = [
  "React", "JavaScript", "HTML", "CSS", "Node.js", "MongoDB",
  "Python", "SQL", "Django", "Flask", "API", "HTTP", "Frontend", "Backend"
];

const questionTemplates = [
  topic => `What is ${topic}?`,
  topic => `${topic} is primarily used for?`,
  topic => `Which of the following is related to ${topic}?`,
  topic => `Which statement about ${topic} is correct?`,
  topic => `Select the correct option about ${topic}`
];

const optionsPool = [
  ["Library", "Framework", "Language", "IDE"],
  ["Frontend", "Backend", "Database", "API"],
  ["Python", "JavaScript", "Java", "C++"],
  ["GET", "POST", "PUT", "DELETE"],
  ["MongoDB", "MySQL", "PostgreSQL", "SQLite"]
];

const correctAnswerMap = [0, 0, 1, 0, 0]; // index of correct answer in each optionsPool

// Generate 70 unique questions
const generateQuestions = () => {
  const questions = [];
  for (let i = 0; i < 70; i++) {
    const topic = topics[i % topics.length];
    const template = questionTemplates[i % questionTemplates.length];
    const options = optionsPool[i % optionsPool.length];
    const correctAnswer = options[correctAnswerMap[i % correctAnswerMap.length]];
    questions.push({
      question: template(topic),
      options,
      correctAnswer
    });
  }
  return questions;
};

const seed = async () => {
  try {
    await Question.deleteMany(); // clear existing questions
    const questions = generateQuestions();
    await Question.insertMany(questions);
    console.log("✅ 70 unique questions seeded successfully!");
    mongoose.disconnect();
  } catch (err) {
    console.error(err);
    mongoose.disconnect();
  }
};

seed();
