import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          background: "grey",
          height: "60px",
        }}
      >
        <NavLink style={{ textDecoration: "none" }} to="/">
          Home
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/about">
          About
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/contact">
          Contact
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/products">
          Products
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
