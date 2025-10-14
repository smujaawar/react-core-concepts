import React from "react";

function Button({ label = "Click" }) {
  return (
    <div>
      <button>{label}</button>
    </div>
  );
}

export default Button;
