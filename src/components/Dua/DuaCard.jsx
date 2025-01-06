import React from "react";
import DuaCardActionContent from "./DuaCardActionContent";

const DuaCard = ({ prayer }) => {
  return (
    <div className="space-y-4 bg-white p-4 rounded-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-white text-sm">{prayer.id}</span>
        </div>
        <h2 className="text-primary text-lg font-medium">{prayer.title}</h2>
      </div>

      <div className="text-right mb-6">
        <p className="text-2xl leading-loose text-gray-800 font-arabic">
          {prayer.arabicText}
        </p>
      </div>

      <div className="mb-4">
        <p className="text-gray-600 italic">
          Transliteration: {prayer.transliteration}
        </p>
      </div>

      <div className="mb-6">
        <p className="text-gray-700">Translation: {prayer.translation}</p>
      </div>
      <DuaCardActionContent prayer={prayer} />
    </div>
  );
};

export default DuaCard;
