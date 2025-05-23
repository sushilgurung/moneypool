import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../../domain/repositories/user-repository";
import { User } from "../../domain/entities/user";

const prisma =  new PrismaClient();

export  class PrismaUserRepository implements UserRepository{
  async save(user: User): Promise<void> {
    await prisma.user.upsert({
      update: {
        fName: user.fName,
        lName: user.lName,
        email: user.email,
        password_hash: user.passWordHash,
        mName: user.mName || "",
        created_at: user.createdAt,
        verified: false,
        last_active: new Date(),
      },
      create: {
        fName: user.fName,
        lName: user.lName,
        email: user.email,
        password_hash: user.passWordHash,
        mName: user.mName || "",
        created_at: user.createdAt,
        verified: false,
        last_active: new Date(),
      },
      where: {
        user_id: 0, // This will be auto-generated by Prisma
      },
    });
  }

  async findByID(id: bigint): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { user_id: Number(id) }
    });
    return user ? new User({
      fName: user.fName,
      lName: user.lName,
      email: user.email,
      passWordHash: user.password_hash,
      mName: user.mName,
      createdAt: user.created_at,
    }) : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: { email }
    });
    return user ? new User({
      fName: user.fName,
      lName: user.lName,
      email: user.email,
      passWordHash: user.password_hash,
      mName: user.mName,
      createdAt: user.created_at,
    }) : null;
  }

  async delete(email: string): Promise<void> {
    await prisma.user.deleteMany({
      where: { email }
    });
  }
}