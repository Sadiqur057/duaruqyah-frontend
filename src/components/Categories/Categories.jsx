import React from "react";
import CategoriesContent from "./CategoriesContent";
const Categories = ({categories}) => {
  return (
    <div className="hidden lg:block rounded-xl">
      <CategoriesContent categories={categories}/>
    </div>
  );
};

export default Categories;
