const express = require("express");
const router = express.Router();
const authRoutes = require("./authRoutes");
const userRoutes = require("./UserRoutes");
const articleRoutes = require("./ArticleRoutes");

// API prefix for all routes
router.use("/api", authRoutes);
router.use("/api", userRoutes);
router.use("/api/articles", articleRoutes);

module.exports = router;
