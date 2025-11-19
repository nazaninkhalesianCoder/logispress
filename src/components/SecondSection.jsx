import { book, img2, section2 } from "../utils/import";

import React from "react";

const SecondSection = () => {
  return (
    <div
      className="
        w-full
        flex flex-col md:flex-row
        gap-10 md:gap-0
        items-center md:items-start
        justify-center md:justify-between
        md:px-10 px-4
      "
    >
      {/* Mobile Image */}
      <img className="md:hidden w-full m-0 p-0" src={img2} alt="mobile-image" />

      {/* Desktop Image */}
      <img
        className="hidden md:block w-[45%] m-0 p-0"
        src={section2}
        alt="desktop-image"
      />

      {/* TEXT */}
      <div className="flex flex-col gap-4 w-full md:w-[45%] text-center md:text-left">
        {/* Desktop Icon */}
        <img
          className="hidden md:block w-[100px] h-[100px] m-0 p-0"
          src={book}
          alt="book-icon"
        />

        {/* TITLE */}
        <span
          className="
            block
            text-[22px] md:text-[32px]
            font-extrabold
            text-center md:text-left
            bg-linear-to-r from-[#0B1F2A] to-[#B6D3E1]
            bg-clip-text text-transparent
          "
        >
          VASTO CATALOGO DI PRODOTTI
        </span>

        {/* SUBTITLE */}
        <span
          className="
            text-[15px] md:text-[22px]
            leading-[22px] md:leading-[30px]
             text-left
          "
        >
          DISPONIBILE UN VASTO CATALOGO DI PRODOTTI IN GRADO DI SODDISFARE LE
          RICHIESTE DI TUTTI I TUOI CLIENTI
        </span>

        {/* DESCRIPTION */}
        <span
          className="
            text-[14px] md:text-[18px]
            leading-[22px] md:leading-7
             text-left
          "
        >
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
