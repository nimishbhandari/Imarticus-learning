import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/DB.js";

dotenv.config();

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;
const MODE = process.env.MODE;
app.listen(PORT, () => {
  console.log(`Server Running on PORT:${PORT} in ${MODE} mode`);
});
