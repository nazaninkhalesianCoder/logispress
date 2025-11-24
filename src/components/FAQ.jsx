import React from "react";
import Table from "./Table";

const FAQ = () => {
  let tables = [];
  let i = 1;
  const total = 4;

  while (i <= total) {
    tables.push(<Table key={i} number={i} isLast={i === total} />);
    i++;
  }

  return (
    <div className="relative bg-[linear-gradient(180deg,#F5F5F5_0%,#E0E6EB_50%,#0B1F2A_100%)] flex flex-col gap-10 items-center md:px-40 md:py-20 px-2 py-10">
      {/* در موبایل هم با gap فاصله می‌گیرد */}
      <span className="text-[#0B1F2A] text-[32px] font-extrabold">FAQ</span>

      {/* رپری که داخل آن Tableهاست */}
      <div className="w-full">{tables}</div>
    </div>
  );
};

export default FAQ;
