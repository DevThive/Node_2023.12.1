import express from "express";
import { UsersController } from "../controllers/users.controller.js";

const router = express.Router();
const usersController = new UsersController();

// 회원가입
// router.post("/",)

export default router;
