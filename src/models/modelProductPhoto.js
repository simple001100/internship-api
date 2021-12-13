import { sequelize } from "../../db.js";
import DataTypes from "sequelize";

const ProductPhoto = sequelize.define("product_photos", {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
   },
   photo: { type: DataTypes.BLOB },
   productId: { type: DataTypes.INTEGER, field: 'product_id' },
   createdAt: { type: DataTypes.DATE },
   updatedAt: { type: DataTypes.DATE },
});

export default ProductPhoto;