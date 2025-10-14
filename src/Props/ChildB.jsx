import React from "react";
import ChildC from "./ChildC";

function ChildB({ user }) {
  return (
    <div>
      <h1>Child B</h1>
      <ChildC user={user} />
    </div>
  );
}

export default ChildB;
