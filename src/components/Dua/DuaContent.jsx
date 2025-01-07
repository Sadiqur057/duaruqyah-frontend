import DuaCard from "./DuaCard";
const prayers = [
  {
    id: 103,
    title: "Dua in the morning #2",
    arabicText:
      "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
    transliteration:
      "Allahumma bika 'asbahnaa, wa bika 'amsaynaa, wa bika nahyaa, wa bika namootu wa 'ilaykan-nushoor.",
    translation:
      "O Allah, by You we enter the morning and by You we enter the evening, by You we live and and by You we die, and to You is our resurrection.",
    audioUrl: "/audio/dua-e-qunoot.mp3",
  },
  {
    id: 104,
    title: "Dua in the evening #1",
    arabicText:
      "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ",
    transliteration:
      "Amsayna wa amsal-mulku lillah walhamdu lillah la ilaha illallahu wahdahu la sharika lah.",
    translation:
      "We have reached the evening and at this very time unto Allah belongs all sovereignty, and all praise is for Allah. None has the right to be worshipped except Allah, alone, without any partner.",
  },
];

export default function DuaContent({category}) {
  return (
    <main className="flex-1 overflow-auto custom-scrollbar h-[calc(100vh-114px)]">
      <div className="space-y-6">
        <div className="p-4 bg-white rounded-xl fw-medium">
          <p className="text-primary">
            Section:{" "}
            <span className="text-dark">
              The servant is dependent on his Lord
            </span>
          </p>
        </div>
        {category.map((dua,index) => (
          <DuaCard key={index} dua={dua} />
        ))}
      </div>
    </main>
  );
}
