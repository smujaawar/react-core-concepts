import React from "react";
import ChildC from "./ChildC";
import Button from "../reusable/Button";

function ChildB() {
  return (
    <div>
      <h1>Child B</h1>
      <Button label="Remove" />
      <ChildC />
    </div>
  );
}

export default ChildB;
