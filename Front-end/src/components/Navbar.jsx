import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaAmazon,
  FaCaretDown,
  FaCartPlus,
  FaHamburger,
  FaLocationArrow,
  FaSearch,
} from "react-icons/fa";
import assets from "../assets/data";
const Navbar = () => {
  const [focuse, setFocuse] = useState(false);
  return (
    <div className=" text-white">
      <div className="w-full gap-2 bg-[#131921]  py-2 px-6 flex justify-between">
        <FaAmazon className="w-10 h-auto" />
        <div className="flex gap-2 items-center p-2 cursor-pointer border border-hidden  hover:border-solid ">
          <FaLocationArrow />
          <p className="flex flex-col text-[14px] text-gray-400  ">
            Deliver to
            <span className="font-bold capitalize text-[16px] text-white">
              Ethiopia
            </span>
          </p>
        </div>
        <div className=" flex items-center basis-[900px]">
          <div className="">
            <select
              content="true"
              onFocus={() => setFocuse(true)}
              onBlur={() => setFocuse(false)}
              className={`text-black pl-3 cursor-pointer  rounded outline-0  rounded-r-none  w-[60px] h-[44px]  ${
                focuse ? "border-4 border-yellow-600 border-r-0" : ""
              }  rounded-l  capitalize text-[18px] bg-white `}
            >
              {assets.DropDowns.map((item, i) => (
                <option key={i} value={item.name}>
                  {item.id}
                </option>
              ))}
            </select>
          </div>
          <input
            type="search"
            className={`w-full h-[44px]  px-3   self-center  ${
              focuse ? "border-4  border-yellow-600 outline-0 border-x-0" : ""
            }  placeholder:text-gray-600 text-black    placeholder:capitalize   placeholder:text-[18px]  bg-[#FFF]  `}
            onFocus={() => setFocuse(true)}
            onBlur={() => setFocuse(false)}
            placeholder="search amazon"
          />
          <button
            className={` rounded-r border w-15 h-[44px] justify-center  self-auto items-center flex bg-yellow-400 hover:bg-yellow-500 border-yellow-400 cursor-pointer  ${
              focuse ? "border-4 border-yellow-600 border-l-0" : ""
            }`}
          >
            <FaSearch className="w-9 h-full   text-gray-600 p-2  " />
          </button>
        </div>
        <div className="flex cursor-pointer p-2 border border-hidden justify-center items-center   hover:border-solid">
          <img className="w-7 " src={assets.img6} alt="logo" />
          <span className=" text-[18px] pl-1 font-bold">En</span>
          <FaCaretDown className="self-end  text-gray-300" />
        </div>
        <div className=" capitalize p-2 border border-hidden self-center  w-[144px] hover:border-solid">
          <p className="text-[11px] flex gap-0 flex-col">
            Hello ,sign in
            <span className="font-bold text-[13px] capitalize">
              account & lists
            </span>
          </p>
        </div>
        <div className="capitalize p-2 border border-hidden  self-center w-[144px]  hover:border-solid cursor-pointer">
          <p className="text-[11px] flex flex-col">
            returns
            <span className="font-bold text-[14px] capitalize"> & orders</span>
          </p>
        </div>
        <Link className=" relative  border border-hidden h-auto items-center self-center justify-center py-3 px-4 inline-block text-center  hover:border-solid cursor-pointer ">
          <span className=" absolute -top-1 text-amber-400  ">0</span>
          <FaCartPlus className="text-3xl" />
        </Link>
      </div>
      <div className="bg-[#232F3E] capitalize  font-semibold text-[14px] flex items-center gap-5 p-2">
        <Link className=" flex items-center gap-1">
          <span>
            <FaHamburger className="text-2xl" />
          </span>
          All
        </Link>
        <Link>Today deals</Link>
        <Link>regitry</Link>
        <Link>prime video</Link>
        <Link>gift cards</Link>
        <Link>customer services</Link>
        <Link>sell</Link>
      </div>
    </div>
  );
};

export default Navbar;
