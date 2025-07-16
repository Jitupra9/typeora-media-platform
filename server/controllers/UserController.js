const UserModel = require("../models/userModel");

exports.UpdateUser = async (req, res) => {
  try {
    console.log(req.body.formData);
    const { id, ...userData } = req.body.formData;

    const result = await UserModel.findByIdAndUpdate(id, userData, {
      new: true,
      runValidators: true,
      context: "query",
    });

    if (!result) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }

    res
      .status(200)
      .json({ message: "update successfuly", success: true, user: result });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Not complete", success: false });
  }
};
