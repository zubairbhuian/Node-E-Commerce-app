const User = require("../models/userModel")
const data =require("../data")


const seedController = async (req, res, next) => {
  try {
      //  delete all existing user
    await User.deleteMany();
      //  create all existing user
    const users =await User.insertMany(data.users);
    // successful response
    return res.status(201).json(users);
    // return res.send("This is SeedUser")
  } catch (e) {
    next(e)
  }
}


module.exports = { seedController }