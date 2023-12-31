import express from "express";
import { UsersController } from "../controllers/users.controller.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";

const router = express.Router();
const usersController = new UsersController();

// 회원가입
router.post("/", usersController.Signup);
router.post("/auth", usersController.Signin);
router.get("/auth/me", authMiddleware, usersController.checkToken);

export default router;
