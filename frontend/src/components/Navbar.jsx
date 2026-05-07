import React from "react";
import { Link } from "react-router-dom";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  const user = JSON.parse(localStorage.getItem("user")) || null;

  return (
    <nav
      className={`w-full sticky top-0 z-50 ${
        darkMode
          ? "bg-gray-900 border-gray-700 text-white"
          : "bg-gradient-to-br from-blue-100 via-white to-purple-100 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-3">
          <h1 className="text-2xl font-bold">Weather App</h1>
        </Link>

        <h2 className="font-medium">
          {user ? `Welcome, ${user.name} 👋` : "Welcome, Guest"}
        </h2>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className={`font-medium transition ${
              darkMode
                ? "text-white hover:text-yellow-300"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`font-medium transition ${
              darkMode
                ? "text-white hover:text-yellow-300"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            About
          </Link>

          {!user ? (
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-md transition"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("token");
                window.location.reload();
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl"
            >
              Logout
            </button>
          )}
          <button
            onClick={toggleTheme}
            className="bg-white text-black p-2 rounded-full shadow"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>
        <button className="md:hidden">
          <Menu className={`w-7 h-7 ${darkMode ? "text-white" : "text-black"}`} />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;