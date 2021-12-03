import express from "express";
import router from "./src/routes/index.js";
import { sequelize } from "./db.js";
import cors from "cors";
import { errorHandler } from "./src/middleware/ErrorHandlingMiddleware.js";

const PORT = 3000;

const app = express();
app.use(cors());
app.use("/api", router);

app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    app.listen(PORT, () => console.log("SERVER START ON PORT " + PORT));
  } catch (e) {
    console.log(e);
  }
};

start();
