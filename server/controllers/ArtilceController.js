const ArticleModel = require("../models/ArticleModel");

//////////////////////////////////////////////////
// create A articles
//////////////////////////////////////////////////////
exports.NewArticle = async (req, res) => {
  try {
    console.log("New Article Data is", req.body.data);
    const data = req.body.data;
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
      error: err.message,
    });
  }
};

//////////////////////////////////////////////////
// ALL PUBLIC ARTICLES (with pagination)
//////////////////////////////////////////////////////
exports.getAllPublicArticles = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const articles = await ArticleModel.find({ visibility: "Public" })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate("userID", "Firstname Lastname ProfilePicture");

    const total = await ArticleModel.countDocuments({ visibility: "Public" });

    res.status(200).json({
      success: true,
      count: articles.length,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      data: articles,
    });
  } catch (err) {
    console.error("Error fetching articles:", err);
    res.status(500).json({
      success: false,
      message: "Failed to fetch articles",
    });
  }
};

//////////////////////////////////////////////////
// GET ARTICLES BY ID
//////////////////////////////////////////////////////
exports.getArticleById = async (req, res) => {
  console.log("requested data", req.body);

  try {
    const id = req.body.id;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

    const article = await ArticleModel.find({ id })
      .sort({
        createdAt: -1,
      })
      .populate("userID", "Firstname Lastname ProfilePicture Follwers");

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
      });
    }
    article.views += 1;
    await article.save();

    res.status(200).json({
      success: true,
      data: article,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Server error while fetching articles",
    });
  }
};

//////////////////////////////////////////////////
// UPDATE ARTICLES
//////////////////////////////////////////////////////
exports.updateArticle = async (req, res) => {
  try {
    const { userID, updates } = req.body;

    const article = await ArticleModel.findByIdAndUpdate(userID, updates, {
      new: true,
      runValidators: true,
    });

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Article updated successfully",
      data: article,
    });
  } catch (err) {
    console.error("Error updating article:", err);
    res.status(500).json({
      success: false,
      message: "Failed to update article",
    });
  }
};

//////////////////////////////////////////////////
// DELETE ARTICLES
//////////////////////////////////////////////////////
exports.deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await ArticleModel.findByIdAndDelete(id);

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Article deleted successfully",
    });
  } catch (err) {
    console.error("Error deleting article:", err);
    res.status(500).json({
      success: false,
      message: "Failed to delete article",
    });
  }
};

//////////////////////////////////////////////////
// GET ARTICLES BY CATEGORY (with pagination)
//////////////////////////////////////////////////////
exports.getArticlesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const articles = await ArticleModel.find({
      categories: category,
      visibility: "Public",
    })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await ArticleModel.countDocuments({
      categories: category,
      visibility: "Public",
    });

    res.status(200).json({
      success: true,
      count: articles.length,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      data: articles,
    });
  } catch (err) {
    console.error("Error fetching articles by category:", err);
    res.status(500).json({
      success: false,
      message: "Failed to fetch articles",
    });
  }
};

//////////////////////////////////////////////////
// SEARCH ARTICLES (with pagination)
//////////////////////////////////////////////////////
exports.searchArticles = async (req, res) => {
  try {
    const { query } = req.body;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const articles = await ArticleModel.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
        { tags: { $in: [new RegExp(query, "i")] } },
      ],
      visibility: "Public",
    })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await ArticleModel.countDocuments({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
        { tags: { $in: [new RegExp(query, "i")] } },
      ],
      visibility: "Public",
    });

    res.status(200).json({
      success: true,
      count: articles.length,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      data: articles,
    });
  } catch (err) {
    console.error("Error searching articles:", err);
    res.status(500).json({
      success: false,
      message: "Failed to search articles",
    });
  }
};

//////////////////////////////////////////////////
// REACT TO ARTICLE
//////////////////////////////////////////////////////
exports.reactToArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { action } = req.body; // 'like' or 'dislike'

    const update =
      action === "like" ? { $inc: { like: 1 } } : { $inc: { dislike: 1 } };

    const article = await ArticleModel.findByIdAndUpdate(id, update, {
      new: true,
    });

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
      });
    }

    res.status(200).json({
      success: true,
      message: `Article ${action}d successfully`,
      data: {
        likes: article.like,
        dislikes: article.dislike,
      },
    });
  } catch (err) {
    console.error("Error reacting to article:", err);
    res.status(500).json({
      success: false,
      message: "Failed to react to article",
    });
  }
};

//////////////////////////////////////////////////
// GET USER ARTICLES (with pagination)
//////////////////////////////////////////////////////
exports.getUserArticles = async (req, res) => {
  try {
    console.log("body:-", req.body);
    console.log("params:-", req.params);
    const { userID } = req.params;
    console.log("userID", userID);
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const articles = await ArticleModel.find({ userID })
      .populate({
        path: "userID",
        select: "Firstname LastName ProfilePicture Follwers Email",
      })
      .sort({
        createdAt: -1,
      })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await ArticleModel.countDocuments({ userID });

    res.status(200).json({
      success: true,
      count: articles.length,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      data: articles,
    });
  } catch (err) {
    console.error("Error fetching user articles:", err.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch user articles",
    });
  }
};

//////////////////////////////////////////////////
// GET TRENDING ARTICLES (with pagination)
//////////////////////////////////////////////////////
exports.getTrendingArticles = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const articles = await ArticleModel.find({ visibility: "Public" })
      .sort({
        views: -1,
        like: -1,
        createdAt: -1,
      })
      .skip(skip)
      .limit(limit);

    const total = await ArticleModel.countDocuments({ visibility: "Public" });

    res.status(200).json({
      success: true,
      count: articles.length,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      data: articles,
    });
  } catch (err) {
    console.error("Error fetching trending articles:", err);
    res.status(500).json({
      success: false,
      message: "Failed to fetch trending articles",
    });
  }
};
