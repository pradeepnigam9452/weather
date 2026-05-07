import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">

      <h1 className="text-7xl font-bold text-black">404</h1>

      <p className="text-gray-600 text-lg mt-4">
        Oops! Page not found
      </p>

      <Link
        to="/"
        className="mt-6 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;