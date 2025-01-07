import React from "react";
import DuaCardActionContent from "./DuaCardActionContent";
import duaIcon from "@/assets/images/icons/duaIcon.png";
import Image from "next/image";
const DuaCard = ({ dua }) => {
  return (
    <div className="space-y-4 bg-white p-4 rounded-xl" id={dua?.subcat_id}>
      <div className="flex items-center gap-3 mb-6">
        <Image src={duaIcon} alt={"dua"} width={34} height={34} />
        <span className="text-sm">{dua?.id}</span>

        <h2 className="text-primary text-lg font-medium">{dua?.dua_name_en}</h2>
      </div>
      {dua?.top_en && (
        <div className="mb-4">
          <p>{dua?.top_en}</p>
        </div>
      )}
      {dua.dua_arabic && (
        <div className="text-right mb-6">
          <p className="text-2xl leading-loose text-gray-800 font-arabic">
            {dua?.dua_arabic}
          </p>
        </div>
      )}

      {dua.translation_en && (
        <div className="mb-6">
          <p>Translation: {dua?.translation_en}</p>
        </div>
      )}
      {dua?.bottom_en && (
        <div className="mb-4">
          <p>{dua?.bottom_en}</p>
        </div>
      )}

      <DuaCardActionContent dua={dua} />
    </div>
  );
};

export default DuaCard;
