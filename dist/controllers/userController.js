"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../services/auth");
let users = [];
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400).json({ message: "All fields are required" });
        return;
    }
    try {
        const exisitingUser = users.find((user) => user.email == email);
        if (exisitingUser) {
            res.status(400).json({ message: "User already exists" });
            return;
        }
        const newUser = {
            id: users.length + 1,
            name,
            email,
            password
        };
        users.push(newUser);
        console.log("User list:", users);
        res.status(201).json({ message: "User registered successfully", user: newUser });
    }
    catch (error) {
        console.log("Error registering user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: "All fields are required" });
        return;
    }
    const user = users.find((user) => user.email == email && user.password == password);
    if (!user) {
        res.status(401).json({ message: "Invalid credentials" });
        return;
    }
    const token = auth_1.AuthService.generateToken({
        sub: user.id.toString(),
        name: user.name,
        role: "user",
        iat: new Date().getTime(),
        exp: new Date().getTime() + 1000 * 60 * 60,
        aud: "your-frontend",
        iss: "your-app"
    });
    console.log("Token:", token);
    res.status(200).json({ message: "Login successful", user, token });
});
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("\nCurrent User List:");
    console.table(users); // console.table for better formatting
    res.status(200).json(users);
});
const userController = {
    registerUser,
    loginUser,
    getAllUsers
};
exports.default = userController;
