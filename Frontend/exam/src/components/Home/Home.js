import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // import css

const Home = () => {
  const navigate = useNavigate();

  const startExam = () => {
    navigate("/exam");
  };

  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title">Welcome to the Exam Portal</h1>
        <button onClick={startExam} className="start-btn">
          Start Exam
        </button>
      </div>
    </div>
  );
};

export default Home;
