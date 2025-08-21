import React from "react";

import "./Question.css"
export default function Question({ question, selected, onAnswer }) {
  const handleSelect = (option) => {
    onAnswer(question._id, option);
  };

  return (
    <div className="question-container">
      <h3 className="question-text">{question.question}</h3>
      <ul className="options-list">
        {question.options.map((opt) => (
          <li key={opt} className="option-item">
            <label className={`option-label ${selected === opt ? "selected" : ""}`}>
              <input
                type="radio"
                name={question._id}
                value={opt}
                checked={selected === opt}
                onChange={() => handleSelect(opt)}
              />
              {opt}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
