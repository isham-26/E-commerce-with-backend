"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import baner from "@/public/benar.jpg";
import { ShopContext } from "@/app/context/ShopContext";
import Ccard from "../components/category-card/Ccard";
import Card from "../components/card_item/Card";
const Page = () => {
  const { all_product } = useContext(ShopContext);
  const [values, setValue] = useState("All products");
  const size=all_product.length;
  return (
    <div className="flex justify-center items-center">
      <div className="md:w-[80%] flex flex-col md:gap-10 gap-5">
        <div className="flex-col flex gap-6 md:mt-5">
          <Image
            src={baner}
            alt="img"
            className="w-full md:h-[25rem] object-cover md:rounded-xl"
          />
          <div className="flex justify-between items-center px-4">
            <span className="md:text-xl font-semibold ">12 out of {size} Product</span>
            <select
              name=""
              id=""
              className="border-2 p-2 rounded-full focus:outline-none"
              onChange={(e) => setValue(e.target.value)}
            >
              <option value="All products">All products</option>
              <option value="kid">kids</option>
              <option value="women">women</option>
              <option value="men">men</option>
            </select>
          </div>
        </div>
        <Ccard cat={values} items={all_product}/>
      </div>
    </div>
  );
};

export default Page;
