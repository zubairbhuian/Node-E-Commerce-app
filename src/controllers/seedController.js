const User = require("../models/userModel")


const seedController = async (req, res, next) => {
  try {
    //    delete all existing user
    // await User.deleteMany({});
    //    create all existing user
    // const users =await User.insertMany(data.users);
    // successful response
    // return res.status(200).json({msg:'This is seed user'});
    return res.send("This is SeedUser")
  } catch (e) {
    next(e)
  }
}


module.exports = { seedController }