import React, { useState } from "react";
import { searchWeather } from "../api/API";
import {
  Search,
  CloudSun,
  Wind,
  Droplets,
  Thermometer,
  MapPin,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const WeatherDetails = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { darkMode } = useTheme();

  const handleSearch = async () => {
    if (!city) return;

    try {
      setLoading(true);
      const result = await searchWeather(city);
      setData(result);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-gray-900"
          : "bg-gradient-to-br from-blue-100 via-white to-purple-100 text-slate-900"
      }`}
    >
      {/* HEADER */}
      <div className="text-center mb-8">
        <h1
          className={`text-3xl md:text-4xl font-bold py-8 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          🌤️ Search Your City Weather
        </h1>

        <p className="text-gray-500 mt-2">
          Enter a city name to get real-time weather updates
        </p>
      </div>

      {/* SEARCH BOX */}
      <div className="max-w-2xl mx-auto flex items-center rounded-2xl overflow-hidden shadow-xl bg-white mb-10">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 px-6 py-4 outline-none text-lg"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 transition"
        >
          <Search />
        </button>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-gray-600 animate-pulse">
          Loading weather...
        </p>
      )}

      {/* REAL WEATHER CARD */}
      {data && !loading && (
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8">

          <div className="flex flex-col lg:flex-row justify-between gap-10">

            {/* LEFT */}
            <div>

              <div className="flex items-center gap-2 mb-2">
                <MapPin className="text-red-500" />
                <h2 className="text-4xl font-bold">
                  {data.city}
                </h2>
              </div>

              <p className="text-slate-500 text-lg">
                {data.country || "India"}
              </p>

              <div className="mt-8 flex items-center gap-6">
                <CloudSun className="w-24 h-24 text-yellow-400" />

                <div>
                  <h1 className="text-7xl font-extrabold">
                    {data.temperature}°
                  </h1>

                  <p className="text-xl text-slate-500">
                    {data.weather}
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-6 w-full lg:w-auto">

              <div className="p-6 bg-blue-50 rounded-2xl shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Thermometer className="text-red-500" />
                  <p className="font-semibold">Feels Like</p>
                </div>
                <h3 className="text-3xl font-bold">
                  {data.feels_like}°
                </h3>
              </div>

              <div className="p-6 bg-blue-50 rounded-2xl shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Droplets className="text-blue-500" />
                  <p className="font-semibold">Humidity</p>
                </div>
                <h3 className="text-3xl font-bold">
                  {data.humidity}%
                </h3>
              </div>

              <div className="p-6 bg-blue-50 rounded-2xl shadow">
                <div className="flex items-center gap-2 mb-2">
                  <CloudSun className="text-yellow-500" />
                  <p className="font-semibold">Condition</p>
                </div>
                <h3 className="text-2xl font-bold">
                  {data.weather}
                </h3>
              </div>

              <div className="p-6 bg-blue-50 rounded-2xl shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Wind className="text-green-500" />
                  <p className="font-semibold">Wind</p>
                </div>
                <h3 className="text-2xl font-bold">
                  {data.wind_speed || "N/A"}
                </h3>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* DUMMY CARD (WHEN NO DATA) */}
      {!data && !loading && (
        <div className="max-w-5xl mx-auto mt-10 bg-white rounded-3xl shadow-2xl p-8">

          <div className="flex flex-col lg:flex-row justify-between gap-10">

            {/* LEFT */}
            <div>

              <div className="flex items-center gap-2 mb-2">
                <MapPin className="text-red-500" />
                <h2 className="text-4xl font-bold">
                  Bhopal
                </h2>
              </div>

              <p className="text-slate-500 text-lg">
                Madhya Pradesh, India
              </p>

              <div className="mt-8 flex items-center gap-6">
                <CloudSun className="w-24 h-24 text-yellow-400" />

                <div>
                  <h1 className="text-7xl font-extrabold">
                    32°
                  </h1>

                  <p className="text-xl text-slate-500">
                    Partly Cloudy
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-6 w-full lg:w-auto">

              <div className="p-6 bg-blue-50 rounded-2xl shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Thermometer className="text-red-500" />
                  <p className="font-semibold">Feels Like</p>
                </div>
                <h3 className="text-3xl font-bold">35°</h3>
              </div>

              <div className="p-6 bg-blue-50 rounded-2xl shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Droplets className="text-blue-500" />
                  <p className="font-semibold">Humidity</p>
                </div>
                <h3 className="text-3xl font-bold">60%</h3>
              </div>

              <div className="p-6 bg-blue-50 rounded-2xl shadow">
                <div className="flex items-center gap-2 mb-2">
                  <CloudSun className="text-yellow-500" />
                  <p className="font-semibold">Condition</p>
                </div>
                <h3 className="text-2xl font-bold">Sunny</h3>
              </div>

              <div className="p-6 bg-blue-50 rounded-2xl shadow">
                <div className="flex items-center gap-2 mb-2">
                  <Wind className="text-green-500" />
                  <p className="font-semibold">Wind</p>
                </div>
                <h3 className="text-2xl font-bold">12 km/h</h3>
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default WeatherDetails;