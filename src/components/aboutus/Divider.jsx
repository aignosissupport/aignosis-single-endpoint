import React from "react";

const Divider = ({ title, desc, subtitle, titleImg, belowTitleImg }) => {
  return (
    <>
      <div className="md:flex hidden flex-col items-center h-auto md:h-[auto] justify-center px-4 md:px-0">
        {/* DIVIDER CODE */}
        <div className="flex flex-row justify-center items-center space-x-4">
        <div className="flex flex-row items-center space-x-4">
            {/* Image Before Title (if any) */}
            {belowTitleImg && (
              <img
                src={belowTitleImg}
                alt="Decorative"
                className="w-[100px] h-[90px] max-sm:w-[30px] max-sm:h-[30px]"
              />
            )}
          <span
            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
            style={{
              background:
                "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
            }}
          ></span>

          {/* Wrapper for Title & Images */}
         

            {/* Title */}
            <h3 className="text-[24px] text-[#F1C6FE] font-medium max-sm:text-sm">
              {title}
            </h3>

            {/* Image After Title (if any) */}
            
          </div>

          <span
            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
            style={{
              background:
                "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
            }}
          ></span>
          {titleImg && (
              <img
                src={titleImg}
                alt="Decorative"
                className="w-[120px] h-[70px] max-sm:w-[30px] max-sm:h-[30px]"
              />
            )}
        </div>

        {/* Subtitle and Description */}
        <span className="font-raleway text-[#F6E8FB] font-bold p-2 max-sm:text-xl text-3xl">
          {subtitle}
        </span>
        <span className="font-inter text-white p-1 text-1xl">{desc}</span>
      </div>

      {/* Mobile Version */}
      <div className="flex md:hidden mt-[10vw] flex-col items-center h-auto md:h-[auto] m-[auto] justify-center px-4 md:px-0">
        {/* DIVIDER CODE */}
        <div className="flex flex-row justify-center items-center space-x-4">
        <div className="flex flex-row items-center space-x-2">
            {/* Image Before Title (if any) */}
            {belowTitleImg && (
              <img
                src={belowTitleImg}
                alt="Decorative"
                className="w-[50px] h-[50px] max-sm:w-[30px] max-sm:h-[30px]"
              />
            )}
          <span
            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
            style={{
              background:
                "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
            }}
          ></span>

          {/* Wrapper for Title & Images */}
          

            {/* Title */}
            <h3 className="text-[24px] text-[#F1C6FE] text-center font-medium max-sm:text-sm">
              {title}
            </h3>

            {/* Image After Title (if any) */}
           
          </div>

          <span
            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
            style={{
              background:
                "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
            }}
          ></span>
           {titleImg && (
              <img
                src={titleImg}
                alt="Decorative"
                className="w-[50px] h-[50px] max-sm:w-[30px] max-sm:h-[30px]"
              />
            )}
        </div>

        <span className="font-raleway text-center text-[#F6E8FB] font-bold p-2 max-sm:text-xl text-3xl">
          {subtitle}
        </span>
        <span className="font-inter text-center text-white p-1 text-1xl">
          {desc}
        </span>
      </div>
    </>
  );
};

export default Divider;
