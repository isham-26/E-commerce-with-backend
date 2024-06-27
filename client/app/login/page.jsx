"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { url } from "@/utility";
import load from "@/public/loading.gif"
import { useRouter } from "next/navigation";
import { ShopContext } from "../context/ShopContext";
export default function page() {
  const {setuser}=useContext(ShopContext)
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState(false);
  const [loading,setLoading]=useState(false);
  const router = useRouter();
  const handleClick=async(e)=>{
    e.preventDefault();
    setLoading(false)
      const user={
         username:username,
         password:password
      }
      try{
         const res=await axios.post(`${url}/api/auth/login`,user)
         
         setLoading(false)
         if(res){
          setuser(res.data)
          router.push("/")   
         }
      }catch(err){
        setLoading(false)
        setError(true);
        
      }
  }
  return (
    <div className="flex md:items-center justify-center h-[63vh] md:h-[90vh] bg-gradient-to-b from-blue-300 to-white">
      <div className="md:w-[25%] w-full mt-20 md:mt-0">
        <div className="p-3">
          <h3 className="text-2xl font-bold text-center">
            Login to your account
          </h3>
          <form onSubmit={handleClick}>
            <div className="mt-4">
              <div>
                <label className="block">
                  username
                </label>
                <input
                  type="text"
                  placeholder="username"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  id="email"
                  onChange={(e)=>setUsername(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label className="block">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  id="password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-baseline justify-between">
                <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" type="submit">
                {loading?<Image alt="gif" src={load} className="h-[1rem] w-[1rem]"/>: 'login'}
                </button>
                <div className="flex gap-4 items-center">
                 <p className="text-[12px]">create new account</p>
                <Link href="/sign-up" className="text-sm text-blue-600 hover:underline">
                   sign up
                </Link>
                </div>
              </div>
              {error && <span className="text-red-500 mt-3">user not found</span>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
