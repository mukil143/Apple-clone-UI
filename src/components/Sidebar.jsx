import React from "react";
import { FaXmark } from "react-icons/fa6";
const Sidebar = () => {
  const links = [
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
  let clsbtn=document.querySelector(".clsbtn")
  
  return (
    <section className="bg-white fixed top-0 p-5 left-0 right-0  transform -translate-y-full">
      <div className=" clsbtn flex justify-end px-5 text-xl ">
        <FaXmark />
      </div>

      <ul  className="text-center">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul> 
    </section>
  );
};

export default Sidebar;
