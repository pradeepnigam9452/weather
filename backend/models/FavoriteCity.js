import mongoose from 'mongoose';

const favoriteCitySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  }
}, { timestamps: true });

const FavoriteCity = mongoose.model("FavoriteCity", favoriteCitySchema);

export default FavoriteCity;