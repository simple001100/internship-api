import Token from "../models/modelToken.js";

const getCartId = async (req) => {
   const { refreshToken } = req.cookies;
   const userData = await Token.findOne({ where: { refreshToken } });
   return userData.userId;
}

export default { getCartId };