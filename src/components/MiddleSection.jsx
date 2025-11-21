import { cupMobile, giftMobile, medalMobile } from "../utils/import";

import Btn from "./Btn";
import React from "react";

const MiddleSection = () => {
  return (
    <div className="relative w-full bg-[#B6D3E1] text-[#0B1F2A] overflow-hidden">
      <div className="flex flex-col items-center gap-10 py-10">
        <span className="text-[20px] md:text-[32px] font-extrabold md:font-semibold text-center">
          sembra interessante, vero? <br />
          riceverai di più quando ti iscrivi!
        </span>
        <Btn title="Registratis" />
      </div>

      {/* mobile images — موقعیت‌دهی با مقادیر امن (بدون تغییر سایز) */}
      <img
        className="absolute md:hidden top-2 left-1/2 -translate-x-1/2"
        src={giftMobile}
        alt=""
      />

      <img
        className="absolute md:hidden top-44 left-5"
        src={cupMobile}
        alt=""
      />

      <img
        className="absolute md:hidden top-40 right-5"
        src={medalMobile}
        alt=""
      />
    </div>
  );
};

export default MiddleSection;
