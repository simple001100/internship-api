import cartProduct from "../models/modelCartProduct.js";
import Product from "../models/modelProduct.js";
import cartService from "../service/cartService.js";
import productService from "../service/productService.js";

const getCart = async (req, res, next) => {
   try {
      const cartId = await cartService.getCartId(req);
      const cart = await cartProduct.findAll({ where: { cartId } });
      const cartProducts = await Promise.all(cart.map(async (el) => {
         return await productService.getProductById(el.productId);
      }));
      return res.json(cartProducts);
   } catch (e) {
      next(e);
   }
}

const addToCart = async (req, res, next) => {
   try {
      const cartId = await cartService.getCartId(req);
      const { id, quantity } = req.query;
      const cart = await cartProduct.create({ cartId, productId: id, quantity });
      return res.json(cart);
   } catch (e) {
      next(e);
   }
}

const deleteFromCart = async (req, res, next) => {
   try {
      const { id } = req.query;
      const cart = await cartProduct.destroy({ where: { productId: id } });
      return res.json(cart);
   } catch (e) {
      next(e);
   }
}

const updateCart = async (req, res, next) => {
   try {
      const { id, quantity } = req.query;
      const cart = await cartProduct.findOne({ where: { productId: id } });
      cart.set({ quantity });
      const updateProduct = await cart.save();
      return res.json(updateProduct);
   } catch (e) {
      next(e);
   }
}

export default { getCart, addToCart, deleteFromCart, updateCart };