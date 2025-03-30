import { Request, Response } from "express";
import { UserOnBoardingService } from "../../application/services/user-onboarding";

export class UserController{
  constructor(private onboardingServices: UserOnBoardingService){}

  async createUser(req: Request, res: Response){
    try{
      const { fName, mName, lName, email, password} = req.body;
      const user = await this.onboardingServices.registerUser({
        fName: fName,
        mName: mName, 
        lName: lName, 
        email: email, 
        password: password 
      });

      res.status(201).json({
        name: user.fName + user.lName,
        email: user.email, 
        createdAt: user.createdAt,
      });
    }catch(err){
      res.status(400).json({message: (err as Error).message});
    }
  }
}


