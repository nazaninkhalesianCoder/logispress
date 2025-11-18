import AboutUs from "./AboutUs";
import Btn from "./Btn";
import FirstSection from "./FirstSection";
import { HomeSvg } from "../utils/import";
import React from "react";
import SecondSection from "./SecondSection";

const HomeMainComponnent = () => {
  return (
    <div className="flex flex-col gap-14">
      <FirstSection />
      <AboutUs />
      <SecondSection />
    </div>
  );
};

export default HomeMainComponnent;
