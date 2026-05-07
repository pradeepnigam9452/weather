import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();

  // Get user from localStorage
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <nav
      className={`w-full sticky top-0 z-50 border-b transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 border-gray-700 text-white"
          : "bg-gradient-to-br from-blue-100 via-white to-purple-100 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">
            Weather App 🌦️
          </h1>
        </Link>

        {/* Welcome Text */}
        <div className="hidden md:block">
          <h2 className="font-medium">
            {user
              ? `Welcome, ${user.name} 👋`
              : "Welcome, Guest"}
          </h2>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">

          <Link
            to="/"
            className={`font-medium transition ${
              darkMode
                ? "hover:text-yellow-300"
                : "hover:text-blue-600"
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`font-medium transition ${
              darkMode
                ? "hover:text-yellow-300"
                : "hover:text-blue-600"
            }`}
          >
            About
          </Link>

          {/* Auth Button */}
          {!user ? (
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-medium transition"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
            >
              Logout
            </button>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full shadow transition ${
              darkMode
                ? "bg-gray-700 text-yellow-300"
                : "bg-white text-black"
            }`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden">
          <Menu
            className={`w-7 h-7 ${
              darkMode ? "text-white" : "text-black"
            }`}
          />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;