import express from "express";
import PostsRouter from "./posts.router.js";
import UsersRouter from "./users.router.js";

const router = express.Router();

//post
router.use("/posts/", PostsRouter);

//user
router.use("/users", UsersRouter);

export default router;
