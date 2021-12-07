import { sequelize } from "../../db.js";
import DataTypes from "sequelize";

const User = sequelize.define("users", {
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
  createdAt: { type: DataTypes.DATE },
  updatedAt: { type: DataTypes.DATE },
});

export default User;