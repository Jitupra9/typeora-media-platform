const express = require("express");
const router = express.Router();
const TotalController = require("../controllers/TotalController");
// const {
//   getTotalArticles,
//   getTotalVideos,
//   // getTotalComments,
//   // getTotalFollowers,
//   // getTotalFollowing,
//   // getTotalViews,
//   // getTotalOpinions,
// } = require("../controllers/TotalController");

// Define routes with userId as param
router.get("/articles/:userID", TotalController.getTotalArticles);
router.get("/videos/:userID", TotalController.getTotalVideos);
// router.get("comments/total/:userId", getTotalComments);
// router.get("followers/count/:userId", getTotalFollowers);
// router.get("following/count/:userId", getTotalFollowing);
// router.get("views/total/:userId", getTotalViews);
// router.get("opinions/total/:userId", getTotalOpinions);

module.exports = router;
