"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter.get("/list", userController_1.default.getAllUsers);
userRouter.post("/register", userController_1.default.registerUser);
userRouter.post("/login", userController_1.default.loginUser);
