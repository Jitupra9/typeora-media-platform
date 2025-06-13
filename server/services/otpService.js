const transporter = require("../config/MailTransporter.js");
const crypto = require("crypto");
const OTP = require("../models/otpModel.js");

const dotenv = require("dotenv");
dotenv.config();

const generateOTP = () => {
  return crypto.randomInt(100000, 999999);
};

exports.sendOTP = async (req, res) => {
  const { email } = req.body;

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address.",
    });
  }

  let check = await OTP.findOne({ email: email });
  if (check) {
    await OTP.deleteOne({ email: email });
  }
  const otp = generateOTP();
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
  const subject = "Your OTP for verification";
  const to = email;

  const mailOptions = {
    from: process.env.MAIL_USER,
    to,
    subject,
    text: `Your OTP is: ${otp}. It will expire in 10 minutes.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`OTP sent to ${email}`);

    const otpRecord = new OTP({
      email,
      otp: otp.toString(),
      expiresAt,
    });
    await otpRecord.save();

    res.status(200).json({
      success: true,
      message: "OTP sent successfully.",
    });
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({
      success: false,
      message: "Unable to send OTP at the moment. Please try again later.",
    });
  }
};

exports.verifyOTP = async (req, res) => {
  console.log("request data", req.body);
  const { email, otp } = req.body;
  if (!email || !otp) {
    return res.status(400).json({
      success: false,
      message: "Email and OTP are required.",
    });
  }

  try {
    const otpRecord = await OTP.findOne({ email: email });
    if (!otpRecord) {
      return res.status(404).json({
        success: false,
        message:
          "No OTP has been sent to this email. Please request OTP first.",
      });
    }
    if (otp !== otpRecord.otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP. Please try again.",
      });
    }
    if (new Date() > new Date(otpRecord.expiresAt)) {
      await OTP.deleteOne({ email });

      return res.status(400).json({
        success: false,
        message: "OTP has expired. Please request a new one.",
      });
    }
    res.status(200).json({
      success: true,
      message: "OTP verified successfully.",
    });
    await OTP.deleteOne({ email });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while verifying OTP. Please try again later.",
    });
  }
};

exports.ResendOTP = async (req, res) => {
  const { email } = req.body;

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address.",
    });
  }

  const otp = generateOTP();
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
  const subject = "Your OTP for verification";
  const to = email;

  const mailOptions = {
    from: process.env.MAIL_USER,
    to,
    subject,
    text: `Your OTP is: ${otp}. It will expire in 10 minutes.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`OTP sent to ${email}`);

    const otpRecord = new OTP({
      email,
      otp: otp.toString(),
      expiresAt,
    });
    await otpRecord.save();

    res.status(200).json({
      success: true,
      message: "OTP sent successfully.",
    });
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({
      success: false,
      message: "Unable to send OTP at the moment. Please try again later.",
    });
  }
};
