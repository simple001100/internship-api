import Product from "../models/modelProduct.js";

const getProductById = async (id) => {
   const device = await Product.findOne(
      {
         where: { id },
      },
   );
   return device.dataValues;
};

const getProductsByType = async (type, limit, offset) => {
   const devices = await Product.findAll({ where: { type }, limit, offset });
   return devices;
}

export default { getProductById, getProductsByType };