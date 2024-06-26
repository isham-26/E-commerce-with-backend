import express from "express"
import { updateproduct,deleteproduct,getproduct,getproductbycat,getAllproduct} from "../controllers/product.js";
const route=express.Router();

route.put("/:id",updateproduct);
route.get("/",getproductbycat);
route.get("/",getAllproduct);
route.get("/:id",getproduct);
route.delete("/:id",deleteproduct);

export default route;