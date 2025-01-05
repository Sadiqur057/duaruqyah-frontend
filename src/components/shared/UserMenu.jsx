"use client";
import support from "@/assets/images/icons/support.png";
import privacy from "@/assets/images/icons/privacy.png";
import download from "@/assets/images/icons/download.png";
import setting from "@/assets/images/icons/support.png";
import userImg from "@/assets/images/user.png";
import { useState } from "react";
import Image from "next/image";

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { image: support, text: "Support Us" },
    {
      image: download,
      text: "Download Dua App",
    },
    {
      image: privacy,
      text: "Privacy Policy",
    },
    {
      image: setting,
      text: "Thanks & Credits",
    },
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 rounded-full focus:outline-none"
      >
        <Image
          src={userImg}
          alt="user"
          width={44}
          height={44}
          className="h-[44px] w-[44px]"
        />
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 gap-3"
              >
                <Image
                  src={item?.image}
                  alt={item.text}
                  width={20}
                  height={20}
                />
                <span>{item.text}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
