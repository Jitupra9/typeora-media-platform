const express = require("express");
const router = express.Router();
const UniversalController = require("../controllers/UniversalController");

// Universal search endpoint with optional type filtering
// Usage:
// - /search/query (searches all types)
// - /search/query?type=articles (only articles)
// - /search/query?type=videos&limit=10 (only videos with 10 results)
router.get("/SearchQuery/:query", UniversalController.universalSearch);

module.exports = router;
