import DuaContent from "@/components/Dua/DuaContent";
import DuaPage from "./[category]/page";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3001/api/categories");
  const categories = await res.json();
  return categories.map((category) => ({
    id: category.cat_id.toString(),
  }));
}

export default async function Home() {
  const res = await fetch("http://localhost:3001/api/categories");
  const categories = await res.json();
  return (
    <>
      <DuaPage categories={categories}>
        <DuaContent />
      </DuaPage>
    </>
  );
}
