import ApiError from "../error/apiError.js";

export const getPhones = async (req, res, next) => {
  const { id } = req.query;
  if (!id) return next(ApiError.badRequests("Can not find ID"));
  res.json(id);
};

export const getLaptops = async (req, res) => {};

export const getSsds = async (req, res) => {};

export const getProcessors = async (req, res) => {};

export const getVideocards = async (req, res) => {};

export const getWatches = async (req, res) => {};
