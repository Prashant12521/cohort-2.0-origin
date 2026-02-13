const express = require('express');
const authRouter = express.Router()
const userController = require('../controllers/auth.controller')


authRouter.post('/register', userController.registerController)
authRouter.post('/login', userController.loginController)



module.exports = authRouter