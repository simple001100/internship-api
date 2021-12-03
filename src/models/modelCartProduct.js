import { sequelize } from "../../db.js";
import DataTypes from "sequelize";

const CartProduct = sequelize.define("cart_products", {
   createdAt: { type: DataTypes.DATE },
   updatedAt: { type: DataTypes.DATE },
});

export default CartProduct;