"use client";
import Image from "next/image";
import { useState } from "react";
import duaImg from "@/assets/images/dua.png";
export default function CategoriesContent() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };
  const categories = [
    {
      id: 1,
      title: "Introduction to Dua",
      subcategoryCount: 11,
      duaCount: 15,
      subcategories: [
        { id: 1, title: "What is Dua" },
        { id: 2, title: "Conditions for Dua to be successful" },
        { id: 3, title: "The Methode Of Dua" },
        { id: 4, title: "Before Dua" },
        { id: 5, title: "During Dua" },
        {
          id: 6,
          title: "Prerequisites of writing Dua and drinking it's water",
        },
        { id: 7, title: "The correct way to perform Dua for a small child" },
      ],
    },
    {
      id: 2,
      title: "Introduction to Dua",
      subcategoryCount: 11,
      duaCount: 15,
      subcategories: [],
    },
    {
      id: 3,
      title: "Introduction to Dua",
      subcategoryCount: 11,
      duaCount: 15,
      subcategories: [],
    },
    {
      id: 4,
      title: "Introduction to Dua",
      subcategoryCount: 11,
      duaCount: 15,
      subcategories: [],
    },
  ];
  return (
    <aside className="w-full md:w-full xl:w-[380px] bg-white rounded-xl">
      <div className="p-4 rounded-t-xl bg-primary text-white hidden lg:block ">
        <h2 className="text-lg text-center">Categories</h2>
      </div>
      <div className="p-4">
        <div className="relative hidden lg:block mb-4">
          <input
            type="search"
            placeholder="Search Categories"
            className="w-full px-4 py-2 pl-10 bg-gray-50 rounded-lg focus:outline-none custom-border"
          />
          <svg
            className="w-5 h-5 text-light absolute left-3 top-1/2 -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <nav className="mt-lg-4 space-y-1 h-[calc(100vh-104px)] lg:h-[calc(100vh-286px)] overflow-auto custom-scrollbar">
          <div className="max-w-2xl mx-auto space-y-4">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg">
                <div
                  className={`p-3 flex items-center cursor-pointer gap-3 hover:bg-[rgb(232,240,245)] transition-colors rounded-xl ${
                    expandedCategory === category.id && "bg-[rgb(232,240,245)]"
                  }`}
                  onClick={() => toggleCategory(category.id)}
                >
                  <Image src={duaImg} alt="dua image" width={40} height={40} />

                  <div className="flex-grow">
                    <h3
                      className={`font-medium mb-[2px] ${
                        expandedCategory === category.id
                          ? "text-primary"
                          : "text-gray-900"
                      }`}
                    >
                      {category.title}
                    </h3>
                    <p className="text-sm text-light">
                      Subcategory: {category.subcategoryCount}
                    </p>
                  </div>
                  <div className="text-right border-l pl-4">
                    <span className="text-dark">{category.duaCount}</span>
                    <p className="text-sm text-light">Duas</p>
                  </div>
                </div>

                {expandedCategory === category.id &&
                  category.subcategories.length > 0 && (
                    <div className="pl-6 pr-4 pb-4 mt-1">
                      <div className="relative">
                        <div className="absolute left-[10px] top-0 bottom-0 w-[2px] border-l-[2px] border-primary border-dashed" />

                        <div className="space-y-4">
                          {category.subcategories.map((sub) => (
                            <div
                              key={sub.id}
                              className="relative flex items-center group"
                            >
                              <div className="absolute left-[5px] w-3 h-3 rounded-full bg-primary" />

                              <p className="ml-8 text-gray-600 group-hover:text-green-600 transition-colors">
                                {sub.title}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
}
