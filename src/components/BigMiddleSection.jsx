import {
  avatar,
  avatar1,
  black,
  black1,
  virgol,
  white,
  white1,
} from "../utils/import";

import React from "react";

const BigMiddleSection = () => {
  return (
    <div className="bg-[#B6D3E1] w-full py-5 flex flex-col gap-10 items-center px-2 md:px-20 ">
      <span className="text-[24px] md:text-[32px] font-extrabold text-[#0B1F2A] text-center">
        Cosa dicono di noi i nostri clienti
      </span>

      {/* WRAPPER با فاصله md:px-10 */}
      <div className="flex gap-10 flex-col items-center md:flex-row md:justify-center md:px-10">
        {/* -------- کارت 1 -------- */}
        <div className="relative w-[250px] h-[310px] md:w-[350px] md:h-[420px]">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={black1}
              alt="black shape"
              className="absolute right-5 top-7 w-full h-full z-0"
            />
          </div>

          <img
            src={white1}
            alt="white shape"
            className="absolute inset-0 w-full h-full z-10"
          />

          <div className="absolute inset-0 flex flex-col gap-2 md:gap-5 items-center text-center px-4 py-8 md:px-6 md:py-10 z-20">
            <img
              src={avatar1}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full -mt-8 md:-mt-10"
              alt="avatar"
            />

            <div className="flex flex-col gap-1 md:gap-2">
              <h2 className="text-base md:text-lg font-bold mt-2">
                Hannah Schmitt
              </h2>
              <p className="text-xs md:text-sm text-gray-600 -mt-1">
                Lead designer
              </p>
            </div>

            <img src={virgol} className="w-4 md:w-auto" alt="" />

            <p className="mt-3 text-xs md:text-sm text-gray-700 leading-relaxed px-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas.
            </p>
          </div>
        </div>

        {/* -------- کارت 2 -------- */}
        <div className="relative w-[250px] h-[310px] md:w-[350px] md:h-[420px]">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={black}
              alt="black shape"
              className="absolute -top-2 md:left-4 w-full h-full z-0"
            />
          </div>

          <img
            src={white}
            alt="white shape"
            className="absolute inset-0 w-full h-full z-10"
          />

          <div className="absolute inset-0 flex flex-col gap-4 md:gap-5 items-center text-center px-4 py-8 md:px-6 md:py-10 z-20">
            <img
              src={avatar}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full -mt-8 md:-mt-10"
              alt="avatar"
            />

            <div className="flex flex-col gap-1 md:gap-2">
              <h2 className="text-base md:text-lg font-bold mt-2">
                Hannah Schmitt
              </h2>
              <p className="text-xs md:text-sm text-gray-600 -mt-1">
                Lead designer
              </p>
            </div>

            <img src={virgol} className="w-4 md:w-auto" alt="" />

            <p className="mt-3 text-xs md:text-sm text-gray-700 leading-relaxed px-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas.
            </p>
          </div>
        </div>

        {/* -------- کارت 3 -------- */}
        <div className="relative w-[250px] h-[310px] md:w-[350px] md:h-[420px]">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={black1}
              alt="black shape"
              className="absolute left-5 top-7 w-full h-full z-0 scale-x-[-1]"
            />
          </div>

          <img
            src={white1}
            alt="white shape"
            className="absolute inset-0 w-full h-full z-10 scale-x-[-1]"
          />

          <div className="absolute inset-0 flex flex-col gap-4 md:gap-5 items-center text-center px-4 py-8 md:px-6 md:py-10 z-20">
            <img
              src={avatar1}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full -mt-8 md:-mt-10"
              alt="avatar"
            />

            <div className="flex flex-col gap-1 md:gap-2">
              <h2 className="text-base md:text-lg font-bold mt-2">
                Hannah Schmitt
              </h2>
              <p className="text-xs md:text-sm text-gray-600 -mt-1">
                Lead designer
              </p>
            </div>

            <img src={virgol} className="w-4 md:w-auto" alt="" />

            <p className="mt-3 text-xs md:text-sm text-gray-700 leading-relaxed px-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigMiddleSection;
