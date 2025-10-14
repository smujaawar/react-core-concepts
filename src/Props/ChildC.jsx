import React from "react";
import Button from "../reusable/Button";

function ChildC({ user }) {
  console.log(user);
  const { name = "guest", email = "no email" } = user;

  return (
    <div>
      <h1>Child C</h1>
      <h1>Name: {name}</h1>
      <h2>Email: {email}</h2>
      <Button />
    </div>
  );
}

export default ChildC;
