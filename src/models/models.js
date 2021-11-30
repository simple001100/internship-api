import { sequelize } from "../../db.js";
import DataTypes from "sequelize";

export const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  login: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  first_name: { type: DataTypes.STRING },
  last_name: { type: DataTypes.STRING },
  avatar: { type: DataTypes.BLOB },
});

export const CartProduct = sequelize.define("cart_product", {});

export const Product = sequelize.define("product", {
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
  short_description: { type: DataTypes.STRING },
  processor: { type: DataTypes.STRING },
  video_card: { type: DataTypes.STRING },
  os: { type: DataTypes.STRING },
  memory_type: { type: DataTypes.STRING },
  memory: { type: DataTypes.INTEGER },
  ram: { type: DataTypes.INTEGER },
  color: { type: DataTypes.STRING },
});

export const ProductPhoto = sequelize.define("product_photo", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  photo: { type: DataTypes.BLOB },
  product_id: { type: DataTypes.INTEGER },
});

User.belongsToMany(Product, { through: CartProduct });
Product.belongsToMany(User, { through: CartProduct });

Product.hasMany(ProductPhoto);
ProductPhoto.belongsTo(Product);