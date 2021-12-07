import Token from "../models/modelToken.js";
import User from "../models/modelUser.js";

export const getCart = async (req, res, next) => {
   try {
      const { refreshToken } = req.cookies;
      const userData = await Token.findOne({ where: { refresh_token: refreshToken } });
      const cart = await User.findAll({ where: { cart_id: userData.user } });
      return res.json(cart);
   } catch (e) { next(e); }
}