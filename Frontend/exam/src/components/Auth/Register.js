import { useState, useContext } from "react";
import { registerUser } from "../../api/api";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../../components/Auth/AuthSlider.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await registerUser({ username, email, password });
      login(res.data.user, res.data.token);
      setSuccessMsg("Successfully registered!");

      setTimeout(() => {
        navigate("/exam/start"); // redirect after showing success
      }, 1000);
    } catch (err) {
      setErrorMsg(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        {successMsg && <div className="success-msg">{successMsg}</div>}
        {errorMsg && <div style={{ color: "red", marginBottom: "10px" }}>{errorMsg}</div>}
        <input
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          required
        />
        <input
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
