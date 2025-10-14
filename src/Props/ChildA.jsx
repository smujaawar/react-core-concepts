import React from "react";
import ChildB from "./ChildB";

function ChildA({ user }) {
  return (
    <div>
      <h1>Child A</h1>
      <ChildB user={user} />
    </div>
  );
}

export default ChildA;
