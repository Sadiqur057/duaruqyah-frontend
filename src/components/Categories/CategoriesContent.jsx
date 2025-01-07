"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import duaImg from "@/assets/images/dua.png";
import { useRouter, useSearchParams } from "next/navigation";

import { poppins } from "@/utils/fonts";

export default function CategoriesContent({ categories, search }) {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const updatedParams = new URLSearchParams(searchParams.toString());

  const [expandedCategory, setExpandedCategory] = useState(params.get("cat"));
  const [expandedSubCategory, setExpandedSubCategory] = useState(null);
  const router = useRouter();
  const debounceTimeout = useRef(null);

  const toggleCategory = (categoryId, name) => {
    params.set("cat", categoryId);
    router.push(
      `${name.replace(/\s+/g, "-").toLowerCase()}?${params.toString()}`
    );
    setExpandedCategory(expandedCategory == categoryId ? null : categoryId);
  };

  const toggleSubCategory = (subCatId) => {
    setExpandedSubCategory(expandedSubCategory == subCatId ? null : subCatId);
  };

  const handleSearch = (e) => {
    clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(() => {
      const searchValue = e.target.value;
      if (searchValue) {
        updatedParams.set("search", searchValue);
      } else {
        updatedParams.delete("search");
      }

      router.push(`${window.location.pathname}?${updatedParams.toString()}`);
    }, 500);
  };

  return (
    <aside className="w-full md:w-full lg:w-[380px] bg-white rounded-xl">
      <div className="p-4 rounded-t-xl bg-primary text-white hidden lg:block">
        <h2 className="text-lg text-center">Categories</h2>
      </div>
      <div className="p-4">
        <div className="relative hidden lg:block mb-4">
          <input
            onChange={handleSearch}
            defaultValue={search || ""}
            type="search"
            placeholder="Search Categories"
            className="w-full px-4 py-3 pl-10 bg-gray-50 rounded-lg focus:outline-none custom-border focus:border-primary/40"
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
              <div
                key={category?.cat_id + "#category"}
                className="bg-white rounded-lg"
              >
                <div
                  className={`p-3 flex items-center cursor-pointer gap-3 hover:bg-[rgb(232,240,245)] transition-colors rounded-xl ${
                    expandedCategory == category?.cat_id &&
                    "bg-[rgb(232,240,245)]"
                  }`}
                  onClick={() =>
                    toggleCategory(category?.cat_id, category?.cat_name_en)
                  }
                >
                  <Image src={duaImg} alt="dua image" width={48} height={48} />
                  <div className="flex-grow">
                    <h3
                      className={`font-semibold mb-[2px] ${
                        expandedCategory == category?.cat_id
                          ? "text-primary"
                          : "text-default"
                      }`}
                    >
                      {category?.cat_name_en}
                    </h3>
                    <p className={`text-sm text-light ${poppins.className}`}>
                      Subcategory: {category?.no_of_subcat}
                    </p>
                  </div>
                  <div className="text-right border-l pl-4">
                    <span className="text-dark font-semibold">
                      {category?.no_of_dua}
                    </span>
                    <p className="text-sm text-light">Duas</p>
                  </div>
                </div>

                {expandedCategory == category?.cat_id &&
                  category?.sub_categories?.length > 0 && (
                    <div className="pl-6 pr-4 pb-4 pt-1">
                      <div className="relative">
                        <div className="absolute left-[10px] top-0 bottom-0 w-[2px] border-l-[2px] border-primary border-dashed" />
                        <div className="space-y-4">
                          {category?.sub_categories?.map((sub) => (
                            <div
                              key={sub?.subcat_id + "#sub-category"}
                              className="space-y-3 mt-3"
                            >
                              <div
                                className="relative flex items-center group cursor-pointer"
                                onClick={() =>
                                  toggleSubCategory(sub?.subcat_id)
                                }
                              >
                                <div className="absolute left-[5px] w-3 h-3 rounded-full bg-primary" />
                                <a
                                  href={`#${sub?.subcat_id}`}
                                  className={`ml-8 fw-medium ${
                                    expandedSubCategory == sub?.subcat_id
                                      ? "text-primary"
                                      : "text-default"
                                  } font-medium`}
                                >
                                  {sub?.subcat_name_en}
                                </a>
                              </div>

                              {expandedSubCategory == sub?.subcat_id && (
                                <div className="ml-8 space-y-2">
                                  {sub?.duas?.map((dua, index) => (
                                    <div
                                      key={dua?.dua_id + "#dua"}
                                      className="flex items-center gap-2 pl-4 group cursor-pointer hover:text-primary transition-colors"
                                    >
                                      <div className="w-3 h-3 flex-shrink-0">
                                        <div className="w-[6px] h-[6px] border-t border-r border-current transform rotate-45 translate-x-1 translate-y-1" />
                                      </div>
                                      <a
                                        href={`#${dua?.dua_name_en}`}
                                        className="text-sm py-1"
                                      >
                                        {dua?.dua_name_en}
                                      </a>
                                    </div>
                                  ))}
                                </div>
                              )}
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
