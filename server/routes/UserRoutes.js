const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");
const followController = require("../controllers/followController");
const IsLogin = require("../middleware/isLogin");

// --------------------
// User Profile Routes
// --------------------
router.put("/UpdateProfile", IsLogin, UserController.UpdateUser);
router.put("/UpdateSkill/:userId", IsLogin, UserController.skillsController);
router.put("/UpdateSocials/:userId", IsLogin, UserController.socialController);

// --------------------
// Follow System Routes
// --------------------
router.post("/follow", IsLogin, followController.followUser);
router.post("/unfollow", IsLogin, followController.unfollowUser);

router.get("/followers/:userId", IsLogin, followController.getFollowers);
router.get("/followings/:userId", IsLogin, followController.getFollowings);
router.get("/follow-counts/:userId", IsLogin, followController.getFollowCounts);

router.post("/follow-request", IsLogin, followController.sendFollowRequest);
router.post("/follow-accept", IsLogin, followController.acceptFollowRequest);
router.post("/follow-cancel", IsLogin, followController.cancelFollowRequest);

router.get("/follow-data/:userId", IsLogin, followController.getFollowData);
router.delete(
  "/follow-delete/:userId",
  IsLogin,
  followController.deleteFollowData
);
router.put(
  "/follow-update/:userId",
  IsLogin,
  followController.updateFollowData
);

module.exports = router;
