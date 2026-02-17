const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "username already exists"],
    required: [true, "username required"],
  },
  email: {
    type: String,
    unique: [true, "email already exists"],
    required: [true, "email required"],
  },
  password: {
    type: String,
    required: [true, "password required"],
  },
  bio: String,
  profileImage: {
    type: String,
    default:
      "https://ik.imagekit.io/cc5gkipl0/default-avatar-social-media-display-600nw-2632690107.webp?updatedAt=1770890981198",
  },
});

const userModel = mongoose.model('users', userSchema)

module.exports = userModel