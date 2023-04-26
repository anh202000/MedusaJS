import { UserRepository } from "../repositories/user-admin";
import { getCustomRepository } from "typeorm";

export default class UserService {
  async createAdmin(email: string, password: string, storeId: string) {
    const userRepository: any = getCustomRepository(UserRepository);
    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) throw new Error("Email is already registered");

    const user = await (UserRepository as any).createAndSave(
      email,
      password,
      storeId
    );
    return user;
  }
}
