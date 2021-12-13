import Token from "../models/modelToken.js";
import User from "../models/modelUser.js";

const getCart = async (req, res, next) => {
   try {
      const { refreshToken } = req.cookies;
      const userData = await Token.findOne({ where: { refreshToken } });
      const cart = await User.findAll({ where: { cart_id: userData.user } });
      return res.json(cart);
   } catch (e) { next(e); }
}

export default { getCart };