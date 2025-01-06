"use client";
import { useState, useEffect } from "react";
import SettingButton from "./SettingButton";
import DynamicRangeSlider from "../UI/DynamicRangeSlider/DynamicRangeSlider";

export default function SettingsContent() {
  const [languageSettingsExpand, setLanguageSettingsExpand] = useState(true);
  const [generalSettingsExpand, setGeneralSettingsExpand] = useState(false);
  const [fontSettingsExpand, setFontSettingsExpand] = useState(false);
  const [AppearanceSettingsExpand, setAppearanceSettingsExpand] =
    useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex-1 p-4 space-y-4">
      <p className="font-bold text-2xl text-center my-4 hidden xl:block">
        Setting
      </p>
      <SettingButton
        isExpanded={languageSettingsExpand}
        title={"Language Settings"}
        setIsExpanded={setLanguageSettingsExpand}
        icon={
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
        }
      >
        <div className="flex gap-2 px-3">
          <button className="flex-1 py-2 px-4 bg-primary text-white rounded-lg">
            English
          </button>
          <button className="flex-1 py-2 px-4 bg-white border rounded-lg">
            বাংলা
          </button>
        </div>
      </SettingButton>
      <SettingButton
        isExpanded={generalSettingsExpand}
        title={"General Settings"}
        setIsExpanded={setGeneralSettingsExpand}
        icon={
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
        }
      >
        <div className="space-y-2 flex justify-between items-center px-3">
          <label htmlFor="arabic" className="flex-1 cursor-pointer">
            Show Arabic
          </label>
          <input
            type="checkbox"
            name="arabic"
            id="arabic"
            className="w-[18px] h-[18px] accent-primary"
          />
        </div>
        <div className="space-y-2 flex justify-between items-center px-3">
          <label htmlFor="translation" className="flex-1 cursor-pointer">
            Show Translation
          </label>
          <input
            type="checkbox"
            name="translation"
            id="translation"
            className="w-[18px] h-[18px] accent-primary"
          />
        </div>
        <div className="space-y-2 flex justify-between items-center px-3">
          <label htmlFor="transliteration" className="flex-1 cursor-pointer">
            Show Transliteration
          </label>
          <input
            type="checkbox"
            name="transliteration"
            id="transliteration"
            className="w-[18px] h-[18px] accent-primary"
          />
        </div>
        <div className="space-y-2 flex justify-between items-center px-3">
          <label htmlFor="reference" className="flex-1 cursor-pointer">
            Show Reference
          </label>
          <input
            type="checkbox"
            name="reference"
            id="reference"
            className="w-[18px] h-[18px] accent-primary"
          />
        </div>
      </SettingButton>
      <SettingButton
        isExpanded={fontSettingsExpand}
        title={"Font Settings"}
        setIsExpanded={setFontSettingsExpand}
        icon={
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        }
      >
        <div className="flex gap-4 px-3 flex-col">
          <div>
            <label className="block text-sm font-medium mb-2">
              Translation Font Size
            </label>
            <DynamicRangeSlider />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Select Arabic Script
            </label>
            <select className="block w-full p-3 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none">
              <option>Uthmani</option>
              <option>Indo-Pak</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Arabic Font
            </label>
            <select className="block w-full p-3 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none">
              <option>KFGQ</option>
              <option>Me Quran</option>
              <option>Al Mushaf</option>
              <option>Amiri Quran</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Arabic Font Size
            </label>
            <DynamicRangeSlider />
          </div>
        </div>
      </SettingButton>
      <SettingButton
        isExpanded={AppearanceSettingsExpand}
        title={"Appearance Settings"}
        setIsExpanded={setAppearanceSettingsExpand}
        icon={
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
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
        }
      >
        <div className="flex gap-2 px-3 justify-between">
          <span className="label flex items-center text-sm font-medium text-black">
            Night Mode
          </span>
          <label className="relative inline-flex cursor-pointer select-none items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="sr-only"
            />
            <span
              className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
                isChecked ? "bg-[#212b36]" : "bg-[#CCCCCE]"
              }`}
            >
              <span
                className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
                  isChecked ? "translate-x-[28px]" : ""
                }`}
              ></span>
            </span>
          </label>
        </div>
      </SettingButton>
    </div>
  );
}
