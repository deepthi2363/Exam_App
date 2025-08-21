import React, { useEffect, useState } from "react";
import { fetchResults } from "../../api/api"; // adjust path as needed

const ResultPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getResults = async () => {
      try {
        const token = localStorage.getItem("token");
        //console.log(localStorage.getItem("token"));

        if (!token) {
          setError("You must be logged in to view results.");
          setLoading(false);
          return;
        }

        const response = await fetchResults(token);
        const resultsData = response.data.results;

        if (!resultsData || resultsData.length === 0) {
          setError("No previous results found.");
        } else {
          setResults(resultsData);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch results. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getResults();
  }, []);

  if (loading) return <div style={{ textAlign: "center" }}>Loading...</div>;
  if (error) return <div style={{ textAlign: "center" }}>{error}</div>;

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>My Previous Exam Results</h2>
      <table style={{ margin: "20px auto", borderCollapse: "collapse", width: "60%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>#</th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Score</th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Total</th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {results.map((res, index) => (
            <tr key={res._id}>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{index + 1}</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{res.score}</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>{res.total}</td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                {new Date(res.date).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultPage;
