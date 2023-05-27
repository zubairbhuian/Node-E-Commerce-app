require('dotenv').config();


const serverPort = process.env.SERVER_PORT || 5000;
const mongodbAtlasURL = process.env.MONGODB_ATLAS_URL;

const defaultUserImgPath= process.env.DEFAULT_USER_IMG_PATH || 'public/images/users/default.png';

module.exports ={serverPort,mongodbAtlasURL,defaultUserImgPath}