import { Router } from "express";
import users from "./users";

export default (app: Router) => {
  users(app);
};
