const jwt = require("jsonwebtoken");

const isLoggedIn = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: " Please log in first.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token. Please log in again.",
    });
  }
};

module.exports = isLoggedIn;
