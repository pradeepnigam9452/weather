import FavoriteCity from '../models/FavoriteCity.js'

export const createFavoriteCity = async (req, res) => {
  try {
    const { city } = req.body;
    const newCity = await FavoriteCity.create({
      city,
      user: req.user.id,
    });
    return res.status(201).json({
      message: "Favorite city added",
      data: newCity,
    });
  } catch (error) {
    console.log(error.message);

    return res.status(500).json({
      message: "Server error",
    });
  }
};


 export const deleteCity = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const deletedCity = await FavoriteCity.findOneAndDelete({
      _id: id,
      user: userId
    });
    if (!deletedCity) {
      return res.status(404).json({ message: "City not found" });
    }
    return res.status(200).json({
      message: "Favorite city deleted"
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Server error" });
  }
};



export const allFavoriteCity = async (req, res) => {
  try {
    const userId = req.user.id;
    const data = await FavoriteCity.find({
      user: userId,
    }).populate("user");
    return res.status(200).json({
      message: "All favorite cities",
      data,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Server error",
    });
  }
};