const express = require('express')
const identifyUser = require('../middlewares/auth.middleware')
const followController = require('../controllers/user.controller')

const followRouter = express.Router()

// POST /api/users/follow/:username
followRouter.post('/follow/:username', identifyUser, followController.followUserController)

// POST /api/users/unfollow/:username
followRouter.post('/unfollow/:username', identifyUser, followController.unfollowUserController)




module.exports = followRouter