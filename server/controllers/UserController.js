const UserModel = require("../models/userModel");
const mongoose = require("mongoose");
exports.UpdateUser = async (req, res) => {
  try {
    console.log(req.body.formData);
    const { UserID, ...userData } = req.body.formData;

    const result = await UserModel.findByIdAndUpdate(UserID, userData, {
      new: true,
      runValidators: true,
      context: "query",
    });

    if (!result) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }

    res.status(200).json({
      message: "profile update successfuly",
      success: true,
      user: result,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Not complete", success: false });
  }
};

exports.skillsController = async (req, res) => {
  try {
    const { userId } = req.params;
    const skills = req.body.Skills;
    console.log(req.body);
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    if (!Array.isArray(skills)) {
      return res
        .status(400)
        .json({ error: "Skills must be provided as an array" });
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { Skills: skills },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({
      message: "Skills updated successfully",
      user: updatedUser,
      success: true,
    });
  } catch (error) {
    console.error("Error updating skills:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.socialController = async (req, res) => {
  try {
    const { userId } = req.params;
    const { social } = req.body;
    console.log(req.body?.social);
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    if (!Array.isArray(social)) {
      return res
        .status(400)
        .json({ error: "Socials must be provided as an array" });
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { Social: social },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({
      message: "Socials updated successfully",
      user: updatedUser,
      success: true,
    });
  } catch (error) {
    console.error("Error updating socials:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
