import express from "express";
import router from "./src/routes/index.js";
import { sequelize } from "./db.js";
import {
  User,
  CartProduct,
  Product,
  ProductPhoto,
} from "./src/models/models.js";
import cors from "cors";

const PORT = 3000;

const app = express();
app.use(cors());
app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).json({ message: "working!!!" });
});

app.listen(PORT, () => console.log("SERVER START ON PORT " + PORT));

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
