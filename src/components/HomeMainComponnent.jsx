import { HomeSvg, mooshak, vector } from "../utils/import";

import AboutUs from "./AboutUs";
import Btn from "./Btn";
import React from "react";

const HomeMainComponnent = () => {
  return (
    <div className="flex flex-col">
      {/* ==== بخش اول با پدینگ ===== */}
      <div className="px-20">
        <div className="flex justify-between mb-40">
          <div className="flex flex-col gap-5">
            {/* big text */}
            <span className="text-[64px] mt-20 font-extrabold h-fit">
              {/* first text with icon */}
              <span className="flex gap-5 items-center relative">
                <span>LA LOGISTICA</span>
                <img className="absolute left-[535px]" src={mooshak} alt="" />
              </span>

              {/* simple text */}
              <span>IDEALE PER IL TUO</span>

              {/* sec text with icon */}
              <span className="flex gap-5 items-center mt-[-3px]">
                <img src={vector} alt="" />
                <span>ECOMMERCE</span>
              </span>
            </span>

            <div className="flex flex-col gap-2">
              <span className="text-[20px] w-[90%]">
                Scopri I servizi di Warehousing e Fullfilment Automatizzati
                offerti dalla nostra azienda per il tuo e-commerce.
              </span>
              <span className="text-[20px] w-[85%]">
                Semplice, Intuitivo e una vasta gamma di prodotti, la nostra
                piattaforma è quello che fa per te!
              </span>
            </div>

            <Btn title="Registrati" />
          </div>

          <img src={HomeSvg} alt="" />
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
