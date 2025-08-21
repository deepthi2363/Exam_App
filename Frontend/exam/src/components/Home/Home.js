import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const API_BASE = process.env.REACT_APP_API_BASE_URL; // dynamically read URL

  const startExam = () => {
    navigate("/exam");
  };

  const viewResult = async () => {
    try {
      const token = localStorage.getItem("token"); // JWT token
      const response = await axios.get(`${API_BASE}/api/exam/results`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const results = response.data;

      if (!results || results.length === 0) {
        alert("No previous results found.");
        return;
      }

      const lastResult = results[results.length - 1];

      navigate("/result", { state: { score: lastResult.score, total: lastResult.total } });
    } catch (error) {
      console.error("Failed to fetch results:", error);
      alert("Failed to fetch results. Please try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Exam Portal</h1>
      <button onClick={startExam} style={{ marginRight: "10px" }}>
        Start Exam
      </button>
      <button onClick={viewResult}>View Previous Result</button>
    </div>
  );
};

export default Home;
