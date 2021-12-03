import { sequelize } from "../../db.js";
import DataTypes from "sequelize";

const ProductPhoto = sequelize.define("product_photos", {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
   },
   photo: { type: DataTypes.BLOB },
   product_id: { type: DataTypes.INTEGER },
   createdAt: { type: DataTypes.DATE },
   updatedAt: { type: DataTypes.DATE },
});

export default ProductPhoto;