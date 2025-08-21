// src/components/Exam/StartExam.js
import { useEffect, useState, useContext } from "react";
import { fetchQuestions, submitExam } from "../../api/api";
import { AuthContext } from "../../context/AuthContext";
import Question from "./Question";
import Timer from "./Timer";
import { useNavigate } from "react-router-dom";

export default function StartExam() {
  const { token } = useContext(AuthContext);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return; // Prevent fetch if not logged in

    const getQuestions = async () => {
      try {
        const res = await fetchQuestions(token);
        setQuestions(res.data);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch questions");
      }
    };
    getQuestions();
  }, [token]);

  const handleAnswer = (questionId, selectedOption) => {
    setAnswers((prev) => {
      const existing = prev.find((a) => a.questionId === questionId);
      if (existing) {
        return prev.map((a) =>
          a.questionId === questionId ? { questionId, selectedOption } : a
        );
      } else {
        return [...prev, { questionId, selectedOption }];
      }
    });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1);
  };
  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };
  const handleSubmit = async () => {
    try {
      const res = await submitExam(answers, token);
      navigate("/results", { state: res.data });
    } catch (err) {
      console.error(err);
      alert("Failed to submit exam");
    }
  };

  if (!questions.length) return <div>Loading questions...</div>;

  return (
    <div>
      <Timer duration={30 * 60} onTimeUp={handleSubmit} />
      <Question
        question={questions[currentIndex]}
        onAnswer={handleAnswer}
        selected={answers.find(
          (a) => a.questionId === questions[currentIndex]._id
        )?.selectedOption}
      />
      <button onClick={handlePrevious} disabled={currentIndex === 0}>
        Previous
      </button>
      <button
        onClick={handleNext}
        disabled={currentIndex === questions.length - 1}
      >
        Next
      </button>
      {currentIndex === questions.length - 1 && (
        <button onClick={handleSubmit}>Submit Exam</button>
      )}
    </div>
  );
}
