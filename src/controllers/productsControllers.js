import Product from "../models/modelProduct.js";
import productService from "../service/productService.js";

const getProducts = async (req, res, next) => {
  let { type, page } = req.query;
  page = page || 1;
  let limit = 10;
  let offset = page * limit - limit;
  let devices;
  if (type && page) {
    devices = await productService.getProductsByType(type, limit, offset);
  }
  return res.json(devices);
};

const getAdvertising = async (req, res, next) => {
  const types = ["phone", "laptop", "watch", "ssd", "processor", "videocard"];
  let devices = [];

  const products = await Promise.all(types.map(el => productService.getProductsByType(el)));
  const advertising = products.map(el => {
    let maxRating = el.map(p => p.dataValues.rating);
    let max = Math.max(...maxRating);
    el.map(p => {
      if (p.dataValues.rating === max) devices.push(p);
    })
  }
  );
  return res.json(devices);
};

const getProductById = async (req, res, next) => {
  const { id } = req.params
  let device = await productService.getProductById(id);
  return res.json(device);
};

export default { getProducts, getProductById, getAdvertising };