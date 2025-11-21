import React from "react";

const AboutUs = () => {
  return (
    <div className="relative w-full bg-[#0B1F2A] text-[#F6F6F6] flex flex-col items-center">
      {/* خط عمودی فقط در موبایل */}
      <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-[#B6D3E1] z-0 md:hidden"></div>

      <div className="w-full py-10 px-2 sm:px-10 md:px-20">
        {/* Mobile Layout */}
        <div className="relative w-full md:hidden">
          <div className="grid grid-cols-2 w-full">
            {/* ستون چپ */}
            <div className="flex flex-col items-center gap-4 text-center relative z-10">
              <div className="flex flex-col items-center gap-2 py-2">
                <span className="text-[28px] font-medium">1K+</span>
                <span>Campagne di Successo</span>
              </div>

              <div className="w-full h-0.5 bg-[#B6D3E1]"></div>

              <div className="flex flex-col items-center gap-2 py-2">
                <span className="text-[28px] font-medium">10</span>
                <span>Anni di Esperienza</span>
              </div>
            </div>

            {/* ستون راست */}
            <div className="flex flex-col items-center gap-4 text-center relative z-10">
              <div className="flex flex-col items-center gap-2 py-2">
                <span className="text-[28px] font-medium">8K</span>
                <span>Clienti Felici</span>
              </div>

              <div className="w-full h-0.5 bg-[#B6D3E1]"></div>

              <div className="flex flex-col items-center gap-2 py-2">
                <span className="text-[28px] font-medium">500+</span>
                <span>Magazzini in Tutto il mondo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex w-full justify-between items-center">
          <div className="flex gap-3 items-center justify-center">
            <span className="text-[32px] font-medium">1K+</span>
            <span className="w-[50%]">Campagne di Successo</span>
          </div>

          <div className="w-0.5 h-10 bg-[#B6D3E1]"></div>

          <div className="flex gap-3 items-center justify-center">
            <span className="text-[32px] font-medium">8K</span>
            <span className="w-[50%]">Clienti Felici</span>
          </div>

          <div className="w-0.5 h-10 bg-[#B6D3E1]"></div>

          <div className="flex gap-3 items-center justify-center">
            <span className="text-[32px] font-medium">10</span>
            <span className="w-[50%]">Anni di Esperienza</span>
          </div>

          <div className="w-0.5 h-10 bg-[#B6D3E1]"></div>

          <div className="flex gap-3 items-center justify-center">
            <span className="text-[32px] font-medium">500+</span>
            <span className="w-[50%]">Magazzini in Tutto il mondo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
