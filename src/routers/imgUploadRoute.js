const express = require('express');
const { imgUploadController } = require('../controllers/imgUploadController');

const imgUploadRuter =express.Router();


imgUploadRuter.post('/user',imgUploadController)

module.exports = imgUploadRuter;