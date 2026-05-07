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

export default function Home() {
  const { darkMode } = useTheme();

  const [city, setCity] = useState("");

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-blue-100 via-white to-purple-100 text-slate-900"
      }`}
    >
      {/* Hero Section */}
      <section className="relative px-4 py-20 overflow-hidden">
        
        {/* Background Blur */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          
          {/* Weather Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-5 rounded-full bg-blue-500 shadow-2xl">
              <CloudSun className="w-16 h-16 text-yellow-300" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Weather Forecast
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              In Real Time 🌦️
            </span>
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

          {/* Search Box */}
          <div
            className={`max-w-2xl mx-auto flex items-center rounded-2xl overflow-hidden shadow-2xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <input
              type="text"
              placeholder="Enter city name..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className={`flex-1 px-6 py-5 outline-none text-lg ${
                darkMode
                  ? "bg-gray-800 text-white placeholder:text-gray-400"
                  : "bg-white text-black"
              }`}
            />

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 transition-all">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Weather Card */}
      <section className="px-4 pb-20">
        <div
          className={`max-w-5xl mx-auto rounded-3xl p-8 shadow-2xl ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Left Side */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="text-red-500" />

                <h2 className="text-4xl font-bold">
                  Bhopal
                </h2>
              </div>

              <p
                className={`text-lg ${
                  darkMode ? "text-gray-300" : "text-slate-500"
                }`}
              >
                Madhya Pradesh, India
              </p>

              <div className="mt-8 flex items-center gap-6">
                <CloudSun className="w-24 h-24 text-yellow-400" />

                <div>
                  <h1 className="text-7xl font-extrabold">
                    32°
                  </h1>

                  <p
                    className={`text-xl ${
                      darkMode ? "text-gray-300" : "text-slate-500"
                    }`}
                  >
                    Partly Cloudy
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="grid grid-cols-2 gap-6 w-full lg:w-auto">
              
              {/* Feels Like */}
              <div
                className={`p-6 rounded-2xl ${
                  darkMode ? "bg-gray-700" : "bg-blue-50"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Thermometer className="text-red-500" />

                  <p className="font-semibold">
                    Feels Like
                  </p>
                </div>

                <h3 className="text-3xl font-bold">
                  35°
                </h3>
              </div>

              {/* Humidity */}
              <div
                className={`p-6 rounded-2xl ${
                  darkMode ? "bg-gray-700" : "bg-blue-50"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Droplets className="text-blue-500" />

                  <p className="font-semibold">
                    Humidity
                  </p>
                </div>

                <h3 className="text-3xl font-bold">
                  60%
                </h3>
              </div>

              {/* Wind */}
              <div
                className={`p-6 rounded-2xl ${
                  darkMode ? "bg-gray-700" : "bg-blue-50"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Wind className="text-green-500" />

                  <p className="font-semibold">
                    Wind Speed
                  </p>
                </div>

                <h3 className="text-3xl font-bold">
                  12 km/h
                </h3>
              </div>

              {/* Condition */}
              <div
                className={`p-6 rounded-2xl ${
                  darkMode ? "bg-gray-700" : "bg-blue-50"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <CloudSun className="text-yellow-500" />

                  <p className="font-semibold">
                    Condition
                  </p>
                </div>

                <h3 className="text-2xl font-bold">
                  Sunny
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}