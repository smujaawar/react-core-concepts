import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About page</h1>
      <Link
        to="/about/company"
        className="bg-gray-600 text-amber-50 px-2 py-1 m-4 rounded-md"
      >
        Company
      </Link>
      <Link
        to="/about/vision"
        className="bg-gray-600 text-amber-50 px-2 py-1 m-4 rounded-md"
      >
        Vision
      </Link>
      <Outlet />
    </div>
  );
}

export default About;
