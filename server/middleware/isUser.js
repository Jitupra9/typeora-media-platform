const userModel = require("../models/userModel.js");

const checkUserExist = async (req, res, next) => {
  const { userEmail } = req.body;
  console.log("isUser middleware called");
  if (!userEmail) {
    return res.status(400).json({
      success: false,
      message: "Email is required",
    });
  }

  try {
    const user = await userModel.findOne({ userEmail });
    console.log(user);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User does not exist",
      });
    }
    next();
  } catch (error) {
    console.error("Database error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = checkUserExist;
