const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    title: {
      require: true,
      type: String,
    },
    SubDescription: {
      require: true,
      type: String,
    },
    description: {
      require: true,
      type: String,
    },
    fileUrl: {
      type: String,
    },
  },
  { collection: "Articles" }
);

const ArticleModel = mongoose.model("Articles", schema);
