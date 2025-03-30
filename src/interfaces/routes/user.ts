import { Router } from "express"
import { UserController } from "../controllers/user-controller";
import { UserOnBoardingService } from "../../application/services/user-onboarding";     
import { PrismaUserRepository } from "../../infrastructure/repositories/prisma-user-repository";
import { CreateUser } from "../../domain/usecases/create-user";

const userRepository = new PrismaUserRepository();
const createUser = new CreateUser(userRepository);
const userController = new UserController(new UserOnBoardingService(createUser));

const userRouter = Router();

userRouter.post("/register", userController.createUser.bind(userController));

export { userRouter };

