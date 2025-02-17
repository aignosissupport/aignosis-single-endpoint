import React from "react";

const BlogCard = ({ image, title, author, time, category, description ,cardData,handleCardClick}) => {
  return (
    <div
      className="bg-[#2A183885]  rounded-lg shadow-lg border border-[#9C00AD4D] cursor-pointer"
      onClick={() => handleCardClick(cardData.id)}
    >
      <img
        src={image}
        alt={title}
        className="rounded-t-lg w-full object-cover h-40 max-sm:h-[13rem]"
      />
      <div className="p-4">
        <h3 className="text-[#F6E8FB] text-lg max-sm:text-md font-bold">
          {title}
        </h3>
        <div className="flex items-center justify-between text-purple-300 text-sm mt-2">
          <span className="text-[#B740A1]">{author}</span>
          <span>{time}</span>
        </div>
        <span className="text-[#9C00AD] text-sm mt-1 inline-block">
          {category}
        </span>
        <p className="text-[#F6E8FB] text-sm mt-3">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
