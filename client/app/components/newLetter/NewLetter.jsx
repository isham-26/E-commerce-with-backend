import React from "react";
import { PiBellRingingBold } from "react-icons/pi";
const NewLetter = () => {
  return (
    <div className=" flex justify-center items-center md:mt-10 mt-4">
      <div className="md:w-[80%] w-[94%] flex md:py-20 p-5 bg-gradient-to-b from-pink-200 to-white border-b shadow-md justify-center">
        <div className=" flex md:gap-8 gap-4 flex-col md:px-10 justify-center items-center">
          <div className="md:text-6xl text-[15px] capitalize">get exclusive offers on your email</div>
          <p className="md:text-2xl text-[8px] capitalize">
            Subscribe to our newletter stay updated
          </p>
          <div className="flex relative">
            <input type="text" placeholder="Your Email" className="md:p-4 p-[3px] rounded-full md:w-[50rem] border-2 focus:outline-none px-4" />
            <button className="flex items-center bg-black text-white md:gap-3 gap-2 md:w-[13rem] md:p-[15px] justify-center rounded-full py-[10px] text-[8px] md:text-xl w-[5rem] absolute right-0">
              Subscribe
              <PiBellRingingBold className="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLetter;
