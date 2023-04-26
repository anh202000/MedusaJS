import { dataSource } from "@medusajs/medusa/dist/loaders/database";
import UserAdmin from "../models/user-admin";

export const UserRepository: any = dataSource.getRepository(UserAdmin).extend({
  findByEmail(email: string) {
    return this.findOne({ email } as any);
  },

  findById(id: number) {
    return this.findOne({ id } as any);
  },

  async createAndSave(email: string, password: string, storeId: string) {
    const user = new UserAdmin();
    user.email = email;
    user.password = password;
    user.UserAdmin = "admin";
    user.storeId = storeId;
    return this.save(user);
  },
});
