import React, { useCallback, useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  console.log("parent rendered");

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  //   useCallback(() => increment, [count]);

  return (
    <div>
      <h1>Parent comp</h1>
      <p>Count: {count}</p>

      <p>text:{input}</p>
      <input type="text" onChange={(e) => setInput(e.target.value)} />

      <Child fun={increment} />
    </div>
  );
}

export default Parent;
