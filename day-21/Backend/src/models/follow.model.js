const mongoose = require("mongoose");

const followSchema = new mongoose.Schema(
  {
    follower: {
      type: String,
      required: [true, "follower username required"],
    },
    followee: {
      type: String,
      required: [true, "followee username required"],
    },
  },
  { timestamps: true },
);

followSchema.index({ follower: 1, followee: 1 }, { unique: true });

const followModel = mongoose.model("follow", followSchema);

module.exports = followModel;
