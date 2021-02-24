const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email!"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password!"],
    },
    role: {
      type: Number,
      default: 0, // 0: User 1: Admin
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/gleray123/image/upload/v1614055134/230x230-avatar-dummy-profile-pic.img_c5rpdp.jpg",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);
