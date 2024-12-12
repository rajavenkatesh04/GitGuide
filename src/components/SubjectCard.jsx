import React from "react";
import { Link } from "react-router-dom";

const SubjectCard = ({ title, description, link, image }) => {
  return (
    <div className="relative max-w-sm mx-auto bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
      {/* Image Section */}
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <Link
          to={link}
          className="inline-block mt-4 text-white bg-blue-500 rounded-full py-2 px-4 text-sm hover:bg-blue-600 transition duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default SubjectCard;
