import React from "react";
import { CloudSun } from "lucide-react";

import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

/* Font Awesome Imports */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`border-t transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 border-gray-700 text-white"
          : "bg-white border-gray-200 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <CloudSun className="w-10 h-10 text-yellow-400" />

              <h2 className="text-2xl font-bold">
                Weather App
              </h2>
            </div>

            <p
              className={`leading-relaxed ${
                darkMode ? "text-gray-300" : "text-slate-600"
              }`}
            >
              Get real-time weather updates and forecasts
              for cities around the world 🌦️
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className={`transition hover:text-blue-500 ${
                  darkMode ? "text-gray-300" : "text-slate-600"
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`transition hover:text-blue-500 ${
                  darkMode ? "text-gray-300" : "text-slate-600"
                }`}
              >
                About
              </Link>

              <Link
                to="/contact"
                className={`transition hover:text-blue-500 ${
                  darkMode ? "text-gray-300" : "text-slate-600"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex items-center gap-4">

              {/* Facebook */}
              <a
                href="/"
                className={`p-3 rounded-full transition ${
                  darkMode
                    ? "bg-gray-800 hover:bg-blue-600"
                    : "bg-slate-100 hover:bg-blue-600 hover:text-white"
                }`}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              {/* Instagram */}
              <a
                href="/"
                className={`p-3 rounded-full transition ${
                  darkMode
                    ? "bg-gray-800 hover:bg-pink-500"
                    : "bg-slate-100 hover:bg-pink-500 hover:text-white"
                }`}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              {/* Twitter */}
              <a
                href="/"
                className={`p-3 rounded-full transition ${
                  darkMode
                    ? "bg-gray-800 hover:bg-sky-500"
                    : "bg-slate-100 hover:bg-sky-500 hover:text-white"
                }`}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className={`mt-10 pt-6 border-t text-center ${
            darkMode
              ? "border-gray-700 text-gray-400"
              : "border-gray-200 text-slate-500"
          }`}
        >
          <p>
            © 2026 Weather App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;