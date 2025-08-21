import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginUser } from "../../api/api";
import { useNavigate } from "react-router-dom";
import "../../components/Auth/AuthSlider.css";

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setIsSubmitting(true);

    try {
      const res = await loginUser({ email, password });

      // Save user + token in context
      login({ user: res.data.user, token: res.data.token });

      // Show success message
      setSuccessMsg("Successfully logged in!");

      // Wait 1 second before navigating
      setTimeout(() => {
        navigate("/exam/start");
      }, 1000);
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Login failed. Check credentials.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {successMsg && <div className="success-msg">{successMsg}</div>}
        {errorMsg && <div style={{ color: "red", marginBottom: "10px" }}>{errorMsg}</div>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          disabled={isSubmitting}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          disabled={isSubmitting}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
