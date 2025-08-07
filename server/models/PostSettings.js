const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "postModel",
    },
    postModel: {
      type: String,
      required: true,
      enum: ["Articles", "Videos", "Opinions"],
    },
    visibility: {
      type: String,
      enum: ["Public", "Private"],
      default: "Public",
    },
    defaultVisibility: {
      type: String,
      enum: ["Public", "Private", "Friends"],
      default: "Public",
    },
  },
  { collection: "postSettingNotifi" }
);

const ContentNotificationModel = mongoose.model(
  "ContentNotificationModel",
  schema
);
module.exports = ContentNotificationModel;
