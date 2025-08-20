import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

// Auth APIs
export const registerUser = (data) => axios.post(`${API_URL}/api/auth/register`, data);
export const loginUser = (data) => axios.post(`${API_URL}/api/auth/login`, data);

// Exam APIs
export const fetchQuestions = (token) =>
  axios.get(`${API_URL}/api/exam/start`, { headers: { Authorization: `Bearer ${token}` } });

export const submitExam = (answers, token) =>
  axios.post(`${API_URL}/api/exam/submit`, { answers }, { headers: { Authorization: `Bearer ${token}` } });

export const fetchResults = (token) =>
  axios.get(`${API_URL}/api/results`, { headers: { Authorization: `Bearer ${token}` } });
