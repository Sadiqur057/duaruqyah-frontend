import DuaContent from "@/components/Dua/DuaContent";
import React from "react";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3001/api/categories");
  const categories = await res.json();
  return categories.slice(0,10).map((category) => ({
    cat: category.cat_id.toString(),
  }));
}

const DuaPage = async ({ searchParams }) => {
  const cat = searchParams?.cat || "1";
  const res = await fetch(`http://localhost:3001/api/dua/${cat}`);
  const category = await res.json();
  return <DuaContent category={category} />;
};

export default DuaPage;
