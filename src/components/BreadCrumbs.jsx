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
      <span className="px-1 rounded-sm bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ... ">
        {current}
      </span>
    </nav>
  );
};

export default Breadcrumbs;
