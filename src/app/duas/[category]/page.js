import DuaContent from "@/components/Dua/DuaContent";
import { notFound } from "next/navigation";
import DuaPageLayout from "../page";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3001/api/categories", {
    next: { revalidate: 600 },
  });
  const categories = await res.json();
  return categories.slice(0, 10).map((category) => ({
    cat: category.cat_id.toString(),
  }));
}

async function getDuaData(cat) {
  const res = await fetch(`http://localhost:3001/api/dua/${cat}`, {
    next: { revalidate: 600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function DuaPage({ searchParams }) {
  const params = await searchParams;
  const cat = params?.cat || 1;
  const search = params?.search || ""
  if (!cat) return;
  try {
    const category = await getDuaData(cat);
    return (
      <DuaPageLayout search={search}>
        <DuaContent category={category} />
      </DuaPageLayout>
    );
  } catch (error) {
    notFound();
  }
}
export const dynamic = "force-dynamic"
