import MobileCategories from "@/components/Categories/MobileCategories";
import Header from "@/components/shared/Header";
import NavBoxContent from "@/components/shared/NavBoxContent";
import Categories from "@/components/Categories/Categories";
import Settings from "@/components/Settings/Settings";

async function getCategories() {
  const res = await fetch("http://localhost:3001/api/categories", {
    next: { revalidate: 600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}

export default async function RootLayout({ children }) {
  const categories = await getCategories();
  return (
    <div className="flex flex-col">
      <>
        <div className="flex">
          <nav className="hidden xl:flex flex-col items-center w-[100px] xl:h-[calc(100vh-48px)] bg-white border-r py-4 space-y-8 rounded-xl my-6 ml-8 custom-scrollbar overflow-auto">
            <NavBoxContent />
          </nav>
          <div className="flex-1">
            <Header />
            <MobileCategories categories={categories} />
            <div className="flex flex-1 mx-8 mt-6">
              <div className="flex-1 flex flex-col md:flex-row gap-8">
                <Categories categories={categories} />
                {children}
                <Settings />
              </div>
            </div>
          </div>
        </div>

        <nav className="xl:hidden fixed bottom-0 left-0 right-0 bg-white border-t py-2 rounded-t-[40px] shadow-lg">
          <div className="flex justify-around p-3">
            <NavBoxContent />
          </div>
        </nav>
      </>
    </div>
  );
}
