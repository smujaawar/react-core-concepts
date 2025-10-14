import React from "react";
import ChildA from "./ChildA";
import { UserContext } from "./UserContext";
import ChildC from "./ChildC";

function Parent() {
  const user = { name: "Ekhlak", email: "ceoTY@gmail.com" };
  return (
    <div>
      <UserContext.Provider value={user}>
        <h1>Parent comp</h1>
        <ChildA />
      </UserContext.Provider>
    </div>
  );
}

export default Parent;
