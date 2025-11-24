import React from "react";
import { plus } from "../utils/import";

const Table = ({ number, isLast }) => {
  return (
    <div
      className={`w-full bg-[#F6F6F6] px-5 py-10 md:px-10 md:py-5 ${
        isLast ? "" : "border-b-4 border-[#B6D3E1]"
      }`}
    >
      {/* موبایل: flex-col، دسکتاپ: flex-row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0">
        {/* عدد */}
        <span className="text-[32px] md:text-[48px] text-[#3C3C4380] font-bold">
          0{number}
        </span>

        {/* متن و + */}
        <div className="flex justify-between items-center w-full md:flex-1 md:ml-4">
          <span className="text-[20px] md:text-[32px] text-[#0B1F2A] font-bold">
            Where can I watch?
          </span>
          <img src={plus} alt="plus" className="w-5 md:w-auto" />
        </div>
      </div>
    </div>
  );
};

export default Table;
