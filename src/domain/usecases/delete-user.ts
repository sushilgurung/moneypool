import { UserRepository } from "../repositories/user-repository";

interface DeleteUserDTO{
  email: string;  
  password: string;
}

export class DeleteUser{
  constructor(private userRepository: UserRepository){}

  async execute(data: DeleteUserDTO): Promise<String>{
    const existing = await this.userRepository.findByEmail(data.email);
    if (existing){
      this.userRepository.delete(data.email)
      return ("Success")
    }
    
    return("User does not exists!!")
  }
}