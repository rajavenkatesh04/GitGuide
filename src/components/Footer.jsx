import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between sm:gap-0">
          {/* Copyright text */}
          <span className="sm:text-left text-center">© 2024 Git Guide</span>

          {/* All rights reserved */}
          <span className="sm:text-center text-center">
            All rights reserved.
          </span>

          {/* Made by Raja */}
          <span className="sm:text-right text-center">
            Made with <span className="text-pink-500">💻</span> and{" "}
            <span className="text-pink-500">❤️</span> by Raja
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
