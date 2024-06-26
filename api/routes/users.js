import express from "express"
import { updateUser,deleteUser,getUser } from "../controllers/user.js";
const routes=express.Router();

routes.get("/:id",getUser);
routes.put("/:id",updateUser);
routes.delete("/:id",deleteUser);

export default routes;


