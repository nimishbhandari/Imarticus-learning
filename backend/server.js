import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/DB.js";
import courseRoute from "./routes/courseRoute.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.use("/api/course", courseRoute);

if (process.env.MODE === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

const PORT = process.env.PORT || 5000;
const MODE = process.env.MODE;
app.listen(PORT, () => {
  console.log(`Server Running on PORT:${PORT} in ${MODE} mode`);
});
