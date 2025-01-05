"use client";

import { useState } from "react";
import Sidebar from "@/components/Categories/CategoriesContent";

const MobileCategories = () => {
  const [isOpen, setIsOpen] = useState(false);
  const title = "Dua's importance";
  return (
    <>
      <div className="flex items-center p-4 bg-white lg:hidden overflow-auto mt-6 mx-8 rounded-md">
        <button
          onClick={() => setIsOpen(true)}
          className="hover:bg-gray-100 rounded-lg"
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h4 className="ml-2">{title}</h4>
      </div>
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-200 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed inset-y-0 left-0 w-[85%] max-w-sm bg-white transform transition-transform duration-200 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 bg-primary text-white">
            <h2 className="text-xl">Categories</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default MobileCategories;
