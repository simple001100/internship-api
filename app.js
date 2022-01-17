import express from "express";
import router from "./src/routes/index.js";
import { sequelize } from "./db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./src/middleware/ErrorHandlingMiddleware.js";

const PORT = 8000;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}));
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
