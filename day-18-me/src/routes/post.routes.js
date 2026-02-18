const express = require('express');
const postRouter = express.Router()
const postController = require('../controllers/post.controller')
const multer = require('multer');
const identifyUser = require('../middlewares/auth.middleware');
const upload = multer({storage:multer.memoryStorage()})

// @route POST /api/posts/ [protected]
postRouter.post('/', upload.single('postman'), identifyUser, postController.createPostController)

// @route GET /api/posts/ [protected]
postRouter.get('/', identifyUser, postController.getPostController)

// @route GET /api/posts/details/:postId
postRouter.get('/details/:postId', identifyUser, postController.getPostDetailsController)

// @route POST /api/posts/like/:postid
// @description like a post with the id provided in the request params.
postRouter.post('/like/:postId', identifyUser, postController.likePostController)


module.exports = postRouter