import Product from "../models/Product.js"

export const createproduct=async(req,res)=>{
    const newProduct=new Product(req.body);
    try{
        const prod=await newProduct.save();
        res.status(200).json(prod)
    }catch(err){
        res.status(500).json("somthing went wrong")
    }
}
export const updateproduct=async(req,res)=>{
    try{
        const findProduct=await Product.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        
        res.status(200).json(findProduct)
    }catch(err){
        res.status(500).json("somthing went wrong")
    }
}
export const deleteproduct=async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        
        res.status(200).json("product has been deleted!")
    }catch(err){
        res.status(500).json("somthing went wrong")
    }
}
export const getproduct=async(req,res)=>{
    try{
        const singleProd=await Product.findById(req.params.id);
        res.status(200).json(singleProd)
    }catch(err){
        res.status(500).json("somthing went wrong")
    }
}
export const getproductbycat=async(req,res)=>{
    const cat=req.query.category||"all"
    try{
        let categoryProd
        if(cat==="all"){
            categoryProd=await Product.find({});
        }else{

            categoryProd=await Product.find({category:cat});
        }
        res.status(200).json(categoryProd)
    }catch(err){
        res.status(500).json("somthing went wrong")
    }
}
export const getAllproduct = async (req, res) => {
    try {
      let categoryProd = await Product.find({});
      res.status(200).json(categoryProd);
    } catch (err) {
      res.status(500).json("somthing went wrong");
    }
  };