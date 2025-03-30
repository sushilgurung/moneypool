import { User } from "../entities/user";

export interface UserRepository {
  findByID(id: bigint): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  save(user: User): Promise<void>;
  delete(email: string): Promise<void>;

}