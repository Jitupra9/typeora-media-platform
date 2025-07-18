const ArticleModel = require("../models/Article");

exports.NewArticle = async (req, res) => {
  try {
    console.log("New Article Data is", req.body);
    const data = req.body;
    if (!Array.isArray(data.istags)) {
      data.tags = [];
    }
    const result = await ArticleModel.create(data);
    return res.status(201).json({
      message: "Your article has been published.",
      success: true,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "Internal server error.",
      success: false,
      error: error.message,
    });
  }
};
exports.GetArticles = async (req, res) => {};
