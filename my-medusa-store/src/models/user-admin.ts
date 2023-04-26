import { Entity, Column, PrimaryGeneratedColumn, Index } from "typeorm";
import { User as MedusaUser } from "@medusajs/medusa";

@Entity()
export default class UserAdmin extends MedusaUser {
  @Column()
  password: string;

  @Column()
  UserAdmin: string;

  @Column({ name: "store_id" })
  storeId: string;
}
