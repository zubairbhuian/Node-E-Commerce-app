const createHttpError = require("http-errors");
const User = require("../models/userModel");
const { successResposnse } = require("../helper/resposnse");

const getUsers = async (req, res, next) => {
  try {
    const search = req.query.search || "";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    // hide
    const options = {
      password: 0,
      isAdmin: 0,
    };
    //
    const searchRegExp = new RegExp(".*" + search + ".*", "i");
    const filter = {
      isAdmin: { $ne: true },
      $or: [
        { name: { $regex: searchRegExp } },
        { email: { $regex: searchRegExp } },
        { phone: { $regex: searchRegExp } },
      ],
    };
    // totale items
    const count = await User.find(filter, options).countDocuments();
    // user find
    const users = await User.find(filter, options)
      .limit(limit)
      .skip((page - 1) * limit);
    if (!users) throw createHttpError(404, "user not found");
    //
    successResposnse(res, {
      statusCode: res.statusCode,
      message: "",
      payload: {
        data: users,
        pagination: {
          totalPage: Math.ceil(count / limit),
          curentPage: page,
          nextPage: page + 1 <= Math.ceil(count / limit) ? page + 1 : null,
          prevousPage: page - 1 > 0 ? page - 1 : null,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};


const getUserById = async (req, res, next) => {
  try {
    const search = req.query.search || "";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    // hide 
    const options = {
      password: 0,
      isAdmin: 0,
    };
    // 
    const searchRegExp = new RegExp(".*" + search + ".*", "i");
    const filter = {
      isAdmin: { $ne: true },
      $or: [
        { name: { $regex: searchRegExp } },
        { email: { $regex: searchRegExp } },
        { phone: { $regex: searchRegExp } },
      ],
    };
    // totale items
    const count = await User.find(filter, options).countDocuments();
    // user find
    const users = await User.find(filter, options)
      .limit(limit)
      .skip((page - 1) * limit);
    if (!users) throw createHttpError(404, "user not found");
    // 
    successResposnse(res, {
      statusCode: res.statusCode,
      message: "",
      payload: {
        data: users,
        pagination: {
          totalPage: Math.ceil(count / limit),
          curentPage: page,
          nextPage: page + 1 <= Math.ceil(count / limit) ? page + 1 : null,
          prevousPage: page - 1 > 0 ? page - 1 : null,
        },
      },
    });
  } catch (error) {
    next(error);
  }




};

module.exports = {getUsers,getUserById};
