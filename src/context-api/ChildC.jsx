import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import Button from "../reusable/Button";
import Input from "../reusable/Input";

function ChildC() {
  const { name, email } = useContext(UserContext);

  return (
    <div>
      <h1>Registration </h1>
      <h3>{name}</h3>
      <h3>{email}</h3>
      <Button label="Register" />
      <Button label="Login" />
      <Button />

      <Input placeholder="Name" type="text" />
      <Input placeholder="Email" type="email" />
      <Input placeholder="Passowrd" type="password" />
    </div>
  );
}

export default ChildC;
