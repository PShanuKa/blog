import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.Route.js"
const app = express();
dotenv.config();

app.use(express.json());
const route = express.Router();

const MONGODB_URI = process.env.MONGODB_URL;
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("listening on port: " + PORT);
});

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("connect to MongoDB"))
  .catch((err) => console.error(err));

app.use('/api/auth' , authRoute );