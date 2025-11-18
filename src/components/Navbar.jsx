import React from "react";

const Navbar = ({ title }) => {
  return (
    <nav className="flex justify-center items-center gap-10 text-[#0B1F2A] text-[14px] font-semibold">
      {title.map((title, index) => {
        return (
          <a key={index} href="#">
            {title}
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar;
