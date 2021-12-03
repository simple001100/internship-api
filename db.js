import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const name = process.env.NAME;
const user = process.env.USER;
const pass = process.env.PASS;
const host = process.env.HOST;
const dialect = process.env.DIALECT;
const port = process.env.PORT;

export const sequelize = new Sequelize(
  name,
  user,
  pass,
  {
    dialect,
    host,
    port,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
  }
);
