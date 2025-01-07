import Image from "next/image";
import MobileSettings from "../Settings/MobileSettings";
import logo from "@/assets/images/logo.png";
import UserMenu from "./UserMenu";
import { Poppins } from "next/font/google";
import { poppins } from "@/utils/fonts";

export default function Header() {
  return (
    <header className="flex-1 bg-white xl:bg-body xl:pt-6 py-4 xl:pb-0 xl:px-1">
      <div className="px-8 h-16 flex items-center justify-between gap-2 xl:gap-6">
        <div className="flex flex-1 items-center justify-between gap-2 xl:gap-6">
          <div className="flex items-center gap-1 xl:gap-2">
            <Image
              src={logo}
              alt="Dua & Ruqyah"
              width={72}
              height={72}
              className="w-16 h-16 sm:w-[72px] sm:h-[72px] lg:hidden"
            />
            <h1 className={`text-lg sm:text-2xl font-semibold text-dark ${poppins.className}`}>
              Dua Page
            </h1>
          </div>

          <div className="flex-1 max-w-sm hidden lg:block">
            <div className="relative">
              <input
                type="search"
                placeholder="Search by Dua Name"
                className="w-full px-4 py-4 xl:bg-white bg-body rounded-lg focus:outline-none custom-border"
              />
              <button className="absolute right-[6px] top-1/2 -translate-y-1/2 bg-white xl:bg-body rounded-lg py-[13px] px-4">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 2xl:w-80 justify-end">
          <MobileSettings />
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
