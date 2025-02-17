import React from "react";

const AwardCard = ({ imageSrc, altText = "Award image" }) => {
  return (
    <div className="w-[200px] h-[150px] flex justify-center items-center p-6 bg-[#43284C4D] rounded-xl shadow-lg">
      <img src={imageSrc} className="object-contain scale-[1.2] w-full h-full" alt={altText} />
    </div>
  );
};

export default AwardCard;
