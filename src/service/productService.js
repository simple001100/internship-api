import Product from "../models/modelProduct.js"

const getProductById = async (id) => {
   let device = await Product.findOne(
      {
         where: { id },
      },
   );
   return device;
};

export default { getProductById };