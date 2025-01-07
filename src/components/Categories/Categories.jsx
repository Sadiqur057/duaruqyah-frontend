import React, { Suspense } from "react";
import CategoriesContent from "./CategoriesContent";
const Categories = ({ categories, search }) => {
  return (
    <div className="hidden lg:block rounded-xl">
      <Suspense>
        <CategoriesContent categories={categories} search={search} />
      </Suspense>
    </div>
  );
};

export default Categories;
