const Follow = require("../models/FollowSchema");
const User = require("../models/userModel");
const mongoose = require("mongoose");

// Helper: Get or Create Follow Doc for user
const getFollowDoc = async (userId) => {
  let followDoc = await Follow.findOne({ userId });
  if (!followDoc) {
    followDoc = await Follow.create({ userId });
  }
  return followDoc;
};

exports.followUser = async (req, res) => {
  try {
    const { userId, targetId } = req.body;
    if (userId === targetId)
      return res.status(400).json({ message: "Cannot follow yourself." });

    const userExists = await User.exists({ _id: userId });
    const targetExists = await User.exists({ _id: targetId });
    if (!userExists || !targetExists)
      return res.status(404).json({ message: "User not found." });

    const userFollow = await getFollowDoc(userId);
    const targetFollow = await getFollowDoc(targetId);

    if (userFollow.following.includes(targetId))
      return res.status(400).json({ message: "Already following." });

    userFollow.following.push(targetId);
    targetFollow.follower.push(userId);

    await userFollow.save();
    await targetFollow.save();

    res.status(200).json({ message: "Followed successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Unfollow user
exports.unfollowUser = async (req, res) => {
  try {
    const { userId, targetId } = req.body;

    const userFollow = await getFollowDoc(userId);
    const targetFollow = await getFollowDoc(targetId);

    userFollow.following = userFollow.following.filter(
      (id) => id.toString() !== targetId
    );
    targetFollow.follower = targetFollow.follower.filter(
      (id) => id.toString() !== userId
    );

    await userFollow.save();
    await targetFollow.save();

    res.status(200).json({ message: "Unfollowed successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get followers of a user
exports.getFollowers = async (req, res) => {
  try {
    const { userId } = req.params;
    const followDoc = await Follow.findOne({ userId }).populate(
      "follower",
      "name email profilePicture location company role"
    );

    if (!followDoc) return res.status(404).json({ message: "User not found." });

    res.status(200).json(followDoc.follower);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get followings of a user
exports.getFollowings = async (req, res) => {
  try {
    const { userId } = req.params;
    const followDoc = await Follow.findOne({ userId }).populate(
      "following",
      "name email profilePicture location company role"
    );

    if (!followDoc) return res.status(404).json({ message: "User not found." });

    res.status(200).json(followDoc.following);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get follower & following counts
exports.getFollowCounts = async (req, res) => {
  try {
    const { userId } = req.params;
    const followDoc = await Follow.findOne({ userId });

    if (!followDoc) return res.status(404).json({ message: "User not found." });

    res.status(200).json({
      followersCount: followDoc.follower.length,
      followingsCount: followDoc.following.length,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Send follow request
exports.sendFollowRequest = async (req, res) => {
  try {
    const { userId, targetId } = req.body;

    const sender = await getFollowDoc(userId);
    const receiver = await getFollowDoc(targetId);

    if (!sender.sent.includes(targetId)) sender.sent.push(targetId);
    if (!receiver.requests.includes(userId)) receiver.requests.push(userId);

    await sender.save();
    await receiver.save();

    res.status(200).json({ message: "Follow request sent." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Accept follow request
exports.acceptFollowRequest = async (req, res) => {
  try {
    const { userId, requesterId } = req.body;

    const receiver = await getFollowDoc(userId);
    const sender = await getFollowDoc(requesterId);

    receiver.requests = receiver.requests.filter(
      (id) => id.toString() !== requesterId
    );
    sender.sent = sender.sent.filter((id) => id.toString() !== userId);

    receiver.follower.push(requesterId);
    sender.following.push(userId);

    await receiver.save();
    await sender.save();

    res.status(200).json({ message: "Follow request accepted." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Reject or cancel follow request
exports.cancelFollowRequest = async (req, res) => {
  try {
    const { userId, targetId } = req.body;

    const sender = await getFollowDoc(userId);
    const receiver = await getFollowDoc(targetId);

    sender.sent = sender.sent.filter((id) => id.toString() !== targetId);
    receiver.requests = receiver.requests.filter(
      (id) => id.toString() !== userId
    );

    await sender.save();
    await receiver.save();

    res.status(200).json({ message: "Follow request cancelled." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get follow document of a user (with all types)
exports.getFollowData = async (req, res) => {
  try {
    const { userId } = req.params;
    const followDoc = await Follow.findOne({ userId })
      .populate("follower", "name email")
      .populate("following", "name email")
      .populate("requests", "name email")
      .populate("sent", "name email");

    if (!followDoc) return res.status(404).json({ message: "User not found." });

    res.status(200).json(followDoc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete all follow data for a user
exports.deleteFollowData = async (req, res) => {
  try {
    const { userId } = req.params;

    await Follow.findOneAndDelete({ userId });

    res.status(200).json({ message: "Follow data deleted." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update all follow types manually (advanced use)
exports.updateFollowData = async (req, res) => {
  try {
    const { userId } = req.params;
    const update = req.body;

    const followDoc = await Follow.findOneAndUpdate(
      { userId },
      { $set: update },
      { new: true }
    );

    if (!followDoc) return res.status(404).json({ message: "User not found." });

    res.status(200).json(followDoc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
