import express from "express"
import { createproduct } from "../controllers/product.js";
const route=express.Router();

route.post("/",createproduct);
//route.post("/login",login);

export default route;