import React, { useMemo, useState } from "react";

function ExpensiveCalc() {
  const [count, setCount] = useState(0); //state 1
  const [input, setInput] = useState(""); //state 2

  const expCal = () => {
    for (let i = 0; i < 100; i++) {
      console.log("exp cal running");
    }
  };

  //   expCal();

  useMemo(() => expCal(), [input]);

  return (
    <div>
      <h1>useMemo exmple</h1>
      <p> count: {count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <p>Text : {input}</p>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default ExpensiveCalc;
