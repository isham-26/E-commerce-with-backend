import Image from "next/image";
import React from "react";
import hero from "../Assets/hero_image.png"
import { LuMoveRight } from "react-icons/lu";
const Homeone = () => {
  return (
    <div className="md:h-[90vh] flex justify-center items-center  bg-gradient-to-b from-blue-200 to-white border-b shadow-md">
      <div className="md:w-[80%] w-full flex p-3">
        <div className="flex-[1] flex md:gap-8 gap-4 flex-col justify-center">
          <div className="flex flex-col ">
          <span className="uppercase md:font-semibold text-[10px] md:text-sm">new arrivals only</span>
            <p className="md:text-8xl text-2xl">new</p>
            <p className="md:text-8xl text-2xl">collection</p>
            <p className="md:text-8xl text-2xl">for everyone</p>
          </div>
          <button className="flex items-center bg-blue-500 text-white  gap-3 md:w-[13rem] md:p-4 justify-center rounded-full py-2 text-[10px] md:text-sm w-[8rem] ">
            Latest Collection
            <LuMoveRight className=""/>

          </button>
        </div>
        <div className="flex-[1] flex justify-end items-center">
          <Image src={hero} alt="img" className="md:w-[30rem] md:h-[40rem] object-cover w-[9rem]"/>
        </div>
      </div>
    </div>
  );
};

export default Homeone;
