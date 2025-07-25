const ArticleModel = require("../models/ArticleModel");
const VideoModel = require("../models/VideoModel");
// const Comment = require("../models/Comment");
// const Follow = require("../models/FollowSchema");
// const View = require("../models/View");
// const Opinion = require("../models/Opinion");

exports.getTotalArticles = async (req, res) => {
  try {
    const { userID } = req.params;
    const total = await ArticleModel.countDocuments({ userID });
    res.json({ total });
  } catch (error) {
    console.error("Error in getTotalArticles:", error);
    res.status(500).json({ total: 0 });
  }
};

exports.getTotalVideos = async (req, res) => {
  try {
    const { userID } = req.params;
    const total = await VideoModel.countDocuments({ userID });
    res.json({ total });
  } catch (error) {
    console.error("Error in getTotalVideos:", error);
    res.status(500).json({ total: 0 });
  }
};

// exports.getTotalComments = async (req, res) => {
//   try {
//     const total = await Comment.countDocuments({ user: req.params.userId });
//     res.json({ total });
//   } catch (error) {
//     console.error("Error in getTotalComments:", error);
//     res.status(500).json({ total: 0 });
//   }
// };

// exports.getTotalFollowers = async (req, res) => {
//   try {
//     const total = await Follow.countDocuments({ following: req.params.userId });
//     res.json({ total });
//   } catch (error) {
//     console.error("Error in getTotalFollowers:", error);
//     res.status(500).json({ total: 0 });
//   }
// };

// exports.getTotalFollowing = async (req, res) => {
//   try {
//     const total = await Follow.countDocuments({ follower: req.params.userId });
//     res.json({ total });
//   } catch (error) {
//     console.error("Error in getTotalFollowing:", error);
//     res.status(500).json({ total: 0 });
//   }
// };

// exports.getTotalViews = async (req, res) => {
//   try {
//     const total = await View.countDocuments({ user: req.params.userId });
//     res.json({ total });
//   } catch (error) {
//     console.error("Error in getTotalViews:", error);
//     res.status(500).json({ total: 0 });
//   }
// };

// exports.getTotalOpinions = async (req, res) => {
//   try {
//     const total = await Opinion.countDocuments({ user: req.params.userId });
//     res.json({ total });
//   } catch (error) {
//     console.error("Error in getTotalOpinions:", error);
//     res.status(500).json({ total: 0 });
//   }
// };
