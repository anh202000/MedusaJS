import { Router } from "express";
import UserService from "services/user-admin";

const route = Router();

export default (app: Router) => {
  app.use("/users", route);

  route.post("/", async (req, res) => {
    const { email, password, store_id } = req.body;
    const service = new UserService();
    const user = await service.createAdmin(email, password, store_id);
    res.json(user);
  });
};
