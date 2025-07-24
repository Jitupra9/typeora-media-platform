const User = require("../models/userModel");

exports.followUser = async (req, res) => {
  try {
    const { userId, targetId } = req.body;
    if (userId === targetId)
      return res.status(400).json({ message: "Cannot follow yourself." });

    const user = await User.findById(userId);
    const target = await User.findById(targetId);

    if (!user || !target)
      return res.status(404).json({ message: "User not found." });

    if (!user.followings.includes(targetId)) {
      user.followings.push(targetId);
      user.followingsCount++;
    }

    if (!target.followers.includes(userId)) {
      target.followers.push(userId);
      target.followersCount++;
    }

    await user.save();
    await target.save();

    res.status(200).json({ message: "Followed successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.unfollowUser = async (req, res) => {
  try {
    const { userId, targetId } = req.body;

    const user = await User.findById(userId);
    const target = await User.findById(targetId);

    if (!user || !target)
      return res.status(404).json({ message: "User not found." });

    user.followings = user.followings.filter(
      (id) => id.toString() !== targetId
    );
    target.followers = target.followers.filter(
      (id) => id.toString() !== userId
    );

    user.followingsCount = user.followings.length;
    target.followersCount = target.followers.length;

    await user.save();
    await target.save();

    res.status(200).json({ message: "Unfollowed successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFollowers = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).populate(
      "followers",
      "name email profilePicture location company role"
    );
    if (!user) return res.status(404).json({ message: "User not found." });

    res.status(200).json(user.followers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFollowings = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).populate(
      "followings",
      "name email profilePicture location company role"
    );
    if (!user) return res.status(404).json({ message: "User not found." });

    res.status(200).json(user.followings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFollowCounts = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found." });

    res.status(200).json({
      followersCount: user.followersCount,
      followingsCount: user.followingsCount,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
