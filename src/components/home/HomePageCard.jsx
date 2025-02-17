import React from 'react';
import { Link } from 'react-router-dom';

const HomePageCard = ({ imageSrc, title, description,urlredirect }) => {
  return (
    <Link to={urlredirect} className="border border-[#B740A1] p-4 my-8 mx-4 rounded-[30px] flex text-[#0D0C0A] bg-transparent">
      <div className="flex w-[30vw] p-2 px-[2vw] h-full items-center justify-center flex-row">
        <img
          src={imageSrc}
          alt="icon"
          className="w-[100px] m-[auto] h-full"
        />
        <div className="flex flex-col justify-start w-full text-left ml-6">
          <p className="block text-[#F6E8FB] font-semibold text-lg">{title}</p>
          <p className="block text-sm text-[#F6E8FB]">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default HomePageCard;
