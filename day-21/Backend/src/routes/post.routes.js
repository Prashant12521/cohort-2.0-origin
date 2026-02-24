const express = require('express');
const postController = require('../controllers/post.controller')
const multer = require('multer');
const identifyUser = require('../middlewares/auth.middleware');
const upload = multer({storage:multer.memoryStorage()})

const postRouter = express.Router()

// GET /api/posts/feed (access: private)
postRouter.get('/feed', identifyUser, postController.getFeedController)

// POST /api/posts/
postRouter.post('/', upload.single('image'), identifyUser, postController.createPostController)

// GET /api/posts/
postRouter.get('/', identifyUser, postController.getPostController)

// POST /api/posts/like/:postId
postRouter.post('/like/:postId', identifyUser, postController.likePostController)

// GET /api/posts/:postId
postRouter.get('/:postId', identifyUser, postController.getPostDetailsController)


module.exports = postRouter