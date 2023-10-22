import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

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
