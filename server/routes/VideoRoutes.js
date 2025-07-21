const express = require("express");
const router = express.Router();

const VideoController = require("../controllers/VideoController");
const isLogin = require("../middleware/isLogin");

router.put("/:id", isLogin, VideoController.updateVideo);

router.post("/NewVideo", isLogin, VideoController.createVideo);

router.get("/user/:userID", VideoController.getUserVideos);
module.exports = router;
