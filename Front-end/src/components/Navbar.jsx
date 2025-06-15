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
      <div className="w-full gap-2 bg-[#131921] items-center py-2 px-6 flex justify-between">
        <FaAmazon className="w-10 h-auto" />
        <div className="flex gap-2 items-center p-2 cursor-pointer border-2 border-hidden  hover:border-solid ">
          <FaLocationArrow />
          <p className="flex flex-col text-gray-400  ">
            Deliver to
            <span className="font-bold capitalize text-[18px] text-white">
              Ethiopia
            </span>
          </p>
        </div>
        <div className=" flex basis-[800px]">
          <div className="">
            <select
              content="true"
              onFocus={() => setFocuse(true)}
              onBlur={() => setFocuse(false)}
              className={`text-black  rounded outline-0  rounded-r-none p-4  w-[8px]   ${
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
            className={`w-full pb-4 px-4   ${
              focuse ? "border-4 border-yellow-600 outline-0 border-x-0" : ""
            }  pt-[16.5px] placeholder:text-gray-600 text-black    placeholder:capitalize   placeholder:text-[18px]  bg-[#FFF]  `}
            onFocus={() => setFocuse(true)}
            onBlur={() => setFocuse(false)}
            placeholder="search amazon"
          />
          <button
            className={` rounded-r border w-20 justify-center  bg-yellow-400 hover:bg-yellow-500 border-yellow-400 cursor-pointer  ${
              focuse ? "border-4 border-yellow-600 border-l-0" : ""
            }`}
          >
            <FaSearch className="w-10 h-full   text-gray-600 p-2  " />
          </button>
        </div>
        <div className="flex cursor-pointer p-2 border-2 border-hidden   hover:border-solid">
          <img className="w-7" src={assets.img6} alt="logo" />
          <span className=" text-[18px] pl-1 font-bold">En</span>
          <FaCaretDown className="self-end  text-gray-300" />
        </div>
        <div className=" capitalize p-2 border-2 border-hidden  hover:border-solid">
          <p className="text-[13px] flex gap-0 flex-col">
            Hello ,sign in
            <span className="font-bold text-[18px] capitalize">
              account & lists
            </span>
          </p>
        </div>
        <div className="capitalize p-2 border-2 border-hidden  hover:border-solid cursor-pointer">
          <p className="text-[13px] flex flex-col">
            returns
            <span className="font-bold text-[16px] capitalize"> & orders</span>
          </p>
        </div>
        <div className="flex relative p-2 border-2 border-hidden  hover:border-solid cursor-pointer ">
          <span className="absolute top-0  ">0</span>
          <FaCartPlus className="text-4xl " />
        </div>
      </div>
      <div className="bg-[#232F3E] capitalize  font-semibold text-[18px] flex items-center gap-5 p-4">
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
