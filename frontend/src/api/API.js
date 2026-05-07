import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api"
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