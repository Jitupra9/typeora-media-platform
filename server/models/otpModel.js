const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    otp: { type: String, required: true },
    expiresAt: { type: Date, required: true },
  },
  { collection: "otps" }
);
const OTP = mongoose.model("otps", otpSchema);

module.exports = OTP;
