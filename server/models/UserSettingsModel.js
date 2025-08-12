const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    twoFactor: { type: Boolean, default: false },
    accVisibility: {
      type: String,
      enum: ["Public", "Private", "Friends"],
      default: "Public",
    },
    loginAlert: { type: Boolean, default: false },
    activeDevice: { type: String },
    accStatus: {
      type: String,
      enum: ["Active", "Deactive"],
      default: "Active",
    },
    notification: { type: Boolean, default: true },
    emailReminders: { type: Boolean, default: false },
    newFollowers: { type: Boolean, default: true },
    commentPost: { type: Boolean, default: true },
    mentions: { type: Boolean, default: true },
    directMessage: { type: Boolean, default: true },
    whoTagging: {
      type: String,
      enum: ["Public", "Private", "Friends"],
      default: "Friends",
    },
  },
  { collection: "userSettingsnotifi" }
);

const userSettingsModel = mongoose.model("UserSettingsModel", schema);
module.exports = userSettingsModel;
