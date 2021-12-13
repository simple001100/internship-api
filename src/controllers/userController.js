import userService from "../service/userService.js";

const login = async (req, res, next) => {
   try {
      const { login, password } = req.body;
      const userData = await userService.Login(login, password);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.json(userData);
   } catch (e) {
      next(e);
   }
}

const logout = async (req, res, next) => {
   try {
      const { refreshToken } = req.cookies;
      const token = await userService.Logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.json(token);
   } catch (e) {
      next(e);
   }
}

const refresh = async (req, res, next) => {
   try {
      const { refreshToken } = req.cookies;
      const userData = await userService.Refresh(refreshToken);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.json(userData);
   } catch (e) { next(e); }
}

export default { login, logout, refresh };
