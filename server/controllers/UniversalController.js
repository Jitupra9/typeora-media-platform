const ArticleModel = require("../models/ArticleModel");
const VideosModel = require("../models/VideoModel");
const UserModel = require("../models/userModel");

// Cache frequently used queries (simple in-memory cache)
const searchCache = new Map();
const CACHE_TTL = 30000; // 30 seconds

exports.universalSearch = async (req, res) => {
  try {
    const { query } = req.params;
    const { type, limit = 5 } = req.query;
    if (!query || query.trim().length < 2) {
      return res.json({
        success: true,
        results: { articles: [], videos: [], users: [] },
        meta: { query, cached: false },
      });
    }

    const cacheKey = `${type || "all"}:${query}:${limit}`;

    if (searchCache.has(cacheKey)) {
      const cachedData = searchCache.get(cacheKey);
      if (Date.now() - cachedData.timestamp < CACHE_TTL) {
        return res.json({
          ...cachedData.data,
          meta: { ...cachedData.data.meta, cached: true },
        });
      }
    }

    const contentSearch = {
      $or: [
        { title: { $regex: `^${query}`, $options: "i" } }, // Starts with
        { title: { $regex: query, $options: "i" } }, // Contains
        { tags: { $in: [new RegExp(query, "i")] } },
      ],
      visibility: "Public",
    };

    const userSearch = {
      $or: [
        { Firstname: { $regex: `^${query}`, $options: "i" } },
        { LastName: { $regex: `^${query}`, $options: "i" } },
        {
          $expr: {
            $regexMatch: {
              input: { $concat: ["$Firstname", " ", "$LastName"] },
              regex: query,
              options: "i",
            },
          },
        },
      ],
    };

    const [articles, videos, users] = await Promise.all([
      !type || type === "all" || type === "articles"
        ? ArticleModel.find(contentSearch)
            .populate("userID", "Firstname LastName ProfilePicture")
            .limit(parseInt(limit))
            .lean()
        : Promise.resolve([]),

      !type || type === "all" || type === "videos"
        ? VideosModel.find(contentSearch)
            .populate("userID", "Firstname LastName ProfilePicture")
            .limit(parseInt(limit))
            .lean()
        : Promise.resolve([]),

      !type || type === "all" || type === "users"
        ? UserModel.find(userSearch)
            .select("Firstname LastName Email ProfilePicture")
            .limit(parseInt(limit))
            .lean()
        : Promise.resolve([]),
    ]);

    // Prepare response
    const response = {
      success: true,
      results: {
        articles: articles.map((a) => ({ ...a, type: "article" })),
        videos: videos.map((v) => ({ ...v, type: "video" })),
        users: users.map((u) => ({ ...u, type: "user" })),
      },
      meta: {
        query,
        articlesCount: articles.length,
        videosCount: videos.length,
        usersCount: users.length,
        cached: false,
      },
    };

    // Cache the response
    searchCache.set(cacheKey, {
      timestamp: Date.now(),
      data: response,
    });

    res.json(response);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({
      success: false,
      message: "Error performing search",
    });
  }
};
