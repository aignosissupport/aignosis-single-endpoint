import React from 'react';
import Divider from '../aboutus/Divider';
import { useNavigate } from "react-router-dom";

const Card = ({ title, subtitle, description, link, externalLink }) => {
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        navigate(path);
    };

    return (
        <>
            {/* Desktop View */}
            <div className="bg-[#43284C4D] text-white relative hidden md:block font-raleway p-11 rounded-3xl shadow-2xl text-left w-[30vw] mx-4">
                <h3 className="text-xl justify-center items-center w-full">
                    <span className='font-semibold italic text-3xl'>{title}</span>
                    {" "}
                    <span className='ml-1 font-medium'>{subtitle}</span>
                    <span className="absolute right-10 bottom-10 bg-red-800 ml-2 text-white px-1 py-1 w-10 h-10 flex justify-center items-center rounded-full font-bold text-[11px]">SOS</span>
                </h3>
                <p className="mb-8 mt-4 text-sm">{description}</p>
                <button
                    onClick={() => handleLinkClick(link)}
                    className="border -ml-2 border-[#B740A1] p-2 px-5 rounded-[30px]"
                >
                    <span className="2xl:text-base md:text-sm m-auto text-2xl text-white">
                        Learn More
                    </span>
                </button>
                {externalLink && (
                    <p className="mt-4">
                        <a
                            href={externalLink}
                            className="text-white text-[.4vw] underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {externalLink}
                        </a>
                    </p>
                )}
            </div>

            {/* Mobile View */}
            <div className="block md:hidden mt-4 bg-[#43284C4D] text-white relative font-raleway p-8 rounded-2xl shadow-lg text-left w-[90vw] mx-4">
                <h3 className="text-lg justify-center items-center w-full">
                    <span className='font-semibold italic text-2xl'>{title}</span>
                    {" "}
                    <span className='ml-1 font-medium'>{subtitle}</span>
                    <span className="absolute right-6 bottom-6 bg-red-800 ml-2 text-white px-1 py-1 w-8 h-8 flex justify-center items-center rounded-full font-bold text-[9px]">SOS</span>
                </h3>
                <p className="mb-6 mt-3 text-xs">{description}</p>
                <button
                    onClick={() => handleLinkClick(link)}
                    className="border -ml-2 border-[#B740A1] p-1 px-4 rounded-[20px]"
                >
                    <span className="text-sm m-auto text-white">
                        Learn More
                    </span>
                </button>
                {externalLink && (
                    <p className="mt-4">
                        <a
                            href={externalLink}
                            className="text-white text-[1vw] underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {externalLink}
                        </a>
                    </p>
                )}
            </div>
        </>
    );
};

const UnderStandingNumber = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full text-center px-[2vw] md:px-[14vw] mt-[5vw]">
            <Divider
                title='Know More'
                desc='Research has shown that early signs of developmental differences can appear in the first few years of life. Understanding these patterns helps us support children during their most crucial years of growth.'
                subtitle='Why Early Detection Matters?'
            />
            <div className="flex md:flex-row flex-col justify-center mt-[6vw] mb-[4vw]">
                <Card
                    title="1 in 10 "
                    subtitle="children experience developmental delays"
                    description="Early identification is crucial for support"

                    link="/blog/early-detection-diagnosis-autism-india"
                    // externalLink="https://www.indiaautismcenter.org/early-detection-and-diagnosis-of-autism-in-india-importance-and-challenges/#:~:text=According%20to%20a%202021%20study,ratio%20of%20approximately%203%3A1"

                />
                <Card
                    title="1 in 68"
                    subtitle="children are autistic in India"
                    description="Autism awareness and early detection can make a difference."

                    link="/blog/developmental-delay-identification-management-primary-care"
                    // externalLink="https://pmc.ncbi.nlm.nih.gov/articles/PMC6441684/"

                />
            </div>
        </div>
    );
};

export default UnderStandingNumber;
