import Image from "next/image";
import React from "react";
import homeIcon from "@/assets/images/icons/home.png";
import menuIcon from "@/assets/images/icons/menu.png";
import lightIcon from "@/assets/images/icons/light.png";
import bookmarkIcon from "@/assets/images/icons/bookmark.png";
import duaIcon from "@/assets/images/icons/dua.png";
import messageIcon from "@/assets/images/icons/message.png";
import bookIcon from "@/assets/images/icons/book.png";
import logo from "@/assets/images/logo.png";
import supportImg from "@/assets/images/support.png";

const NavBoxContent = () => {
  const navLinks = [
    {
      image: homeIcon,
      alt: "Home",
    },
    {
      image: menuIcon,
      alt: "Menu",
    },
    {
      image: lightIcon,
      alt: "Light",
    },
    {
      image: bookmarkIcon,
      alt: "Bookmark",
    },
    {
      image: duaIcon,
      alt: "Dua",
    },
    {
      image: messageIcon,
      alt: "Message",
    },
    {
      image: bookIcon,
      alt: "Book",
    },
  ];
  return (
    <>
      <Image
        src={logo}
        width={72}
        height={72}
        alt="Logo"
        className="w-[72px] h-[72px] mb-2 hidden xl:block"
      />
      {navLinks.map((link) => (
        <button
          className="p-[10px] rounded-full bg-body hover:bg-gray-100"
          key={link?.alt}
        >
          <Image
            src={link?.image}
            alt={link?.alt}
            width="24"
            height="24"
            className="w-6"
          />
        </button>
      ))}
      <Image
        src={supportImg}
        alt="Logo"
        width={72}
        height={72}
        className="w-[72px] h-[72px] mt-2 hidden xl:block"
      />
    </>
  );
};

export default NavBoxContent;
