const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const IsLogin = require("../middleware/isLogin");

// User profile routes
router.put("/UpdateProfile", IsLogin, UserController.UpdateUser);

module.exports = router;
