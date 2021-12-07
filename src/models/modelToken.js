import { sequelize } from "../../db.js";
import DataTypes from "sequelize";

const Token = sequelize.define("tokens", {
   user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
   },
   refresh_token: {
      type: DataTypes.STRING,
   },
   createdAt: { type: DataTypes.DATE },
   updatedAt: { type: DataTypes.DATE },
});

export default Token;