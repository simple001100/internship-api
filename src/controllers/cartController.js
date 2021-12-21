import Token from "../models/modelToken.js";
import cartProduct from "../models/modelCartProduct.js"

const getCart = async (req, res, next) => {
   try {
      const { refreshToken } = req.cookies;
      const userData = await Token.findOne({ where: { refreshToken } });
      const cart = await cartProduct.findAll({ where: { cartId: userData.userId } });
      return res.json(cart);
   } catch (e) {
      next(e);
   }
}

export default { getCart };