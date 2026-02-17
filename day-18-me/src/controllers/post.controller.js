const postModel = require("../models/post.model");
const IMAGEKIT = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

const client = new IMAGEKIT({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  // console.log(req.body, req.file);

  const file = await client.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "something-something",
    folder: "yo-yo",
  });

  const userId = req.user.id;

  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: userId,
  });

  res.status(201).json({
    message: "post created successfully",
    post,
  });
}

async function getPostController(req, res) {
  const userId = req.user.id;

  const post = await postModel.find({ user: userId });

  res.status(200).json({
    message: "all posts fetched successfully",
    post,
  });
}

async function getPostDetailsController(req, res) {
  const userId = req.user.id;
  const postId = req.params.postId;

  const post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  const isValidUser = post.user.toString() === userId;

  if (!isValidUser) {
    return res.status(403).json({
      message: "Forbidden Content",
    });
  }

  return res.status(200).json({
    message: "Post fetched successfully",
    post,
  });
}

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,
};
