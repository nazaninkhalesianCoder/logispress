import { BoxIcon, boxIcon, line6 } from "../utils/import";

import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 py-10 md:px-20 px-5 items-center md:justify-between bg-[#0B1F2A]">
      <div className="flex flex-col gap-2 items-center">
        <img className="w-20 h-20" src={boxIcon} alt="" />
        <span className="text-[24px] font-extrabold text-white">
          LOGISPRESS
        </span>
      </div>
      <div className="flex flex-col md:flex-col gap-2 md:gap-10 md:items-start items-center text-center md:text-left text-[16px]">
        <div className="flex flex-col md:text-left">
          <span className="text-white">123 Market St.</span>
          <span className="text-white">Charlottesville, California 44635</span>
        </div>

        <div className="flex flex-col md:text-left">
          <span className="text-white">(434) 546-4356</span>
          <span className="text-white">contact@lift.agency</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <img className="md:hidden" src={line6} alt="" />
        <span className=" text-white">Chi Siamo </span>
        <img className="md:hidden border border-white" src={line6} alt="" />
      </div>
      <div className="flex flex-col gap-2 items-center text-center md:text-left text-[16px]">
        <span className="  text-white">Facebook</span>
        <span className=" text-white">Twitter</span>
        <span className=" text-white">Linkedin</span>
        <span className=" text-white">Instagram</span>
      </div>
      <span className="text-[16px] text-white">
        © 2024 Dropdelux All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
