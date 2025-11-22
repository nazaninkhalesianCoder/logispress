import {
  HomeSvg,
  book,
  clock,
  desktopImage,
  desktopImage1,
  desktopImage2,
  desktopImage3,
  desktopImage4,
  hand,
  hands,
  mobileImage,
  mobileImage1,
  mobileImage2,
  mobileImage3,
  mobileImage4,
  todo,
} from "../utils/import";

import AboutUs from "./AboutUs";
import BigMiddleSection from "./BigMiddleSection";
import Btn from "./Btn";
import FirstSection from "./FirstSection";
import MiddleSection from "./MiddleSection";
import React from "react";
import SectionTemplate from "./SectionTemplate";

const HomeMainComponnent = () => {
  const SectionData = [
    {
      mobileImage: mobileImage,
      desktopImage: desktopImage,
      icon: book,
      title: "VASTO CATALOGO DI PRODOTTI",
      description1:
        "DISPONIBILE UN VASTO CATALOGO DI PRODOTTI IN GRADO DI SODDISFARE LE RICHIESTE DI TUTTI I TUOI CLIENTI",
      description2:
        "Esplora il nostro vasto catalogo di prodotti, dove la varietà incontra l'efficienza. Con un assortimento completo di articoli di alta qualità, garantiamo soluzioni per ogni esigenza. Dai un'occhiata ora e scopri la comodità di trovare tutto ciò di cui hai bisogno in un unico luogo.",
    },
    {
      mobileImage: mobileImage1,
      desktopImage: desktopImage1,
      icon: clock,
      title: "SPEDIZIONI IN 24/48H",
      description1: "Velocità ed Efficienza",
      description2: `Scegliamo per te la combinazione tra efficacia ed efficienza, selezionando i migliori corrieri in grado di offrire un servizio su misura per il tuo e-commerce facendo particolarmente attenzioni ai costi.
La tua soddisfazione è la nostra priorità assoluta. Grazie alla nostra logistica avanzata, garantiamo spedizioni rapide in 24/48 ore. Gli ordini verranno consegnati nel minor tempo possibile, mantenendo elevati standard di efficienza e affidabilità.`,
    },
    {
      mobileImage: mobileImage2,
      desktopImage: desktopImage2,
      icon: todo,
      title: "MONITORAGGIO PERFORMANCE",
      description1: "Spedisci e Incassa!",
      description2: `Il nostro sistema avanzato ti permette di monitorare dettagliatamente lo stato di tutte le spedizioni con pagamento alla consegna, e lo stato di tutti i payout`,
    },
    {
      mobileImage: mobileImage3,
      desktopImage: desktopImage3,
      icon: hand,
      title: "PAGAMENTO ALLA CONSEGNA ",
      description1: "Monitora e Decidi!",
      description2: `Le nostre dashboard ti offrono tutti gli strumenti di analisi per tenere sotto controllo l’andamento del tuo e-commerce, aiutandoti nella scelte strategiche della tua azienda
Affidati al nostro sistema di monitoraggio performance all'avanguardia. Ogni passo dei tuoi ordini è sotto controllo, permettendoti di seguire la sua evoluzione in tempo reale. Trasparenza e efficienza si uniscono per garantirti una gestione impeccabile.`,
    },
    {
      mobileImage: mobileImage4,
      desktopImage: desktopImage4,
      icon: hands,
      title: "ASSISTENZA DEDICATA",
      description1: "Supporto quando vuoi, dove vuoi!",
      description2: `Il nostro team di assistenza dedicata è qui per te. Hai domande, dubbi o necessiti di supporto? Contattaci senza esitazioni. Siamo pronti ad assisterti in ogni fase, garantendo un'esperienza di servizio clienti eccellente e personalizzata. Siamo qui per rendere il tuo percorso con noi facile e senza preoccupazioni.`,
    },
  ];
  return (
    <div className="flex flex-col gap-14">
      <FirstSection />
      <AboutUs />
      {SectionData.filter((_, index) => index <= 2).map((item, index) => (
        <SectionTemplate
          key={index}
          index={index}
          type="first"
          mobileImage={item.mobileImage}
          desktopImage={item.desktopImage}
          icon={item.icon}
          title={item.title}
          description1={item.description1}
          description2={item.description2}
        />
      ))}
      <MiddleSection />
      {SectionData.filter((_, index) => index > 2).map((item, index) => (
        <SectionTemplate
          key={index}
          index={index}
          type="second"
          mobileImage={item.mobileImage}
          desktopImage={item.desktopImage}
          icon={item.icon}
          title={item.title}
          description1={item.description1}
          description2={item.description2}
        />
      ))}
      <BigMiddleSection />
    </div>
  );
};

export default HomeMainComponnent;
