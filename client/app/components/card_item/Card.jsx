"use client"
import { ShopContext } from "@/app/context/ShopContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const Card = (props) => {
  const {addToCart} = useContext(ShopContext);
  return (
    
      <div className="flex flex-col md:gap-2 md:w-[294px] w-[169px] md:shadow-md md:hover:scale-105 ease-in duration-300 md:hover:shadow-2xl md:hover:shadow-gray-500 md:mb-0 md:h-[500px] h-[281px]">
        <Link href={`/product/${props.item.id}`}>
        <Image
          src={props.item.image}
          alt="item"
          className=" object-cover w-full "
        />
        </Link>
        <div className="flex flex-col md:gap-6 gap-3 md:p-4 p-2 border md:border-0 shadow-md md:shadow-none">
        <Link href={`/product/${props.item.id}`}>
          <div className="md:text-[17px] text-[10px] text-gray-800 line-clamp-2">
            {props.item.name}
          </div>
          </Link>
          <div className="flex md:text-[17px] text-[10px] items-center justify-between">
            <div className="flex md:gap-4 gap-2 items-center">
              <div className="text-gray-800 font-semibold">
                Rs. {props.item.new_price}
              </div>
              <div className="line-through text-gray-400 font-semibold md:text-[15px] text-[8px]">
                Rs. {props.item.old_price}
              </div>
            </div>
            <button className="md:p-2 p-1 bg-blue-500 text-white md:text-[10px] text-[7px] hover:bg-blue-600 ease-in-out duration-300 font-semibold" onClick={()=>addToCart(props.item.id)}>
              Add To cart
            </button>
          </div>
        </div>
      </div>
  );
};

export default Card;
