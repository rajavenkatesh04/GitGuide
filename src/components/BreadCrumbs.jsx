import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ current }) => {
  return (
    <nav className="text-white text-sm mt-4">
      {/* Link to the Home page */}
      <Link to="/" className="text-blue-300 hover:text-blue-400 transition">
        Home
      </Link>
      <span className="mx-2 text-gray-400">/</span>
      {/* Current breadcrumb item */}
      <span className="text-purple-400 font-semibold">{current}</span>
    </nav>
  );
};

export default Breadcrumbs;
