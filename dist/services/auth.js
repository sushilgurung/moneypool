"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = process.env.JWT_SECRET || "thisisasecretkey";
class AuthService {
    static generateToken(payload) {
        return jsonwebtoken_1.default.sign(payload, secretKey);
    }
    static verifyToken(token) {
        return jsonwebtoken_1.default.verify(token, secretKey);
    }
}
exports.AuthService = AuthService;
