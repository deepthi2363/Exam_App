// server.js
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import app from "./src/app.js";

// Import route modules
import authRoutes from "./src/routes/authRoutes.js";
import questionRoutes from "./src/routes/questionRoutes.js";
import examRoutes from "./src/routes/examRoutes.js";
import resultRoutes from "./src/routes/result.js"; // if you have results

dotenv.config();
connectDB();

// Mount routes with proper prefixes
app.use("/api/auth", authRoutes);        // /api/auth/login, /api/auth/register
app.use("/api/questions", questionRoutes);
app.use("/api/exam", examRoutes);
app.use("/api/results", resultRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
