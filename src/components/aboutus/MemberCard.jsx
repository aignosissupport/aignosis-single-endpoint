import React from "react";

const MemberCard = ({ title, subtitle, desc, src, logos = [] }) => {
  return (
    <div className="flex flex-col lg:flex-row border border-white border-opacity-10 rounded-lg overflow-hidden bg-[#43284C] text-white max-w-4xl w-full mx-auto shadow-lg">
      {/* Image Section */}
      <div className="w-full lg:w-1/3 flex items-center justify-center p-4 bg-[#301C3A] h-full">
        <img
          src={src}
          alt="Member"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content Section */}
      <div className="w-full lg:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <h3 className="text-md font-medium pt-2 text-gray-300">{subtitle}</h3>
          <p className="text-sm pt-4 text-gray-400">{desc}</p>
        </div>
        
        {/* Logos */}
        <div className="flex gap-4 mt-6 flex-wrap">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="logo"
              className="w-12 h-12 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
