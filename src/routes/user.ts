import { Router } from "express"
import userController from "../controllers/userController";

const userRouter = Router();

userRouter.get("/list", userController.getAllUsers);
userRouter.post("/register", userController.registerUser);
userRouter.post("/login", userController.loginUser);

export { userRouter };

