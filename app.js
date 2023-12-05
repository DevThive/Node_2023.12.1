// app.js

import express from "express";
import router from "./src/routes/index.js";
import LogMiddleware from "./src/middlewares/log.middleware.js";
import ErrorHandlingMiddlewqare from "./src/middlewares/error-handling.middleware.js";

const app = express();
const PORT = 3017;

app.use(LogMiddleware);
app.use(express.json());
app.use("/api", router);
app.use(ErrorHandlingMiddlewqare);

app.listen(PORT, () => {
  console.log(PORT, "포트로 서버가 열렸어요!");
});
