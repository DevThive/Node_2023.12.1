import express from "express";
import { PostsController } from "../controllers/posts.controller.js";
// import { AuthMiddleware } from "../middlewares/auth-middleware.js";

const router = express.Router();
const postsController = new PostsController();

router.post("/", postsController.createPost);

router.get("/", postsController.getPosts);

router.get("/:postId", postsController.getOne);

router.delete("/:postId", postsController.deletePost);

router.put("/:postId", postsController.putPost);

export default router;
