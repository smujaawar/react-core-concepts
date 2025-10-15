import React from "react";

function Child({ fun }) {
  console.log("Child rendered");

  return (
    <div>
      <h1>Child comp</h1>
      <button onClick={fun}>increment</button>
    </div>
  );
}

export default React.memo(Child);
