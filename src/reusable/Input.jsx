import React from "react";

function Input({ placeholder, type }) {
  return (
    <div>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

export default Input;
