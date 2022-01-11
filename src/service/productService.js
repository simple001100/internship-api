import Product from "../models/modelProduct.js";
import { Buffer } from 'buffer';

const getProductById = async (id) => {
   const device = await Product.findOne(
      {
         where: { id },
      },
   );
   let data = device.dataValues.photo;
   let base64data = data.toString('base64');
   device.dataValues.photo = base64data;
   return device;
};

const getProductsByType = async (type, limit, offset) => {
   const devices = await Product.findAll({ where: { type }, limit, offset });
   return devices;
}

export default { getProductById, getProductsByType };