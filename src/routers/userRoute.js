const express =require('express')
const getUsers = require('../controllers/userController')
const UserRouter =express.Router()

UserRouter.get('/',getUsers)

module.exports = UserRouter; 

