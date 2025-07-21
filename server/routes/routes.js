const express = require("express");
const router = express.Router();
const authRoutes = require("./authRoutes");
const userRoutes = require("./UserRoutes");
const articleRoutes = require("./ArticleRoutes");
const videoRoutes = require("./VideoRoutes");

router.use("/api", authRoutes);
router.use("/api", userRoutes);
router.use("/api/articles", articleRoutes);
router.use("/api/videos", videoRoutes);

module.exports = router;
