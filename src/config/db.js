const mongoose = require('mongoose');
const { mongodbAtlasURL } = require('../secret');

const connectDB =async(options)=>{
  try{
     await mongoose.connect(mongodbAtlasURL,options);
     console.log("DB conneted");
     mongoose.connection.on('error',()=>{
        console.error("DB connection error :"+error);
     })
  }catch(error){
    console.error("Could not connected:",error.toString());
  }
}


module.exports = connectDB;