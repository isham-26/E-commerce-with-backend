import mongoose from "mongoose";

const ProductSchema = new  mongoose.Schema({
      image:{
         type:String,
         default:"",
      },
      name:{
         type:String,
         required:true,
      },
      desc:{
         type:String,
         default:"",
      },
      new_price:{
         type:Number,
         required:true,
      },
      old_price:{
          type:Number,
          required:true,
      },
      category:{
          type:String,
          required:true,
       }
},{timestamps:true})

export default mongoose.model("product",ProductSchema);