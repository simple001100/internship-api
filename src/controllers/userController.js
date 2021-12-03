import ApiError from "../error/apiError.js";
import User from "../models/modelUser.js";

export const getUsers = async (req, res, next) => {
   let users = await User.findByPk(1);
   return res.json(users);
};