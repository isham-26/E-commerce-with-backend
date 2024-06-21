import React from "react";
import { LuMoveRight } from "react-icons/lu";
import offer from "../Assets/exclusive_image.png"
import Image from "next/image";
Image
const Offers = () => {
  return (
    <div className=" flex justify-center items-center md:mt-10 mt-3">
      <div className="md:w-[80%] w-[94%] flex p-3 bg-gradient-to-b from-pink-200 to-white border-b shadow-md">
        <div className="flex-[1] flex md:gap-8 gap-4 flex-col md:px-10 justify-center">
          <div className="flex flex-col ">
            <p className="md:text-8xl text-xl">Exclusive</p>
            <p className="md:text-8xl text-xl">Offers For You</p>
            
          </div>
          <p className="md:text-2xl text-[8px] uppercase">Only on best seller product</p>
          <button className="flex items-center bg-blue-500 text-white  gap-3 md:w-[13rem] md:p-4 justify-center rounded-full py-2 text-[10px] md:text-sm w-[6rem] ">
            Cheak Now
            <LuMoveRight className=""/>

          </button>
        </div>
        <div className="flex-[1] flex justify-center items-center">
          <Image src={offer} alt="img" className="md:w-[25rem] md:h-[40rem] object-cover w-[9rem]"/>
        </div>
      </div>
    </div>
  );
};

export default Offers;
