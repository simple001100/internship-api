import { sequelize } from "../../db.js";
import DataTypes from "sequelize";

const Token = sequelize.define("tokens", {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
   },
   refreshToken: {
      type: DataTypes.STRING,
   },
   createdAt: { type: DataTypes.DATE },
   updatedAt: { type: DataTypes.DATE },
});

export default Token;