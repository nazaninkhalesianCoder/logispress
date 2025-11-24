import { BoxIcon } from "../utils/import";
import Btn from "./Btn";
import Navbar from "./Navbar";
import React from "react";

const Header = () => {
  const title = ["Catalogo", "Home"];
  return (
    <div className="w-full flex static z-50 px-2 md:px-20 py-2 md:justify-between justify-center">
      <div className="flex gap-2 items-center">
        <img src={BoxIcon} alt="" />
        <span className="font-bold text-2xl text-[#0B1F2A]">LOGISPRESS</span>
      </div>

      <div className="hidden md:flex gap-16">
        <Navbar title={title} />
        <Btn title="Registrati" />
      </div>
    </div>
  );
};
export default Header;
