import React, { Suspense } from "react";
import DuaCardActionContent from "./DuaCardActionContent";
import duaIcon from "@/assets/images/icons/duaIcon.png";
import Image from "next/image";
import DuaLoadingScreen from "../shared/DuaLoadingScreen";
const DuaCard = ({ dua }) => {
  return (
    <Suspense fallback={<DuaLoadingScreen />}>
      <div id={dua?.subcat_id} className="p-4 bg-white rounded-xl fw-medium">
        <p className="text-primary font-medium">
          Section:{" "}
          <span className="text-default">
            {dua?.subcat_name_en}
          </span>
        </p>
      </div>
      <div className="space-y-4 bg-white p-4 rounded-xl" id={dua?.dua_name_en}>
        <div className="flex items-center gap-3 mb-6 font-semibold">
          <Image src={duaIcon} alt={"dua"} width={34} height={34} />
          <span className="text-primary">{dua?.id}.</span>

          <h2 className="text-primary">
            {dua?.dua_name_en}
          </h2>
        </div>
        {dua?.top_en && (
          <div className="mb-4">
            <p>{dua?.top_en}</p>
          </div>
        )}
        {dua.dua_arabic && (
          <div className="text-right mb-6 py-2">
            <p className="text-2xl leading-loose text-gray-800 font-arabic">
              {dua?.dua_arabic}
            </p>
          </div>
        )}

        {dua.transliteration_en && (
          <div className="mb-6">
            <p> <span className="font-semibold">Translation:</span> <i>{dua?.transliteration_en}</i></p>
          </div>
        )}
        {dua.translation_en && (
          <div className="mb-6">
            <p> <span className="font-semibold">Translation:</span> {dua?.translation_en}</p>
          </div>
        )}
        {dua?.bottom_en && (
          <div className="mb-4">
            <p>{dua?.bottom_en}</p>
          </div>
        )}
        {dua?.refference_en && (
          <div className="font-medium">
            <p className="text-primary">Reference</p>
            <p>{dua?.refference_en}</p>
          </div>
        )}

        <DuaCardActionContent dua={dua} />
      </div>
    </Suspense>
  );
};

export default DuaCard;
