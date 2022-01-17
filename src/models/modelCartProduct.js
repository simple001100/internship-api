import { sequelize } from "../../db.js";
import DataTypes from "sequelize";

const CartProduct = sequelize.define("cart_products", {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
   },
   quantity: { type: DataTypes.INTEGER },
   createdAt: { type: DataTypes.DATE },
   updatedAt: { type: DataTypes.DATE },
   cartId: {
      type: DataTypes.INTEGER,
      references: {
         model: "users",
         key: "id"
      },
      field: 'cart_id'
   },
   productId: {
      type: DataTypes.INTEGER,
      references: {
         model: "products",
         key: "id"
      },
      field: 'product_id'
   },
});

export default CartProduct;