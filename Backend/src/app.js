import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import examRoutes from "./routes/exam.js";
import resultRoutes from "./routes/result.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", examRoutes);
app.use("/api", resultRoutes);

export default app;
