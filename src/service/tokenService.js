import jwt from 'jsonwebtoken';
import Token from '../models/modelToken.js';
import dotenv from 'dotenv';

dotenv.config();

export const generateTokens = (payload) => {
   const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: "30m" });
   const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: "30d" });
   return {
      accessToken,
      refreshToken
   }
}

export const validateAccessToken = (token) => {
   try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return userData;
   } catch (e) {
      return null;
   }
}

export const validateRefreshToken = (token) => {
   try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      return userData;
   } catch (e) {
      return null;
   }
}

export const saveToken = async (userId, refreshToken) => {
   const tokenData = await Token.findOne({ where: { user: userId } });
   if (tokenData) {
      tokenData.refresh_token = refreshToken;
      return tokenData.save();

   }

   const token = await Token.create({ user: userId, refresh_token: refreshToken });
   return token;
}

export const removeToken = async (refreshToken) => {
   const tokenModel = await Token.destroy({ where: { refresh_token: refreshToken } });
   return tokenModel;
}

export const findToken = async (refreshToken) => {
   const tokenModel = await Token.findOne({ where: { refresh_token: refreshToken } });
   return tokenModel;
}