// app.js

import express from "express";
import router from "./src/routes/index.js";
import LogMiddleware from "./src/middlewares/log.middleware.js";
import ErrorHandlingMiddlewqare from "./src/middlewares/error-handling.middleware.js";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT;

app.use(LogMiddleware);
app.use(express.json());
app.use("/api", router);
app.use(ErrorHandlingMiddlewqare);

app.listen(PORT, () => {
  console.log(PORT, "포트로 서버가 열렸어요!");
});
