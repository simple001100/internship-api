import express from "express";
import router from "./src/routes/index.js";

const PORT = 3000;

const app = express();
app.use("/api", router);

app.listen(PORT, () => console.log("SERVER START ON PORT " + PORT));
