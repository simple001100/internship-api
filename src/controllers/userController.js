import { Login } from "../service/userService.js";

export const login = async (req, res, next) => {
   try {
      const { login, password } = req.body;
      const userData = await Login(login, password);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.json(userData);
   } catch (e) {
      next(e);
   }
}