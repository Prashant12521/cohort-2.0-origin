const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "Username already exists"],
    required: [true, "Username required"],
  },
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email required"],
  },
  password: {
    type: String,
    required: [true, "Password required"],
  },
  bio: String,
  profileImage: {
    type: String,
    default: "image-link",
  },
});

const userModel = mongoose.model('users', userSchema)

module.exports = userModel