import User from "../models/User.js";
import bcrypt from "bcrypt" 

const register= async(req,res)=>{
    try{
       
        const salt= await bcrypt.genSalt(10);
        const hashpass= await bcrypt.hash(req.body.password,salt);
        const user = new User({...req.body,password:hashpass});
        const newUser = await user.save();
        const {password, ...other}=newUser._doc;
        res.status(200).json({...other});
    }catch(err){
        res.status(500).json("user not resister correctly");
    }
}
const login=async(req,res)=>{
    try{
        const findUser= await User.findOne({username:req.body.username});
        if(!findUser){
            res.status(500).json("user not find"); 
        }
        const validation=await bcrypt.compare(req.body.password,findUser.password);
        if(!validation){
            res.status(401).json("wrong password or user");  
        }
        const {username,email, ...other}=findUser;
        res.status(200).json({username,email});
    }catch(err){
        res.status(500).json("user not resister correctly");
    }
}

export {login, register}
