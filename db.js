import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const name = process.env.DB_NAME;
const user = process.env.DB_USERNAME;
const pass = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const dialect = process.env.DB_DIALECT;
const port = process.env.DB_PORT;

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
