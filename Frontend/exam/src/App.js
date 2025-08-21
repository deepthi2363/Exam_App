// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import AuthSlider from "./components/Auth/AuthSlider";
import StartExam from "./components/Exam/StartExam";
import ResultPage from "./components/Result/ResultPage";
import { AuthContext } from "./context/AuthContext";
import Home from "./components/Home/Home";


function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      {/* Navbar will show dynamic links based on login status */}
      <Navbar />

      <Routes>
        {/* Landing page: Login/Register slider */}
        <Route path="/" element={user ? <Navigate to="/home" /> : <AuthSlider />} />

        {/* Home page: only accessible if logged in */}
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />

        {/* Exam page: only accessible if logged in */}
        <Route path="/exam" element={user ? <StartExam /> : <Navigate to="/" />} />

        {/* Result page: only accessible if logged in */}
        <Route path="/results" element={user ? <ResultPage /> : <Navigate to="/" />} />

        {/* Fallback for unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
