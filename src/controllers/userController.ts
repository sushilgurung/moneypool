import { Request, Response, RequestHandler } from "express";
import { AuthService, TokenPayload } from "../services/auth";


let users: {id: number; name: string; email: string, password: string}[] = []

const registerUser: RequestHandler = async(req: Request, res: Response) => {
  const {name, email, password} = req.body

  if(!name || !email || !password){
    res.status(400).json({message: "All fields are required"});
    return;
  }

  try {
    const exisitingUser = users.find((user) => user.email == email);
    if(exisitingUser){
      res.status(400).json({message: "User already exists"}); 
      return;
    }

    const newUser = {
      id: users.length + 1, 
      name, 
      email, 
      password
    };

    users.push(newUser)
    console.log("User list:", users)

    res.status(201).json({message: "User registered successfully", user: newUser});
  } catch(error){
    console.log("Error registering user:", error)
    res.status(500).json({message: "Internal Server Error"});
  }
};

const loginUser: RequestHandler = async(req: Request, res: Response) => {
  const {email, password} = req.body

  if(!email || !password){
    res.status(400).json({message: "All fields are required"})
    return;
  }

  const user = users.find((user) => user.email == email && user.password == password)
  if(!user){
    res.status(401).json({message: "Invalid credentials"})
    return;
  }

  const token = AuthService.generateToken({
    sub: user.id.toString(),
    name: user.name,
    role: "user",
    iat: new Date().getTime(),
    exp: new Date().getTime() + 1000 * 60 * 60,
    aud: "your-frontend",
    iss: "your-app"
  })
  console.log("Token:", token)
  res.status(200).json({message: "Login successful", user, token})
}

const getAllUsers: RequestHandler = async(req: Request, res: Response) => {
  console.log("\nCurrent User List:");
  console.table(users); // console.table for better formatting
  res.status(200).json(users);
};

const userController = {
    registerUser,
    loginUser,
    getAllUsers
};

export default userController;
