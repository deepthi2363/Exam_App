import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "./src/models/User.js"; // adjust path

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Sample users
const users = [
  { username: "Deepthi", email: "deepthi1@example.com", password: "password123" },
  { username: "Arjun", email: "arjun1@example.com", password: "password123" },
  { username: "Sneha", email: "sneha1@example.com", password: "password123" },
  { username: "Rohit", email: "rohit1@example.com", password: "password123" },
  { username: "Anjali", email: "anjali1@example.com", password: "password123" },
  { username: "Vikram", email: "vikram1@example.com", password: "password123" },
  { username: "Priya", email: "priya1@example.com", password: "password123" },
  { username: "Karthik", email: "karthik1@example.com", password: "password123" },
  { username: "Meera", email: "meera1@example.com", password: "password123" },
  { username: "Rahul", email: "rahul1@example.com", password: "password123" }
];

const seed = async () => {
  try {
    await User.deleteMany(); // clear existing users

    for (let user of users) {
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(user.password, salt);
      await User.create({ username: user.username, email: user.email, passwordHash });
    }

    console.log("✅ 10 users seeded successfully!");
    mongoose.disconnect();
  } catch (err) {
    console.error(err);
    mongoose.disconnect();
  }
};

seed();
