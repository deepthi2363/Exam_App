import React from "react";
import { Link } from "react-router-dom";
//import "./Navbar.css"; // optional, for styling

function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#273c75", color: "white" }}>
      <Link to="/" style={{ margin: "0 10px", color: "white" }}>Login</Link>
      <Link to="/register" style={{ margin: "0 10px", color: "white" }}>Register</Link>
      <Link to="/exam" style={{ margin: "0 10px", color: "white" }}>Exam</Link>
      <Link to="/result" style={{ margin: "0 10px", color: "white" }}>Result</Link>
    </nav>
  );
}

export default Navbar;
