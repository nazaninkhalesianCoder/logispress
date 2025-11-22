import { avatar, black, virgol, white } from "../utils/import";

import React from "react";

const BigMiddleSection = () => {
  return (
    <div className="bg-[#B6D3E1] w-full py-5 flex flex-col gap-10 items-center">
      <span className="text-[32px] font-extrabold text-[#0B1F2A]">
        Cosa dicono di noi i nostri clienti
      </span>

      {/* ——— Box with layered images ——— */}
      <div className="relative w-[350px] h-[420px]">
        {/* Black under shape */}
        <img
          src={black}
          alt="black shape"
          className="absolute left-4 w-full h-full z-0"
        />

        {/* White top shape */}
        <img
          src={white}
          alt="white shape"
          className="absolute inset-0 w-full h-full z-10"
        />

        {/* Content on top */}
        <div className="absolute inset-0 flex flex-col gap-5 items-center text-center px-6 py-10 z-20">
          <img
            src={avatar}
            className="w-20 h-20 rounded-full -mt-10"
            alt="avatar"
          />

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold mt-3">Hannah Schmitt</h2>
            <p className="text-sm text-gray-600 -mt-1">Lead designer</p>
          </div>
          <img src={virgol} alt="" />

          <p className="mt-4 text-sm text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis orci lectus maecenas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigMiddleSection;
