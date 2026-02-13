const postModel = require("../models/post.model");
const jwt = require("jsonwebtoken");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

const client = ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  console.log(req.body, req.file);

  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "token not found: unauthorized access",
    });
  }

  let decoded = null;

  try {
    decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
  } catch (error) {
    res.status(401).json({
      message: "jwt verification failed",
    });
  }

  const file = await client.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "vsImage",
    folder: "test-testy",
  });

  console.log(decoded.id);

  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: decoded.id,
  });

  res.status(201).json({
    message: "post created successfully",
    post,
  });
}

module.exports = {
  createPostController,
};
