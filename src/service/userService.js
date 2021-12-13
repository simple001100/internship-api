import UserDto from "../dtos/userDtos.js";
import ApiError from "../error/apiError.js";
import User from "../models/modelUser.js"
import bcrypt from 'bcrypt';
import tokenService from "./tokenService.js";

export const Login = async (login, password) => {
   const user = await User.findOne({ where: { login } });
   if (!user) {
      throw ApiError.badRequests("User not found");
   }
   const isPassEquals = await bcrypt.compare(password, user.password);
   if (!isPassEquals) {
      throw ApiError.badRequests("Incorrect password");

   }
   const userDto = new UserDto(user);
   const tokens = tokenService.generateTokens({ ...userDto });
   await tokenService.saveToken(userDto.id, tokens.refreshToken);

   return { ...tokens, user: userDto }
}

export const Logout = async (refreshToken) => {
   const token = await tokenService.removeToken(refreshToken);
   return token;
}

export const Refresh = async (refreshToken) => {
   if (!refreshToken) {
      throw ApiError.unauthorizedError();
   }
   const userData = tokenService.validateRefreshToken(refreshToken);
   const tokenFromDB = await tokenService.findToken(refreshToken);
   if (!userData || !tokenFromDB) {
      throw ApiError.unauthorizedError();
   }
   const user = await User.findByPk(userData.id);
   const userDto = new UserDto(user);
   const tokens = tokenService.generateTokens({ ...userDto });
   await tokenService.saveToken(userDto.id, tokens.refreshToken);

   return { ...tokens, user: userDto }
}