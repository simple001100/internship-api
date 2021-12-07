import UserDto from "../dtos/userDtos.js";
import ApiError from "../error/apiError.js";
import User from "../models/modelUser.js"
import { generateTokens, saveToken } from "./tokenService.js";

export const Login = async (login, password) => {
   const user = await User.findOne({ where: { login } });
   if (!user) {
      throw ApiError.badRequests("User not found");
   }
   const isPassEquals = password === user.password; //await bcrypt.compare(password, user.password);
   if (!isPassEquals) {
      throw ApiError.badRequests("Incorrect password");
   }
   const userDto = new UserDto(user);
   const tokens = generateTokens({ ...userDto });
   await saveToken(userDto.id, tokens.refreshToken);

   return { ...tokens, user: userDto }
}