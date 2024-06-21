"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { ShopContext } from "../context/ShopContext";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
const CartPage = () => {
  const { getTotalCartAmount, itemCarts, all_product ,lencart,increse,decrease,new_arr,removeToCart,totalCartItems} =
    useContext(ShopContext);
  
  return (
    <div className="flex justify-center mx-auto md:mt-7 md:px-4">
      <div className="flex flex-col lg:flex-row shadow-md md:my-7 md:w-[80%]">
        <div className="w-full lg:w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-3 md:pb-8">
            <h1 className="font-semibold md:text-2xl text-sm">Shopping Cart</h1>
            <h2 className="font-semibold md:text-2xl text-sm">Cart Add Items- <span className="text-blue-500">{lencart()}</span></h2>
          </div>
          <div className="flex justify-between mt-5 md:mt-10 md:mb-5 text-[12px] md:text-xl">
            <h3 className="font-semibold text-gray-600 uppercase w-1/5 md:w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-gray-600 uppercase w-1/5 text-center">
              Quantity
            </h3>
            <h3 className="font-semibold text-gray-600 uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 className="font-semibold text-gray-600 uppercase w-1/5 text-center">
              Total
            </h3>
          </div>
          {new_arr.map((item) => {
            if (itemCarts[item.id]===true) {
              return (
                <div
                  key={item.id}
                  className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                >
                  <div className="flex flex-col w-full lg:w-2/5 gap-2">
                  
                    <Link className="md:w-20 w-14" href={`/product/${item.id}`}>
                      <Image
                        className="md:h-24 h-14 object-cover"
                        src={item.image}
                        alt="product"
                      />
                    </Link>
                    <div className="flex flex-col justify-between gap-1 flex-grow md:text-[18px] text-[8px]">
                      <Link className="font-bold line-clamp-2" href={`/product/${item.id}`}>{item.name}</Link>
                      <span href="/" className="font-semibol text-indigo-600 flex gap-2 items-center cursor-pointer hover:text-red-500 md:w-[6rem]" onClick={()=>removeToCart(item.id)}>
                      <MdOutlineRemoveShoppingCart />
                        Remove
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center w-full lg:w-1/5 text-[12px] md:text-[20px]">
                    <button
                      className="fill-current text-gray-600 w-3 h-3 mx-2"
                      onClick={() => decrease(item.id)}
                    >
                      -
                    </button>
                    <span className="text-center md:w-8 w-5 border">
                      {item.quantity || 1}
                    </span>
                    <button
                      className="fill-current text-gray-600 w-3 h-3 mx-2"
                      onClick={() => increse(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <span className="text-center w-full lg:w-1/5 font-semibold text-[12px] md:text-[20px] text-gray-500">
                    Rs.{item.new_price}
                  </span>
                  <span className="text-center w-full lg:w-1/5 font-semibold text-[12px] md:text-[20px] text-gray-500">
                    Rs.{item.quantity===undefined?item.new_price:item.new_price*item.quantity}
                  </span>
                </div>
              );
            }
          })}
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-indigo-600 md:text-xl mt-10 hover:text-indigo-800 w-[14rem]"
          >
            <GiShoppingCart className="md:text-2xl text-xl" />
            Continue Shopping
          </Link>
        </div>
        <div id="summary" className="w-full lg:w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5 text-gray-500">
            <span className="font-semibold md:text-[19px] uppercase text-sm">
              Total Items
            </span>
            <span className="font-semibold md:text-[19px] text-sm">
              {totalCartItems()}
            </span>
          </div>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 md:text-[19px] uppercase text-sm text-gray-500">
              <span>Total cost</span>
              <span className="">Rs.{getTotalCartAmount()}</span>
            </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
