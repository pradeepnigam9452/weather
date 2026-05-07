import React, { useState } from "react";
import {
  searchWeather,
  addFavCity,
} from "../api/API";

import { Link } from "react-router-dom";

import {
  Search,
  CloudSun,
  Wind,
  Droplets,
  Thermometer,
  MapPin,
  Heart,
} from "lucide-react";

import { useTheme } from "../context/ThemeContext";

const WeatherDetails = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const { darkMode } = useTheme();

  // SEARCH WEATHER
  const handleSearch = async () => {
    if (!city) return;

    try {
      setLoading(true);

      const result = await searchWeather(city);

      setData(result);
    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message ||
          "Failed to fetch weather"
      );
    } finally {
      setLoading(false);
    }
  };

  // ADD FAVORITE CITY
  const handleAddFavorite = async () => {
    try {
      if (!data) return;

      const cityData = {
        city: data.city,
      };

      const res = await addFavCity(cityData);

      alert(
        res.message || "City added successfully ❤️"
      );
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Failed to add city"
      );
    }
  };

  // DEMO DATA
  const weatherData = data || {
    city: "Bhopal",
    country: "India",
    temperature: 32,
    feels_like: 35,
    humidity: 60,
    weather: "Partly Cloudy",
    wind_speed: "12 km/h",
  };

  return (
    <div
      className={`min-h-screen px-4 py-10 transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-blue-100 via-white to-purple-100 text-slate-900"
      }`}
    >
      {/* HEADER */}
      <div className="text-center mb-10">
        <h1
          className={`text-4xl md:text-5xl font-extrabold ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          🌤️ Search Your City Weather
        </h1>

        <p
          className={`mt-4 text-lg ${
            darkMode
              ? "text-gray-300"
              : "text-slate-600"
          }`}
        >
          Get real-time weather updates instantly
        </p>
      </div>

      {/* SEARCH BOX */}
      <div className="max-w-3xl mx-auto flex items-center rounded-2xl overflow-hidden shadow-2xl bg-white mb-12">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 px-6 py-5 outline-none text-lg text-black"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 transition-all duration-300"
        >
          <Search size={24} />
        </button>
      </div>

      {/* MY CITIES SECTION */}
      <div className="max-w-5xl mx-auto mb-12">
        <div
          className={`rounded-3xl p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 ${
            darkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white"
          }`}
        >
          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Heart className="text-red-500" />

              <h2
                className={`text-3xl font-bold ${
                  darkMode
                    ? "text-white"
                    : "text-black"
                }`}
              >
                Your Favorite Cities
              </h2>
            </div>

            <p
              className={`text-lg ${
                darkMode
                  ? "text-gray-300"
                  : "text-slate-600"
              }`}
            >
              View and manage all your saved weather
              locations in one place.
            </p>
          </div>

          {/* BUTTON */}
          <Link
            to="/mycities"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transition-all duration-300"
          >
            View My Cities 🌍
          </Link>
        </div>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-lg animate-pulse">
          Loading weather...
        </p>
      )}

      {/* WEATHER CARD */}
      {!loading && (
        <div
          className={`max-w-5xl mx-auto rounded-3xl shadow-2xl p-8 ${
            darkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white"
          }`}
        >
          <div className="flex flex-col lg:flex-row justify-between gap-10">

            {/* LEFT */}
            <div>

              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-red-500" />

                <h2
                  className={`text-4xl font-bold ${
                    darkMode
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  {weatherData.city}
                </h2>
              </div>

              <p
                className={`text-lg ${
                  darkMode
                    ? "text-gray-300"
                    : "text-slate-500"
                }`}
              >
                {weatherData.country}
              </p>

              {/* ADD FAVORITE BUTTON */}
              {data && (
                <button
                  onClick={handleAddFavorite}
                  className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
                >
                  Add Favorite City ❤️
                </button>
              )}

              {/* TEMP */}
              <div className="mt-10 flex items-center gap-6">
                <CloudSun className="w-24 h-24 text-yellow-400" />

                <div>
                  <h1
                    className={`text-7xl font-extrabold ${
                      darkMode
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    {weatherData.temperature}°
                  </h1>

                  <p
                    className={`text-xl ${
                      darkMode
                        ? "text-gray-300"
                        : "text-slate-500"
                    }`}
                  >
                    {weatherData.weather}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-auto">

              {/* FEELS LIKE */}
              <div className="p-6 bg-blue-50 rounded-2xl shadow">
                <div className="flex items-center gap-2 mb-3">
                  <Thermometer className="text-red-500" />

                  <p className="font-semibold text-black">
                    Feels Like
                  </p>
                </div>

                <h3 className="text-3xl font-bold text-black">
                  {weatherData.feels_like}°
                </h3>
              </div>

              {/* HUMIDITY */}
              <div className="p-6 bg-blue-50 rounded-2xl shadow">
                <div className="flex items-center gap-2 mb-3">
                  <Droplets className="text-blue-500" />

                  <p className="font-semibold text-black">
                    Humidity
                  </p>
                </div>

                <h3 className="text-3xl font-bold text-black">
                  {weatherData.humidity}%
                </h3>
              </div>

              {/* CONDITION */}
              <div className="p-6 bg-blue-50 rounded-2xl shadow">
                <div className="flex items-center gap-2 mb-3">
                  <CloudSun className="text-yellow-500" />

                  <p className="font-semibold text-black">
                    Condition
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-black">
                  {weatherData.weather}
                </h3>
              </div>

              {/* WIND */}
              <div className="p-6 bg-blue-50 rounded-2xl shadow">
                <div className="flex items-center gap-2 mb-3">
                  <Wind className="text-green-500" />

                  <p className="font-semibold text-black">
                    Wind
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-black">
                  {weatherData.wind_speed}
                </h3>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDetails;