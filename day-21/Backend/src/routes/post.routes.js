const express = require('express');
const postController = require('../controllers/post.controller')
const multer = require('multer');
const identifyUser = require('../middlewares/auth.middleware');
const upload = multer({storage:multer.memoryStorage()})

const postRouter = express.Router()

// POST /api/posts/
postRouter.post('/', upload.single('image'), identifyUser, postController.createPostController)

// GET /api/posts/
postRouter.get('/', identifyUser, postController.getPostController)

// GET /api/posts/:postId
postRouter.get('/:postId', identifyUser, postController.getPostDetailsController)

// POST /api/posts/like/:postId
postRouter.post('/like/:postId', identifyUser, postController.likePostController)


module.exports = postRouter