const express = require("express");
const router = express.Router();
const authRoutes = require("./authRoutes");
const userRoutes = require("./UserRoutes");
const articleRoutes = require("./ArticleRoutes");
const videoRoutes = require("./VideoRoutes");
const TotalRoutes = require("./TotalRoutes");

router.use("/api", authRoutes);
router.use("/api", userRoutes);
router.use("/api/articles", articleRoutes);
router.use("/api/videos", videoRoutes);
router.use("/api/total", TotalRoutes);
module.exports = router;
