const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  logout,
  fetchUser,
} = require("../controllers/AuthController.js");
const verifyUser = require("../middleware/isUser.js");
const IsLogin = require("../middleware/islogin.js");
const { sendOTP, verifyOTP } = require("../services/otpService.js");

router.post("/api/signup", signup);
router.post("/api/login", verifyUser, login);
router.get("/api/logout", IsLogin, logout);
router.get("/api/fetchUser", IsLogin, fetchUser);
router.post("/api/sendOTP", sendOTP);
router.post("/api/veifyEmail", verifyOTP);
module.exports = router;
