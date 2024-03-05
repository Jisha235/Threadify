const User = require("../models/user_model");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtProvider");

const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;
    const isUserExist = await User.findOne({ email }); // one email can only be used once

    if (isUserExist) {
      throw new Error("User already exists with this email: ", email);
    }

    password = await bcrypt.hash(password, 8);

    const user = await User.create({ firstName, lastName, email, password });
    console.log("Created user :", user);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId)
    //.populate("address");
    if (!user) {
      throw new Error("User not found with id : ", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({email});
    if (!user) {
      throw new Error("User not found with email : ", email);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
// on passing token, it will give user
const getUserProfileByToken = async (token) => {
  try {
    const userId = jwtProvider.getUserIdFromToken(token);
    const user = await findUserById(userId);

    if (!user) {
      throw new Error("User not found with id : ", userId);
    }
    console.log("user ",user)
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  findUserById,
  getUserByEmail,
  getUserProfileByToken,
  getAllUsers,
};
