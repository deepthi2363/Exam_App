import { useState, useContext } from "react";
import { registerUser } from "../../api/api";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState(""); // updated
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // send 'username' instead of 'name'
      const res = await registerUser({ username, email, password });
      login(res.data.user, res.data.token);
      navigate("/exam");
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
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
  );
}
