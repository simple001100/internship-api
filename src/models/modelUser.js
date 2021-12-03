import { sequelize } from "../../db.js";
import DataTypes from "sequelize";

const User = sequelize.define("user", {
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

 export default User;