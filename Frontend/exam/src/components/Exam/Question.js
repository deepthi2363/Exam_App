export default function Question({ question, onAnswer, selected }) {
  const handleSelect = (option) => {
    onAnswer(question._id, option);
  };

  return (
    <div>
      <h3>{question.question}</h3>
      <ul>
        {question.options.map(opt => (
          <li key={opt}>
            <label>
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
