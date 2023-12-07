const express =require('express')
const {getUsers ,getUserById} = require('../controllers/userController')

const UserRouter =express.Router()

 UserRouter.get('/',getUsers)
 UserRouter.get('/:id',getUserById)

module.exports = UserRouter; 

