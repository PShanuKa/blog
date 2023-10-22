import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;

    // Check if the username already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({
        success: false,
        message: "Username already in use",
      });
    }

    // Check if the email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    // Hash the password
    const hashPassword = await bcryptjs.hash(password, 10);

    // Create a new user
    const newUser = new User({ password: hashPassword, email, username });

    // Save the new user to the database
    await newUser.save();

    res.status(201).json({
      message: "User save successful",
      success: true,
    });
  } catch (err) {
    // Pass the error to the error handling middleware
    return next(err);
  }
};

export const signIn = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Check if a user with the provided email exists
        const validUser = await User.findOne({ email });

        if (!validUser) {
            return res.status(401).json({
                success: false,
                message: "User not found",
            });
        }

        // Verify the password
        const isPasswordValid = bcryptjs.compareSync(password, validUser.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Wrong credentials",
            });
        }

        // Create and sign a JSON Web Token (JWT) for the user
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

        // Set the JWT token as a HttpOnly cookie for improved security
        res.cookie("access_token", token, { httpOnly : true });
        const { password: pass , ...user } = validUser._doc;
        // Respond with a success status and the user information (you can customize the response)
        res.status(200).json({ user });
    } catch (err) {
        // Pass any errors to the error handling middleware
        next(err); 
    }
};
