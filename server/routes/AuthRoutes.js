const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const verifyUser = require("../middleware/isUser");
const otpService = require("../services/otpService");

// Authentication routes
router.post("/signup", AuthController.signup);
router.post("/login", verifyUser, AuthController.login);

// OTP routes
router.post("/sendOTP", otpService.sendOTP);
router.post("/verifyEmail", otpService.verifyOTP);

module.exports = router;
