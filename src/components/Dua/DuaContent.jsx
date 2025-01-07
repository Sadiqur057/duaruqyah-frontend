import DuaCard from "./DuaCard";

export default function DuaContent({ category }) {
  return (
    <main className="flex-1 overflow-auto custom-scrollbar h-[calc(100vh-114px)]">
      <div className="space-y-6">
        
          {category.map((dua, index) => (
            <DuaCard key={index} dua={dua} />
          ))}
     
      </div>
    </main>
  );
}
