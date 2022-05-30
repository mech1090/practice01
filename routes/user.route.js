const express = require('express')
const route = express.Router()
const userController = require('../controller/user.controller')

route.get('/login',userController.getLoginForm)
route.post('/login',userController.login)
route.get('/signup',userController.getSignupForm)
route.post('/signup',userController.signup)

module.exports = route