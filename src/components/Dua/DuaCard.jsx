import React from "react";
import DuaCardActionContent from "./DuaCardActionContent";
import duaIcon from "@/assets/images/icons/duaIcon.png";
import Image from "next/image";
const DuaCard = ({ dua }) => {
  return (
    <>
      <div id={dua?.subcat_id} className="p-4 bg-white rounded-xl fw-medium">
        <p className="text-primary text-semibold">
          Section:{" "}
          <span className="text-default text-medium">
            {dua?.subcat_name_en}
          </span>
        </p>
      </div>
      <div className="space-y-4 bg-white p-4 rounded-xl" id={dua?.dua_name_en}>
        <div className="flex items-center gap-3 mb-6">
          <Image src={duaIcon} alt={"dua"} width={34} height={34} />
          <span className="text-sm">{dua?.id}</span>

          <h2 className="text-primary text-lg font-medium">
            {dua?.dua_name_en}
          </h2>
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
    </>
  );
};

export default DuaCard;
