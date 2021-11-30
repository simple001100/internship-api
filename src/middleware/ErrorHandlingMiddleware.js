import ApiError from "../error/apiError.js";

export const errorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.statue).json({ message: err.message });
  }
  return res.status(500).json({ message: "Error!" });
};
