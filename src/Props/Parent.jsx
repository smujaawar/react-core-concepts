import React from "react";
import Child from "./Child";

function Parent() {
  const user = {};

  return (
    <div>
      <h1>Parent comp</h1>
      <Child user={user} />
    </div>
  );
}

export default Parent;
