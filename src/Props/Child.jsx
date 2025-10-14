import React from "react";
import ChildA from "./ChildA";

function Child({ user }) {
  //   console.log(props);
  //   const { name, email } = props.user;

  return (
    <div>
      <h2>Child comp</h2>
      {/* <h3>Name:{name}</h3>
      <h3>Email:{email}</h3> */}
      <ChildA user={user} />
    </div>
  );
}

export default Child;
