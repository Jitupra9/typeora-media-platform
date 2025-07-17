const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController.js");
const UserController = require("../controllers/UserController.js");
const verifyUser = require("../middleware/isUser.js");
const IsLogin = require("../middleware/islogin.js");
const otpService = require("../services/otpService.js");
const Article = require("../controllers/Articles.js");

router.post("/api/signup", AuthController.signup);
router.post("/api/login", verifyUser, AuthController.login);
router.put("/api/UpdateProfile", IsLogin, UserController.UpdateUser);
router.post("/api/sendOTP", otpService.sendOTP);
router.post("/api/veifyEmail", otpService.verifyOTP);

router.post("/api/NewArticle", Article.NewArticle);
module.exports = router;
