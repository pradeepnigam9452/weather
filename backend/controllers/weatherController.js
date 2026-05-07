import axios from "axios";

export const getWeatherByCity = async (req, res) => {
  try {
    const { city } = req.params;
    if (!city) {
      return res.status(400).json({ message: "City is required" });
    }
    const apiKey = process.env.WEATHER_API_KEY;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = response.data;

    return res.status(200).json({
      city: data.name,
      temperature: data.main.temp,
      feels_like: data.main.feels_like,
      humidity: data.main.humidity,
      weather: data.weather[0].main,
      description: data.weather[0].description,
      country: data.sys.country
    });

  } catch (error) {
    return res.status(500).json({
      message: "City not found or API error",
      error: error.response?.data || error.message
    });
  }
};