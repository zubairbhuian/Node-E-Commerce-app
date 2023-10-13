const express = require("express");
const baseController = require("../controllers/base/baseController")
const baseRoute = express.Router();


baseRoute.get("", baseController)
baseRoute.get("/zubair", baseController)

module.exports = baseRoute;