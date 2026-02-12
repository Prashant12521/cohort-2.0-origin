const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "Username already exits"],
    required: [true, "Username required"],
  },
  email: {
    type: String,
    unique: [true, "Email already exits"],
    required: [true, "Email required"],
  },
  password: {
    type: String,
    required: [true, "Password required"],
  },
  bio: String,
  profileImage: {
    type: String,
    default:
      "https://ik.imagekit.io/cc5gkipl0/default-avatar-social-media-display-600nw-2632690107.webp",
  },
});

const userModel = mongoose.model('users', userSchema)

module.exports = userModel