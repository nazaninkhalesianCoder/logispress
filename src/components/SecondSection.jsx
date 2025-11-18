import React from "react";
import { img2 } from "../utils/import";

const SecondSection = () => {
  return (
    <div className=" px-2 flex flex-col gap-10 items-center  ">
      <img src={img2} alt="" />
      <div className="flex flex-col gap-2 justify-center px-2">
        <span className="text-[22px] font-extrabold bg-linear-to-r from-[#0B1F2A] to-[#B6D3E1] bg-clip-text text-transparent">
          VASTO CATALOGO DI PRODOTTI
        </span>
        <span className="text-[16px]">
          DISPONIBILE UN VASTO CATALOGO DI PRODOTTI IN GRADO DI SODDISFARE LE
          RICHIESTE DI TUTTI I TUOI CLIENTI
        </span>
        <span className="text-[14px]">
          Esplora il nostro vasto catalogo di prodotti, dove la varietà incontra
          l'efficienza. Con un assortimento completo di articoli di alta
          qualità, garantiamo soluzioni per ogni esigenza. Dai un'occhiata ora e
          scopri la comodità di trovare tutto ciò di cui hai bisogno in un unico
          luogo.
        </span>
      </div>
    </div>
  );
};

export default SecondSection;
