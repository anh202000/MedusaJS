import { Entity, OneToMany } from "typeorm";
import { User } from "./user";
import { Store as MedusaStore } from "@medusajs/medusa";

@Entity()
export class Store extends MedusaStore {
  @OneToMany(() => User, (user) => user?.store)
  members?: User[];
}
