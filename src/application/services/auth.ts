import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET || "thisisasecretkey";

export interface TokenPayload{
    sub: string;
    name: string;
    role: string;
    iat: number;
    exp: number;
    aud: string;
    iss: string;    
}

export class AuthService {
    static generateToken(payload: TokenPayload): string{
        return jwt.sign(payload, secretKey);
    }

    static verifyToken(token: string): any{
        return jwt.verify(token, secretKey);
    }
}






