import React, { useEffect, useState } from "react";
import {
  allFavCity,
  deleteCity,
} from "../api/API";

import {
  MapPin,
  Trash2,
  Heart,
} from "lucide-react";

import { useTheme } from "../context/ThemeContext";

const FavoriteCities = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  const { darkMode } = useTheme();

  const fetchCities = async () => {
    try {
      setLoading(true);

      const res = await allFavCity();

      setCities(res.data || []);
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Failed to fetch cities"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCity(id);
      setCities((prev) =>
        prev.filter((city) => city._id !== id)
      );

      alert("City deleted successfully");
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message ||
          "Failed to delete city"
      );
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

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
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 p-4 rounded-full">
            <Heart className="text-red-500 w-10 h-10" />
          </div>
        </div>

        <h1 className="text-4xl font-bold">
          Favorite Cities
        </h1>

        <p
          className={`mt-3 ${
            darkMode
              ? "text-gray-300"
              : "text-slate-600"
          }`}
        >
          View all your saved weather locations 🌍
        </p>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-lg animate-pulse">
          Loading cities...
        </p>
      )}

      {/* EMPTY STATE */}
      {!loading && cities.length === 0 && (
        <div className="text-center mt-20">
          <h2 className="text-2xl font-semibold">
            No favorite cities found 😢
          </h2>

          <p className="mt-3 text-gray-500">
            Add cities from weather page
          </p>
        </div>
      )}

      {/* CITY CARDS */}
      {!loading && cities.length > 0 && (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {cities.map((city) => (
            <div
              key={city._id}
              className={`rounded-3xl shadow-2xl p-6 transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white"
              }`}
            >
              {/* CITY */}
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-red-500" />

                <h2 className="text-2xl font-bold">
                  {city.city}
                </h2>
              </div>

              {/* USER */}
              <p
                className={`mb-6 ${
                  darkMode
                    ? "text-gray-300"
                    : "text-slate-500"
                }`}
              >
                Saved by:{" "}
                {city.user?.name || "User"}
              </p>

              {/* DELETE BUTTON */}
              <button
                onClick={() =>
                  handleDelete(city._id)
                }
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
              >
                <Trash2 size={20} />
                Delete City
              </button>
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default FavoriteCities;