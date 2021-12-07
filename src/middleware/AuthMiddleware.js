import ApiError from "../error/apiError";
import { validateAccessToken } from "../service/tokenService";


export const authHandler = (req, res, next) => {
   try {
      const authorizationHeader = req.headers.authorization;
      if (!authorizationHeader) {
         return next(ApiError.unauthorizedError());
      }

      const accessToken = authorizationHeader.split(' ')[1];
      if (!accessToken) {
         return next(ApiError.unauthorizedError());
      }

      const userData = validateAccessToken(accessToken);
      if (!userData) {
         return next(ApiError.unauthorizedError());
      }

      req.user = userData;
      next();
   } catch (e) {
      return next(ApiError.unauthorizedError());
   }
};