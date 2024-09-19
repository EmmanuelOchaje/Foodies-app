import { useState } from "react";
import {
  AiFillTag,
  AiFillTags,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsFillTagFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import {
  TbHealthRecognition,
  TbHeart,
  TbTruckDelivery,
  TbWallet,
} from "react-icons/tb";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* LEft side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={30} className=" cursor-pointer" />
        </div>
        <h1 className="cursor-pointer text-2xl sm:3xl lg:text-4xl p-2">
          F<span className="font-bold text-green-700">ooo</span>dies
        </h1>
        <div className="hidden lg:flex bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="p-2 bg-green-600 rounded-full text-white">Delivery</p>
          <p className="p-2">Pick Up</p>
        </div>
      </div>
      {/* input div */}
      <div className="bg-gray-300 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} color="green" />
        <input
          type="text"
          placeholder="Search Foods"
          className="bg-transparent w-full focus:outline-none p-2 text-[14px]"
        />
      </div>
      {/* cart */}
      <div className="bg-gray-300 hidden md:flex p-2 items-center rounded-full">
        <AiOutlineShoppingCart size={25} color="green" />
        Cart
      </div>

      {/* menu */}
      {nav ? (
        <div
          className="bg-black/50 fixed  w-full h-screen z-10 top-0 left-0"
          onClick={() => setNav(!nav)}
        ></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "w-[200px] bg-green-700 sm:w-[300px] lg:w-[400px] top-0 left-0 h-screen z-10 fixed duration-300"
            : "w-[200px] bg-green-700 sm:w-[300px] lg:w-[400px] top-0 left-[-100%] h-screen z-10 fixed duration-300"
        }
      >
        <AiOutlineClose
          size={30}
          className="right-4 top-4 absolute cursor-pointer"
          color="white"
          onClick={() => setNav(!nav)}
        />
        <h2 className="text-2xl text-white p-4">
          F<span className="text-white-700 font-semibold">ooo</span>dies
        </h2>
        <nav>
          <ul className="flex text-white flex-col p-4 ">
            <li className="py-4 flex">
              <TbTruckDelivery size={20} color="white" className="mr-1" />
              Orders
            </li>
            <li className="py-4 flex">
              <TbHeart size={20} color="white" className="mr-1" />
              Favourites
            </li>
            <li className="py-4 flex">
              <TbWallet size={20} color="white" className="mr-1" />
              Wallets
            </li>
            <li className="py-4 flex">
              <TbHealthRecognition size={20} color="white" className="mr-1" />
              Help
            </li>
            <li className="py-4 flex">
              <BsFillTagFill size={20} color="white" className="mr-1" />
              Promotions
            </li>
            <li className="py-4 flex">
              <AiFillTags size={20} color="white" className="mr-1" />
              Best Ones
            </li>
            <li className="py-4 flex">
              <FaUserFriends size={20} color="white" className="mr-1" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
