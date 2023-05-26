require('dotenv').config();


const serverPort = process.env.SERVER_PORT || 5000;
const mongodbAtlasURL = process.env.MONGODB_ATLAS_URL;

module.exports ={serverPort,mongodbAtlasURL}