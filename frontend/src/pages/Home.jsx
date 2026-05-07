import {
  Search,
  CloudSun,
  Wind,
  Droplets,
  Thermometer,
  MapPin,
} from "lucide-react";

import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { darkMode } = useTheme();
  const [city, setCity] = useState("");

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-blue-100 via-blue to-purple-100 text-slate-900"
      }`}
    >
      <section className="relative px-4 py-20 overflow-hidden">

        {/* Background blur */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">

          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-5 rounded-full bg-blue-500 shadow-2xl">
              <CloudSun className="w-16 h-16 text-yellow-300" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Weather Forecast
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              In Real Time 
            </span> <p>🌦️</p>
          </h1>

          {/* Description */}
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 ${
              darkMode ? "text-gray-300" : "text-slate-600"
            }`}
          >
            Search any city and get live weather updates, humidity,
            wind speed, and temperature instantly.
          </p>

          {/* CTA LINK (FIXED) */}
          <Link
            to="/WeatherDetails"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition"
          >
            <Search className="w-5 h-5" />
            Search Your City Weather
          </Link>

        </div>
      </section>
    </div>
  );
}
  