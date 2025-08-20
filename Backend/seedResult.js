import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import Result from "./src/models/Result.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Read JSON file
const __dirname = path.resolve();
const results = JSON.parse(fs.readFileSync(path.join(__dirname, "result.json"), "utf-8"));

const seedResults = async () => {
  try {
    await Result.deleteMany(); // optional: clears old results
    await Result.insertMany(results);
    console.log("✅ Sample results seeded!");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.disconnect();
  }
};

seedResults();
