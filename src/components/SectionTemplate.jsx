import React from "react";

const SectionTemplate = ({
  mobileImage,
  desktopImage,
  title,
  description1,
  description2,
  icon,
  index,
  type,
}) => {
  return (
    <div
      className={`
        w-full
        flex flex-col md:flex-row
        gap-10 md:gap-0
        items-center md:items-start
        justify-center md:justify-between
        md:px-10 px-4
        ${
          type === "first" ? (index % 2 !== 0 ? "md:flex-row-reverse" : "") : "" // برای first
        }
        ${
          type === "second"
            ? index % 2 === 1
              ? ""
              : "md:flex-row-reverse"
            : ""
        }
      `}
    >
      {/* Mobile Image */}
      <img
        className="md:hidden w-full m-0 p-0"
        src={mobileImage}
        alt="mobile-image"
      />

      {/* Desktop Image */}
      <img
        className="hidden md:block w-[45%] m-0 p-0"
        src={desktopImage}
        alt="desktop-image"
      />

      {/* TEXT */}
      <div className="flex flex-col gap-2 w-full md:w-[45%] text-left">
        {/* Desktop Icon */}
        <img
          className="hidden md:block w-[100px] h-[100px] m-0 p-0"
          src={icon}
          alt="icon"
        />

        {/* TITLE */}
        <span
          className="
            block
            text-[22px] md:text-[32px]
            font-extrabold
            text-left
            bg-linear-to-r from-[#0B1F2A] to-[#B6D3E1]
            bg-clip-text text-transparent
          "
        >
          {title}
        </span>

        {/* SUBTITLE */}
        <span
          className="
            text-[16px] md:text-[22px]
            leading-[22px] md:leading-[30px]
             text-left
          "
        >
          {description1}
        </span>

        {/* DESCRIPTION */}
        <span
          className="
            text-[14px] md:text-[18px]
            leading-[22px] md:leading-7
             text-left
          "
        >
          {description2}
        </span>
      </div>
    </div>
  );
};

export default SectionTemplate;
