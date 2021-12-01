import ApiError from "../error/apiError.js";
import { User } from "../models/models.js";

export const getUsers = async (req, res, next) => {
   let users = await User.findByPk(1).catch(e => console.log(e));
   return res.json(users);
};