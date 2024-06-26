"use client";
import React, { useContext } from "react";
import { ShopContext } from "@/app/context/ShopContext";
import Product from "@/app/components/singleProduct/Product";
export default function Page({ params }) {
  const { all_product } = useContext(ShopContext);

  const product = all_product.find((item) => item._id === params.slug);
  return (
    <div className="">
      <Product product={product} />
    </div>
  );
}