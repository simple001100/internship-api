import { sequelize } from "../../db.js";
import DataTypes from "sequelize";

const Product = sequelize.define("products", {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
   },
   type: { type: DataTypes.STRING },
   manufacturer: { type: DataTypes.STRING },
   name: { type: DataTypes.STRING },
   serial_number: { type: DataTypes.STRING },
   cost: { type: DataTypes.INTEGER },
   installment: { type: DataTypes.INTEGER },
   rating: { type: DataTypes.INTEGER },
   description: { type: DataTypes.STRING },
   shortDescription: { type: DataTypes.STRING, field: 'short_description' },
   processor: { type: DataTypes.STRING },
   video_card: { type: DataTypes.STRING },
   os: { type: DataTypes.STRING },
   memory_type: { type: DataTypes.STRING },
   memory: { type: DataTypes.INTEGER },
   ram: { type: DataTypes.INTEGER },
   color: { type: DataTypes.STRING },
   photo: { type: DataTypes.BLOB },
   createdAt: { type: DataTypes.DATE },
   updatedAt: { type: DataTypes.DATE },
});

export default Product;