import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "d7bk9nn2da195",
  "hddcztlhlhoxuw",
  "4b8ce5033cf19aa8cb39e070220f75441b2393841e8639e9059e51c45811c4c8",
  {
    dialect: "postgres",
    host: "ec2-34-250-19-18.eu-west-1.compute.amazonaws.com",
    port: 5432,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
     },
  }
);
