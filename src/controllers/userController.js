import { Login, Logout, Refresh } from "../service/userService.js";

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

export const logout = async (req, res, next) => {
   try {
      const { refreshToken } = req.cookies;
      const token = await Logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.json(token);
   } catch (e) {
      next(e);
   }
}

export const refresh = async (req, res, next) => {
   try {
      const { refreshToken } = req.cookies;
      const userData = await Refresh(refreshToken);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.json(userData);
   } catch (e) { next(e); }
}