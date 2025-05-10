import React from "react";
import { FaApple, FaSearch, FaShoppingBag, FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
const Navbar = () => {
  let navbarlinks = [
    {
      name: "Store",
      href: "#",
    },
    {
      name: "Mac",
      href: "#",
    },
    {
      name: "iPad",
      href: "#",
    },
    {
      name: "iPhone",
      href: "#",
    },
    {
      name: "Watch",
      href: "#",
    },
    {
      name: "AirPods",
      href: "#",
    },
    {
      name: "Tv&Home",
      href: "#",
    },
    {
      name: "Entertainment",
      href: "#",
    },
    {
      name: "Accessories",
      href: "#",
    },
    {
      name: "Support",
      href: "#",
    },
  ];

  
  return (
    <nav className="p-5 sticky top-0 flex justify-center  bg-white/60 backdrop-blur-3xl shadow-lg ">
      <div className="container flex  justify-between items-center space-x-4  " >
        <div className="text-2xl" >
            <a href="">
                <FaApple/>
            </a>
        </div>
        <ul className="hidden space-x-6 *:hover:underline md:flex ">
            {navbarlinks.map((link,index)=>(
                <li key={index}>
                    <a href={link.href}>
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
        <div className="flex space-x-6 md:space-x-6">
            <a href="">
                <FaSearch/>
            </a>
            <a href="">
                <FaShoppingBag/>
            </a>
            <a className="togglebtn block md:hidden">
                <FaBars/>
            </a>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
