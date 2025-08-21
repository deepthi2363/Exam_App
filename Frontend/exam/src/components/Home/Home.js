import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const startExam = () => {
    navigate("/exam");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-10 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Welcome to the Exam Portal
        </h1>
        <button
          onClick={startExam}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition duration-300"
        >
          Start Exam
        </button>
      </div>
    </div>
  );
};

export default Home;
