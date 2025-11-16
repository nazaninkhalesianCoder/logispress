import React from "react";
import { line } from "../utils/import";

const AboutUs = () => {
  return (
    <div className="w-full py-10 px-20 bg-[#0B1F2A] text-[#F6F6F6] flex gap-10 items-center justify-between static">
      <div className="flex gap-3 items-center justify-center">
        <span className="text-[32px] font-medium ">1K+</span>
        <span className="w-[50%]">Campagne di Successo</span>
      </div>
      <img src={line} alt="" />
      <div className="flex gap-3 items-center justify-center">
        <span className="text-[32px] font-medium ">8K</span>
        <span className="w-[50%]">Clienti Felici</span>
      </div>
      <img src={line} alt="" />
      <div className="flex gap-3 items-center justify-center">
        <span className="text-[32px] font-medium ">10</span>
        <span className="w-[50%]">Anni di Esperienza</span>
      </div>
      <img src={line} alt="" />
      <div className="flex gap-3 items-center justify-center">
        <span className="text-[32px] font-medium ">500+</span>
        <span className="w-[50%]">Magazzini in Tutto il mondo</span>
      </div>
    </div>
  );
};

export default AboutUs;
