import Product from "../models/modelProduct.js";
import productService from "../service/productService.js";

const getProducts = async (req, res, next) => {
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

const getProductById = async (req, res, next) => {
  const { id } = req.params
  let device = await productService.getProductById(id);
  return res.json(device);
};

export default { getProducts, getProductById };