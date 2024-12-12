// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">GitHub Guide</div>
      </nav>
    </header>
  );
};

export default Header;
