const ArticleModel = require("../models/Article");

exports.NewArticle = (req, res) => {
  try {
    console.log(req.body);
  } catch (err) {
    console.log(err.message);
  }
};
