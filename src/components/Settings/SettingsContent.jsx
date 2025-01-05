"use client";

import { useState, useEffect } from "react";

export default function SettingsContent() {
  const [languageExpand, setLanguageExpand] = useState(true);
  return (
    <div className="flex-1 p-4 space-y-4">
      <p className="font-bold text-2xl text-center my-4 hidden xl:block">
        Setting
      </p>
      <div
        className={`space-y-4 ${
          languageExpand && "border border-t-0 rounded-md pb-4"
        }`}
      >
        <div
          className={`flex items-center gap-3 p-4 bg-gray-50 rounded-lg cursor-pointer text-light ${
            languageExpand && "border-primary  border-l-[6px] text-primary"
          }`}
          onClick={() => setLanguageExpand(!languageExpand)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
            />
          </svg>
          <span className="font-medium">Language Settings</span>
        </div>
        {languageExpand && (
          <div className="flex gap-2 px-3">
            <button className="flex-1 py-2 px-4 bg-primary text-white rounded-lg">
              English
            </button>
            <button className="flex-1 py-2 px-4 bg-white border rounded-lg">
              বাংলা
            </button>
          </div>
        )}
      </div>


      <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg text-light">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span className="font-medium">General Settings</span>
      </button>


      <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg text-light">
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
        <span className="font-medium">Font Settings</span>
      </button>


      <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg text-light">
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
        <span className="font-medium">Appearance Settings</span>
      </button>
    </div>
  );
}
