import { UserRepository } from "../repositories/user-repository";
import { User } from "../entities/user";
//import { hashPassword } from '@/shared/utils/hash';

interface CreateUserDTO {
  fName: string;
  mName?: string;
  lName: string
  email: string;
  password: string;
}

export class CreateUser {
  constructor(private userRepository: UserRepository){}
  
  async execute(data: CreateUserDTO): Promise<User>{
    const existing = await this.userRepository.findByEmail(data.email);
    if (existing){
      throw new Error("User with this email already exists");}

    //const hashedPassword = await hashPassword(data.password)

    const user = new User({
      fName: data.fName,
      mName: data.mName,
      lName: data.lName,
      email: data.email,
      passWordHash: data.password,
      createdAt: new Date()
    })
    
    await this.userRepository.save(user);
    return user;
  }

}