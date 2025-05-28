const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController.js");
const verifyUser = require("../middleware/isUser.js");
// const IsLogin = require("../middleware/islogin.js");
const otpService = require("../services/otpService.js");

router.post("/api/signup", AuthController.signup);
router.post("/api/login", verifyUser, AuthController.login);

router.post("/api/sendOTP", otpService.sendOTP);
router.post("/api/veifyEmail", otpService.verifyOTP);
module.exports = router;
