import { useLocation } from "react-router-dom";

export default function ResultPage() {
  const location = useLocation();
  const { score, total } = location.state || {};

  if (!score && score !== 0) return <div>No results to show.</div>;

  return (
    <div>
      <h2>Exam Result</h2>
      <p>Score: {score} / {total}</p>
    </div>
  );
}
