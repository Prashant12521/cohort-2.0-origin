const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    unique: [true, "username already exists"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "email already exists"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  bio: String,
  profileImage: {
    type: String,
    default:'https://ik.imagekit.io/cc5gkipl0/default-avatar-social-media-display-600nw-2632690107.webp?updatedAt=1770890981198'
  },
});

const userModel = mongoose.model('users', userSchema)

module.exports = userModel