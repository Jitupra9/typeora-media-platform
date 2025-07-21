const VideosModel = require("../models/VideoModel");
const mongoose = require("mongoose");
exports.createVideo = async (req, res) => {
  try {
    const newVideo = new VideosModel(req.body.data);

    await newVideo.save();

    return res.status(201).json({
      success: true,
      message: "Video created successfully",
      data: newVideo,
    });
  } catch (error) {
    console.error("Error creating video:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create video",
      error: error.message,
    });
  }
};

exports.getAllVideos = async (req, res) => {
  try {
    const { page = 1, limit = 10, visibility } = req.query;
    const skip = (page - 1) * limit;

    const query = {};
    if (visibility) query.visibility = visibility;

    const videos = await VideosModel.find(query)
      .populate("userID", "Firstname LastName ProfilePicture")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await VideosModel.countDocuments(query);

    return res.status(200).json({
      success: true,
      message: "Videos fetched successfully",
      data: videos,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: parseInt(page),
    });
  } catch (error) {
    console.error("Error fetching videos:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch videos",
      error: error.message,
    });
  }
};

exports.getVideo = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid video ID",
      });
    }

    const video = await VideosModel.findByIdAndUpdate(
      id,
      { $inc: { views: 1 } },
      { new: true }
    ).populate("userID", "Firstname LastName ProfilePicture");

    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Video not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Video fetched successfully",
      data: video,
    });
  } catch (error) {
    console.error("Error fetching video:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch video",
      error: error.message,
    });
  }
};

exports.updateVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid video ID",
      });
    }

    const updatedVideo = await VideosModel.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedVideo) {
      return res.status(404).json({
        success: false,
        message: "Video not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Video updated successfully",
      data: updatedVideo,
    });
  } catch (error) {
    console.error("Error updating video:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update video",
      error: error.message,
    });
  }
};

exports.deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid video ID",
      });
    }

    const deletedVideo = await VideosModel.findByIdAndDelete(id);

    if (!deletedVideo) {
      return res.status(404).json({
        success: false,
        message: "Video not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Video deleted successfully",
      data: deletedVideo,
    });
  } catch (error) {
    console.error("Error deleting video:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete video",
      error: error.message,
    });
  }
};

exports.rateVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const { action } = req.body; // 'like' or 'dislike'

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid video ID",
      });
    }

    if (!["like", "dislike"].includes(action)) {
      return res.status(400).json({
        success: false,
        message: "Invalid action. Use 'like' or 'dislike'",
      });
    }

    const updateField =
      action === "like" ? { $inc: { like: 1 } } : { $inc: { dislike: 1 } };

    const video = await VideosModel.findByIdAndUpdate(id, updateField, {
      new: true,
    });

    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Video not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: `Video ${action}d successfully`,
      data: video,
    });
  } catch (error) {
    console.error(`Error ${action}ing video:`, error);
    return res.status(500).json({
      success: false,
      message: `Failed to ${action} video`,
      error: error.message,
    });
  }
};

exports.getUserVideos = async (req, res) => {
  try {
    console.log("userId:-", req.params.userID);
    const { userID } = req.params;
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    if (!mongoose.Types.ObjectId.isValid(userID)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
      });
    }

    const videos = await VideosModel.find({ userID })
      .populate({
        path: "userID",
        select: "Firstname LastName ProfilePicture Follwers Email",
      })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await VideosModel.countDocuments({ userID });

    return res.status(200).json({
      success: true,
      message: "User videos fetched successfully",
      data: videos,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: parseInt(page),
    });
  } catch (error) {
    console.error("Error fetching user videos:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch user videos",
      error: error.message,
    });
  }
};

// Delete Multiple Videos
exports.deleteMultipleVideos = async (req, res) => {
  try {
    const { videoIds } = req.body;

    // Validate input
    if (!Array.isArray(videoIds) || videoIds.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Please provide an array of video IDs to delete",
      });
    }

    // Validate each ID
    const invalidIds = videoIds.filter(
      (id) => !mongoose.Types.ObjectId.isValid(id)
    );
    if (invalidIds.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid video IDs found",
        invalidIds,
      });
    }

    // Convert all IDs to ObjectId
    const objectIds = videoIds.map((id) => new mongoose.Types.ObjectId(id));

    // Delete videos
    const deleteResult = await VideosModel.deleteMany({
      _id: { $in: objectIds },
    });

    if (deleteResult.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "No videos found to delete",
      });
    }

    return res.status(200).json({
      success: true,
      message: `${deleteResult.deletedCount} video(s) deleted successfully`,
      deletedCount: deleteResult.deletedCount,
    });
  } catch (error) {
    console.error("Error deleting multiple videos:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete videos",
      error: error.message,
    });
  }
};
