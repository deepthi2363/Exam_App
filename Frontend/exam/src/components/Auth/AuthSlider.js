// src/components/Auth/AuthSlider.js
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./AuthSlider.css";

export default function AuthSlider() {
  const [activeTab, setActiveTab] = useState("login"); // "login" or "register"

  const handleTab = (tab) => setActiveTab(tab);

  return (
    <div className="auth-slider-container">
      <div className="tab-buttons">
        <button
          className={activeTab === "login" ? "active" : ""}
          onClick={() => handleTab("login")}
        >
          Login
        </button>
        <button
          className={activeTab === "register" ? "active" : ""}
          onClick={() => handleTab("register")}
        >
          Register
        </button>
      </div>
      <div className="slider-wrapper">
        <div className={`slider ${activeTab === "login" ? "show-login" : "show-register"}`}>
          <div className="slide login-slide">
            <Login />
          </div>
          <div className="slide register-slide">
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
}
