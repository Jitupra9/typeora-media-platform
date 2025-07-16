const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    SecondaryEmail: {
      type: String,
    },
    Password: {
      type: String,
      required: true,
    },
    Firstname: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    Gender: {
      type: ["male", "female", "other", ""],
      required: true,
    },
    Company: {
      type: String,
    },
    Role: {
      type: String,
    },
    About: {
      type: String,
    },
    PhoneNo: {
      type: String,
      required: true,
    },
    Location: {
      type: String,
      required: true,
    },
  },
  { collection: "users" }
);

const UserModel = mongoose.model("Users", userSchema);

module.exports = UserModel;
