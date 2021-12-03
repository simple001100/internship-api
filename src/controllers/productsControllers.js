import ApiError from "../error/apiError.js";
import Product from "../models/modelProduct.js";

export const getPhones = async (req, res, next) => {
  let { page } = req.query;
  page = page || 1;
  let limit = 10;
  let offset = page * limit - limit;
  let devices;
  if (page) {
    devices = await Product.findAll().catch(e => console.log(e));
  }
  console.log(devices)
  return res.json(devices);
};

export const getLaptops = async (req, res) => { };

export const getSsds = async (req, res) => { };

export const getProcessors = async (req, res) => { };

export const getVideocards = async (req, res) => { };

export const getWatches = async (req, res) => { };
