const mongoose = require("mongoose");

const FollowSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    follower: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    requests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    sent: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Follow", FollowSchema);
