const User = require("../models/userModel")


const seedController =async(req,res,next)=>{
  try{
//    delete all existing user
await User.deleteMany({});
//    create all existing user
const users =await User.insertMany(data.users);
// successful response
return res.status(201).json({msg:'Demo'});
  }catch(e){
  next(e)
  }
}


module.exports ={seedController}