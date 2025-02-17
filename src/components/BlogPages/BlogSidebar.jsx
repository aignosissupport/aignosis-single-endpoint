import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BlogSidebar = ({ blogData }) => {
  const navigate = useNavigate();

  const categories = [
    "All",
    ...Object.values(blogData).map((blog) => blog.headline)

  ];

  const [activeCategory, setActiveCategory] = useState(
    "Autism Spectrum Disorder"
  );

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    navigate(`/Blog/${category}`, { state: { category } }); // Pass the category as state
  };

  return (
    <div className="bg-[#1A0C25] pl-[3vw]">
      <div className="flex flex-row 2xl:mt-[4vw] mt-[6vw] max-sm:mt-[15vw] items-center md:justify-start justify-center space-x-4 mb-8">
        <span
          className="h-[10px] w-[100px] rounded-full max-sm:w-[60px]"
          style={{
            background:
              "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
          }}
        ></span>
        <span className="text-[24px] text-[#F1C6FE] font-medium max-sm:text-sm">
          Blogs
        </span>
        <span
          className="h-[10px] w-[100px] rounded-full max-sm:w-[60px]"
          style={{
            background:
              "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
          }}
        ></span>
      </div>
      <h1 className="text-[#F6E8FB] md:text-left text-center font-raleway text-4xl">
        Read our pages on parenting strategies, skill training & on various
        topics.
      </h1>
      {/* <ul className="space-y-2 flex flex-col font-raleway  list-disc mt-6 md:pl-6  max-sm:flex max-sm:overflow-x-auto max-sm:flex-nowrap max-sm:list-none">
        {categories.map((category, index) => (
         <li
         key={index}
         onClick={() => handleCategoryClick(index)}
         className={`cursor-pointer max-sm:before:content-['•'] before:content-['•'] max-sm:before:text-white max-sm:my-auto 
                     ${index === 0 ? "hidden max-sm:hidden" : "block"} 
                     ${activeCategory === category ? "text-[#B740A1]" : "text-[#FFFFFF]"} 
                     hover:text-purple-300`}
       >
         {category}
       </li>
       
           
        ))}
      </ul> */}
    </div>
  );
};

export default BlogSidebar;
