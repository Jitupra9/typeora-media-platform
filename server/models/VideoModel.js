const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    visibility: {
      type: ["Public", "Private"],
      default: "Public",
    },
    subHeading: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    description: {
      type: String,
      required: true,
    },
    fileUrl: {
      type: String,
    },
    category: {
      type: String,
      require: true,
    },
    like: {
      type: Number,
      default: 0,
    },
    dislike: {
      type: Number,
      default: 0,
    },
    shared: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  { collection: "Videos", timestamps: true }
);

const VideosModel = mongoose.model("Videos", schema);
module.exports = VideosModel;
