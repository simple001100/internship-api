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
  firstName: { type: DataTypes.STRING, field: 'first_name' },
  lastName: { type: DataTypes.STRING, field: 'last_name' },
  avatar: { type: DataTypes.BLOB },
  createdAt: { type: DataTypes.DATE },
  updatedAt: { type: DataTypes.DATE },
});

export default User;