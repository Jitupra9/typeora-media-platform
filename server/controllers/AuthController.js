const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");

exports.signup = async (req, res) => {
  const {
    userEmail,
    userPassword,
    userFirstname,
    userLastName,
    userphoneNo,
    userlocation,
  } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userPassword, salt);
    const newUser = new User({
      userEmail,
      userPassword: hashedPassword,
      userFirstname,
      userLastName,
      userphoneNo,
      userlocation,
    });

    const savedUser = await newUser.save();
    res.status(201).json({
      success: true,
      message: "User registered successfully.",
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "User already exists..",
      });
    }

    console.error(error);
    res.status(500).json({
      success: false,
      message: "An unexpected error occurred during signup. Please try again.",
    });
  }
};

exports.login = async (req, res) => {
  const { userEmail, userPassword } = req.body;

  try {
    const user = await User.findOne({ userEmail });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found.",
      });
    }

    const isMatch = await bcrypt.compare(userPassword, user.userPassword);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Password does not match",
      });
    }

    const payload = { userId: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
      sameSite: "Strict",
    });

    res.status(200).json({
      success: true,
      message: "Login successful.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An unexpected error occurred during login. Please try again.",
    });
  }
};

exports.logout = (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: new Date(0),
    sameSite: "Strict",
  });

  res.status(200).json({
    success: true,
    message: "Logged out successfully.",
  });
};

exports.fetchUser = async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found. Please try again.",
      });
    }

    res.status(200).json({
      success: true,
      user: user,
      message: "User fetched successfully.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message:
        "An unexpected error occurred while fetching user data. Please try again.",
    });
  }
};
