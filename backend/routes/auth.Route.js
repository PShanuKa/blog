import express  from "express";
import { signIn, signUp } from "../controllers/auth.Controller.js";

const route = express.Router();

route.post('/signup', signUp) 
route.post('/signin', signIn) 

export default route;