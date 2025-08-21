import axios from "axios";

//const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
const API_URL = "http://localhost:5000/api";

// ------------------- Auth APIs -------------------
export const registerUser = (data) =>
  axios.post(`${API_URL}/auth/register`, data);

export const loginUser = (data) =>
  axios.post(`${API_URL}/auth/login`, data);
  console.log("Login URL:", API_URL);

// ------------------- Exam APIs -------------------
// Fetch questions (protected route)
export const fetchQuestions = (token) =>
  axios.get(`${API_URL}/questions`, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Submit exam answers (protected route)
export const submitExam = (answers, token) =>
  axios.post(
    `${API_URL}/exam/submit`,
    { answers },
    { headers: { Authorization: `Bearer ${token}` } }
  );

// Fetch past results (optional)
export const fetchResults = (token) =>
  axios.get(`${API_URL}/results`, {
    headers: { Authorization: `Bearer ${token}` },
  });
