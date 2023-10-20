import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
dotenv.config();

const app = express();
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URL;
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("listening on port: " + PORT);
});

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("connect to MongoDB"))
  .catch((err) => console.error(err));
