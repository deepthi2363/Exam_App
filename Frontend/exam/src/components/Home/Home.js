import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { fetchResults } from "../../api/api";
import "../../styles/App.css";

export default function Home() {
  const { user, token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;

    const getResults = async () => {
      try {
        const res = await fetchResults(token);
        setResults(res.data); // assume API returns array of previous results
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getResults();
  }, [token]);

  const handleStartExam = () => {
    navigate("/exam/start");
  };

  return (
    <div className="home-container">
      <h2>Welcome, {user?.username || user?.email}</h2>
      <button className="start-exam-btn" onClick={handleStartExam}>
        Start Exam
      </button>

      <h3>Your Previous Results</h3>
      {loading ? (
        <p>Loading results...</p>
      ) : results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <table className="results-table">
          <thead>
            <tr>
              <th>Exam Date</th>
              <th>Score</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, index) => (
              <tr key={index}>
                <td>{new Date(r.date).toLocaleString()}</td>
                <td>{r.score}</td>
                <td>{r.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
