"use client";
import React from "react";
import Link from "next/link";
import { url } from "@/utility";
import Image from "next/image";
import load from "@/public/loading.gif"
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function page() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [username,setUsername]=useState("");
  const [error,setError]=useState(false);
  const [loading,setLoading]=useState(false);
  const router = useRouter();
  const handleclick = async(e)=>{
    e.preventDefault();
    setLoading(true)
    // console.log({ username, email, password });
    const user={
       username:username,
       email:email,
       password:password
    }
    try{
       const res=await axios.post(`${url}/api/auth/register`,user)
       setLoading(false)
       router.push("/login")   
    }catch(err){
      setError(true);
      setLoading(false)
    }
}
  return (
    <div className="flex md:items-center justify-center md:h-[90vh] h-[63vh] bg-gradient-to-b from-pink-200 to-white">
      <div className="md:w-[25%] w-full p-3 mt-16 md:mt-0">
        <div className="">
          <h3 className="text-2xl font-bold text-center">
            Create new your account
          </h3>
          <form onSubmit={handleclick}>
            <div className="mt-4">
              <div className="mb-4">
              <label className="block">
                  username
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  id="email"
                  onChange={(e)=>setUsername(e.target.value)}
                />
              </div>
              <div>
                <label className="block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  id="email"
                  onChange={(e)=>setEmail(e.target.value)}
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
                {loading?<Image alt="gif" src={load} className="h-[1rem] w-[1rem]"/>: 'continue'}
                 
                </button>
                <div className="flex gap-4 items-center">
                 <p className="text-[12px]">Already have a account</p>
                <Link href="/login" className="text-sm text-blue-600 hover:underline">
                   login
                </Link>
                </div>
              </div>
              {error&& <span className=" text-red-600">something went wrong</span>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}