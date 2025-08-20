// src/components/Navbar/Navbar.js
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Navbar.css"; // optional basic styling

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // redirect to login page after logout
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Exam App</h1>
      <div className="navbar-links">
        {user ? (
          <>
            <Link to="/exam">Exam</Link>
            <Link to="/result">Result</Link>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
