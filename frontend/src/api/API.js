import axios from "axios";

const API = axios.create({
  baseURL:  import.meta.env.VITE_API_URL,
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});


export const login = async (formData) => {
  try {
    const res = await API.post("/login", formData);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const register = async (formData) => {
  try {
    const res = await API.post("/register", formData);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const searchWeather = async (city) => {
  try {
    const res = await API.get(`/weather/${city}`);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const addFavCity = async (city) => {
  try {
    const res = await API.post("/createFavoriteCity", city);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteCity = async (id) => {
  try {
    const res = await API.delete(`/delete/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const allFavCity = async () => {
  try {
    const res = await API.get("/allFavoriteCity");

    return res.data;
  } catch (error) {
    console.log(error);

    throw error;
  }
};