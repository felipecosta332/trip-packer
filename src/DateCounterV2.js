import { useState } from "react";

export const DateCounterV2 = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div style={{ margin: 0, textAlign: "center" }}>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(event) => setStep(Number(event.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(event) => setCount(Number(event.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}></button>
        </div>
      ) : null}
    </div>
  );
};