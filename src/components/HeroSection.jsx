import React from "react";

const HeroSection = () => {
  return (
    <div className="relative py-16 px-4 text-center overflow-hidden mb-12">
      {/* Subtle background gradient with rounded corners */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-slate-900 to-pink-900 opacity-75 rounded-xl"></div>

      {/* Content container with responsive sizing */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Welcome to the GitHub Guide
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Your comprehensive resource for mastering Git and GitHub workflows,
          from beginner to advanced techniques.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
