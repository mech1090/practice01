const express = require('express')
const route = express.Router()
const userController = require('../controller/user.controller')

route.get('/',userController.getLoginForm)
route.post('/',userController.login)
route.get('/',userController.getSignupForm)
route.post('/',userController.signup)

module.exports = route