import { User } from "../../domain/entities/user";
import { CreateUser } from "../../domain/usecases/create-user";

interface RegisterUserDTO{
  fName: string;
  mName?: string;
  lName: string
  email: string;
  password: string;
}

export class UserOnBoardingService{
  constructor(
    private createUser: CreateUser
  ){}

  async registerUser(data: RegisterUserDTO): Promise<User>{
    const user = await this.createUser.execute(data)

    return user;
  }
}