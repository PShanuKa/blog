import express  from "express";
import { signUp } from "../controllers/auth.Controller.js";

const route = express.Router();

route.all('/signup', signUp) 

export default route;