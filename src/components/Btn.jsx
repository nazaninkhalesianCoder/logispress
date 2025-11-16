import React from "react";

const Btn = ({ title }) => {
  return (
    <button className="px-12 py-4 text-white w-fit bg-[#0B1F2A] rounded-lg">
      <span className="w-fit">{title}</span>
    </button>
  );
};

export default Btn;
