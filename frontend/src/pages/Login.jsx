import React, { useState } from "react";
import { Mail, Lock, CloudSun } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Login = () => {
  const { darkMode } = useTheme();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Save user example
    localStorage.setItem("userName", "Prince");

    navigate("/");
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 py-10 transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-blue-100 via-white to-purple-100 text-slate-900"
      }`}
    >
      <div
        className={`w-full max-w-md rounded-3xl shadow-2xl p-8 ${
          darkMode
            ? "bg-gray-800 border border-gray-700"
            : "bg-white"
        }`}
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="p-4 rounded-full bg-blue-500 shadow-lg mb-4">
            <CloudSun className="w-12 h-12 text-yellow-300" />
          </div>

          <h1 className="text-4xl font-extrabold">
            Welcome Back
          </h1>

          <p
            className={`mt-2 text-center ${
              darkMode ? "text-gray-300" : "text-slate-600"
            }`}
          >
            Login to continue using Weather App 🌦️
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <div
              className={`flex items-center rounded-xl overflow-hidden border ${
                darkMode
                  ? "border-gray-600 bg-gray-700"
                  : "border-gray-300 bg-white"
              }`}
            >
              <div className="px-4">
                <Mail
                  className={`w-5 h-5 ${
                    darkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-4 outline-none ${
                  darkMode
                    ? "bg-gray-700 text-white placeholder:text-gray-400"
                    : "bg-white text-black"
                }`}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <div
              className={`flex items-center rounded-xl overflow-hidden border ${
                darkMode
                  ? "border-gray-600 bg-gray-700"
                  : "border-gray-300 bg-white"
              }`}
            >
              <div className="px-4">
                <Lock
                  className={`w-5 h-5 ${
                    darkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                />
              </div>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className={`w-full px-4 py-4 outline-none ${
                  darkMode
                    ? "bg-gray-700 text-white placeholder:text-gray-400"
                    : "bg-white text-black"
                }`}
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-blue-500 hover:underline text-sm"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition-all shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <p
          className={`text-center mt-8 ${
            darkMode ? "text-gray-300" : "text-slate-600"
          }`}
        >
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-500 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;