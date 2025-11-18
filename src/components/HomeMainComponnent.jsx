import { HomeSvg, content, mooshak, vector } from "../utils/import";

import AboutUs from "./AboutUs";
import Btn from "./Btn";
import React from "react";

const HomeMainComponnent = () => {
  return (
    <div className="flex flex-col">
      {/* ==== بخش اول با پدینگ ===== */}
      <div className="md:px-20 px-5">
        <div className="flex flex-col md:flex-row justify-between mb-40 w-full overflow-hidden">
          {/* متن‌ها */}
          <div className="flex flex-col gap-5 text-left w-full overflow-hidden">
            {/* big text */}
            <span className="md:text-[64px] text-[32px] mt-10 md:mt-20 font-extrabold leading-tight">
              {/* first text with icon */}
              <span className="flex gap-3 items-center relative w-full">
                <span>LA LOGISTICA</span>

                {/* desktop icon */}
                <img
                  className="hidden md:block absolute left-[535px]"
                  src={mooshak}
                  alt=""
                />

                {/* mobile icon */}
                <img
                  className="block md:hidden w-10 relative left-0"
                  src={mooshak}
                  alt=""
                />
              </span>

              {/* simple text */}
              <span className="block">IDEALE PER IL TUO</span>

              {/* sec text with icon */}
              <span className="flex gap-3 items-center mt-0">
                <img className="w-8 md:w-auto" src={vector} alt="" />
                <span>ECOMMERCE</span>
              </span>
            </span>

            {/* توضیحات */}
            <div className="flex flex-col gap-2">
              <span className="md:text-[20px] text-[16px] w-full md:w-[90%]">
                Scopri I servizi di Warehousing e Fullfilment Automatizzati
                offerti dalla nostra azienda per il tuo e-commerce.
              </span>
              <span className="text-[16px] md:text-[20px] w-full md:w-[85%]">
                Semplice, Intuitivo e una vasta gamma di prodotti, la nostra
                piattaforma è quello che fa per te!
              </span>
            </div>

            {/* دکمه */}
            <Btn title="Registrati" />

            {/* عکس موبایل */}
            <img
              src={content}
              className="block md:hidden w-full mt-10"
              alt=""
            />
          </div>

          {/* عکس دسکتاپ */}
          <img
            src={HomeSvg}
            className="hidden md:block w-auto mt-10 md:mt-0"
            alt=""
          />
        </div>
      </div>

      {/* ==== AboutUs بدون پدینگ ===== */}
      <AboutUs />

      {/* ==== ادامه صفحه با پدینگ دوباره ===== */}
      <div className="px-20">
        {/* هر محتوایی که بعد از AboutUs داری میاد اینجا */}
      </div>
    </div>
  );
};

export default HomeMainComponnent;
