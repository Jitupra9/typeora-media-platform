const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");

exports.signup = async (req, res) => {
  console.log(req.body);
  const { Email, Password, Firstname, LastName, PhoneNo, Location } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(Password, salt);
    const newUser = new User({
      Email,
      Password: hashedPassword,
      Firstname,
      LastName,
      PhoneNo,
      Location,
    });

    const savedUser = await newUser.save();
    res.status(201).json({
      success: true,
      message: "User registered successfully.",
    });
  } catch (error) {
    if (error.code === 11000) {
      console.log(error);
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
  const { Email, Password } = req.body;

  try {
    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found.",
      });
    }

    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Password does not match",
      });
    }

    const payload = { userId: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      success: true,
      message: "Login successful.",
      userData: {
        user: user,
        token: token,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An unexpected error occurred during login. Please try again.",
    });
  }
};
