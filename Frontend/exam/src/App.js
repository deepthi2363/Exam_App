// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import AuthSlider from "./components/Auth/AuthSlider";
import StartExam from "./components/Exam/StartExam";
import ResultPage from "./components/Result/ResultPage";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      {/* Navbar will show dynamic links based on login status */}
      <Navbar />

      <Routes>
        {/* Landing page: Login/Register slider */}
        <Route path="/" element={user ? <Navigate to="/exam" /> : <AuthSlider />} />

        {/* Exam page: only accessible if logged in */}
        <Route path="/exam" element={user ? <StartExam /> : <Navigate to="/" />} />

        {/* Result page: only accessible if logged in */}
        <Route path="/result" element={user ? <ResultPage /> : <Navigate to="/" />} />

        {/* Fallback for unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
