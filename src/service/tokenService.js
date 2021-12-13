import jwt from 'jsonwebtoken';
import Token from '../models/modelToken.js';
import dotenv from 'dotenv';

dotenv.config();

const generateTokens = (payload) => {
   const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: "30m" });
   const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: "30d" });
   return {
      accessToken,
      refreshToken
   }
}

const validateAccessToken = (token) => {
   try {
      return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
   } catch (e) {
      return null;
   }
}

const validateRefreshToken = (token) => {
   try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      return userData;
   } catch (e) {
      return null;
   }
}

const saveToken = async (userId, refreshToken) => {
   try {

      const tokenData = await Token.findOne({ where: { userId } });
      if (tokenData) {
         tokenData.refreshToken = refreshToken;
         return tokenData.save();
      }
      const token = await Token.create({ userId, refreshToken });
      console.log(token)
      return token;
   } catch (e) {
      console.log(e)
   }
}

const removeToken = async (refreshToken) => {
   const tokenModel = await Token.destroy({ where: { refreshToken } });
   return tokenModel;
}

const findToken = async (refreshToken) => {
   const tokenModel = await Token.findOne({ where: { refreshToken } });
   return tokenModel;
}

export default { generateTokens, validateAccessToken, validateRefreshToken, saveToken, removeToken, findToken };