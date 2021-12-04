import ApiError from "../error/apiError.js";
import Product from "../models/modelProduct.js";

export const getProducts = async (req, res, next) => {
  let { type, page } = req.query;
  page = page || 1;
  let limit = 10;
  let offset = page * limit - limit;
  let devices;
  if (type && page) {
    devices = await Product.findAll({ where: { type }, limit, offset });
  }
  return res.json(devices);
};

export const getProductById = async (req, res, next) => {
  const { id } = req.params
  let device = await Product.findOne(
    {
      where: { id },
    },
  )
  return res.json(device);
};
