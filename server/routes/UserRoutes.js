const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const IsLogin = require("../middleware/isLogin");
// const followController = require("../controllers/followController");

router.put("/UpdateProfile", IsLogin, UserController.UpdateUser);
router.put("/UpdateSkill/:userId", IsLogin, UserController.skillsController);
router.put("/UpdateSocials/:userId", IsLogin, UserController.socialController);

// router.post("/follow", followController.followUser);
// router.post("/unfollow", followController.unfollowUser);
// router.get("/followers/:userId", followController.getFollowers);
// router.get("/followings/:userId", followController.getFollowings);
// router.get("/counts/:userId", followController.getFollowCounts);

module.exports = router;
