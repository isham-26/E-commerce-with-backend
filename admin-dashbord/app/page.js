"use client"
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { url } from "@/utility";
export default function Home() {
  const [name,setName]=useState();
  const [desc,setDesc]=useState();
  const [new_price,setNew_price]=useState();
  const [old_price,setOld_price]=useState();
  const [category,setCategory]=useState();
  const [image,setImage]=useState();

  const uploadImage = async (e) => {
    const files = e.target.files;
    console.log(files);
    const data = new FormData();
    if (files) {
      data.append("file", files[0]);
      data.append("upload_preset", "a3tvpua0");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/disqmcsrf/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const file = await res.json();
      setImage(file.secure_url);
      
    }
  };
  const handleSubmit=async (e)=>{
    e.preventDefault();
     const newProduct={
       name:name,
       desc:desc,
       new_price:new_price,
       old_price:old_price,
       category:category,
       image:image
     }
     try{
       await axios.post(`${url}/api/upload`,newProduct)
       e.target.reset();
       
     }catch(err){}
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Add Product</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              onChange={(e)=>setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              required
              onChange={(e)=>setDesc(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              name="category"
              id="category"
              required
              onChange={(e)=>setCategory(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="old_price" className="block text-sm font-medium text-gray-700">
              Old Price
            </label>
            <input
              type="number"
              name="old_price"
              id="old_price"
              required
              onChange={(e)=>setOld_price(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="new_price" className="block text-sm font-medium text-gray-700">
              New Price
            </label>
            <input
              type="number"
              name="new_price"
              id="new_price"
              required
              onChange={(e)=>setNew_price(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <input
              type="file"
              name="image"
              id="image"
              required
              onChange={uploadImage}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
