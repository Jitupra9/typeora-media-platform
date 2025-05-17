const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true,
      unique: true,
    },
    userPassword: {
      type: String,
      required: true,
    },
    userFirstname: {
      type: String,
      required: true,
    },
    userLastName: {
      type: String,
      required: true,
    },
    userphoneNo: {
      type: String,
      required: true,
    },
    userlocation: {
      type: String,
      required: true,
    },
  },
  { collection: "users" }
);

const UserModel = mongoose.model("Users", userSchema);

module.exports = UserModel;
