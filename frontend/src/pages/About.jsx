import React from "react";
import {
  CloudSun,
  Globe,
  Thermometer,
  Wind,
  Droplets,
} from "lucide-react";

import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-blue-100 via-white to-purple-100 text-slate-900"
      }`}
    >
      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-6 rounded-full bg-blue-500 shadow-2xl">
              <CloudSun className="w-16 h-16 text-yellow-300" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            About Our
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Weather App 🌦️
            </span>
          </h1>

          {/* Description */}
          <p
            className={`max-w-3xl mx-auto text-lg md:text-xl leading-relaxed ${
              darkMode ? "text-gray-300" : "text-slate-600"
            }`}
          >
            Our Weather App provides accurate real-time weather forecasts,
            temperature updates, humidity levels, and wind information for
            cities all around the world.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div
            className={`p-8 rounded-3xl shadow-xl transition-all ${
              darkMode
                ? "bg-gray-800 border border-gray-700"
                : "bg-white"
            }`}
          >
            <div className="mb-5 inline-block p-4 rounded-2xl bg-blue-100">
              <Thermometer className="w-10 h-10 text-red-500" />
            </div>

            <h2 className="text-2xl font-bold mb-4">
              Real-Time Temperature
            </h2>

            <p
              className={`leading-relaxed ${
                darkMode ? "text-gray-300" : "text-slate-600"
              }`}
            >
              Stay updated with live temperature information from cities
              around the globe.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className={`p-8 rounded-3xl shadow-xl transition-all ${
              darkMode
                ? "bg-gray-800 border border-gray-700"
                : "bg-white"
            }`}
          >
            <div className="mb-5 inline-block p-4 rounded-2xl bg-green-100">
              <Wind className="w-10 h-10 text-green-500" />
            </div>

            <h2 className="text-2xl font-bold mb-4">
              Wind & Climate
            </h2>

            <p
              className={`leading-relaxed ${
                darkMode ? "text-gray-300" : "text-slate-600"
              }`}
            >
              Get accurate wind speed and climate information to plan
              your daily activities better.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className={`p-8 rounded-3xl shadow-xl transition-all ${
              darkMode
                ? "bg-gray-800 border border-gray-700"
                : "bg-white"
            }`}
          >
            <div className="mb-5 inline-block p-4 rounded-2xl bg-purple-100">
              <Droplets className="w-10 h-10 text-blue-500" />
            </div>

            <h2 className="text-2xl font-bold mb-4">
              Humidity Tracking
            </h2>

            <p
              className={`leading-relaxed ${
                darkMode ? "text-gray-300" : "text-slate-600"
              }`}
            >
              Track humidity levels instantly and understand weather
              conditions more clearly.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 pb-24">
        <div
          className={`max-w-5xl mx-auto rounded-3xl p-10 shadow-2xl ${
            darkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            
            {/* Left */}
            <div className="flex justify-center">
              <div className="p-6 rounded-full bg-blue-500">
                <Globe className="w-20 h-20 text-white" />
              </div>
            </div>

            {/* Right */}
            <div>
              <h2 className="text-4xl font-bold mb-5">
                Our Mission
              </h2>

              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-slate-600"
                }`}
              >
                We aim to provide fast, reliable, and beautiful weather
                forecasting experiences for users worldwide. Whether you are
                traveling, planning your day, or simply checking the weather,
                our app delivers the information you need instantly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;