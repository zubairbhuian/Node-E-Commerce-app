const User = require("../models/userModel")
const multer = require('multer')
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const imgUploadController = async (req, res, next) => {

}


module.exports = { imgUploadController }