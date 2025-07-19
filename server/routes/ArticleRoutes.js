const express = require("express");
const router = express.Router();
const ArticleController = require("../controllers/ArtilceController");
const IsLogin = require("../middleware/isLogin");

router.put("/:id", IsLogin, ArticleController.updateArticle);

router.delete("/:id", IsLogin, ArticleController.deleteArticle);

router.post("/search", ArticleController.searchArticles);
router.post("/:id/react", IsLogin, ArticleController.reactToArticle);
router.post("/NewArticle", IsLogin, ArticleController.NewArticle);

router.get("/:id", ArticleController.getArticleById);
router.get("/category/:category", ArticleController.getArticlesByCategory);
router.get("/trending", ArticleController.getTrendingArticles);
router.get("/public", ArticleController.getAllPublicArticles);
router.get("/user/:userID", ArticleController.getUserArticles);

module.exports = router;
