import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URL = process.env.URL || "mongodb://127.0.0.1:27017/weather";

const connectDb = async () => {
    try {
        await mongoose.connect(URL);
        console.log("connected successfully");
    } catch (error) {
        console.error("connection failed", error.message);
    }
};

export default connectDb;
