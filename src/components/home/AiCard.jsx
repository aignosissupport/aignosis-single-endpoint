import React from 'react';
import flag from './redflag.png'

const AiCard = ({ imageSrc, date, title, description = '' }) => {
    const descriptionWords = description.split(' ');

    return (
        <>
            {/* Desktop view */}
            <div className="hidden md:flex flex-col w-[24%] mt-[4vw] bg-[#43284C4D] border rounded-[16px] border-[#5455694D] mx-4 my-4 relative">
    {/* Content Image */}
    <img src={imageSrc} className="h-[200px] object-contain pt-4" alt="AI related content" />
    
    {/* Flag Icon */}
    <div className="absolute bottom-[20px] right-[20px] w-[43px] top-[11.5vw] h-[43px] bg-[#545569] rounded-full flex items-center justify-center">
        {/* Play Icon */}
        <img src={flag} alt="Play" className="w-[20px]  h-[20px]" />
    </div>

    {/* Text Content */}
    <div className="flex flex-col gap-1 p-4">
        <span className="text-xs underline text-[#D7DAE3] font-raleway">{date}</span>
        
        <p className="pt-2 font-bold text-sm text-[#CACED9] font-montserrat block">
            {descriptionWords.map((word, index) => (
                <span
                    key={index}
                    style={{ color: index === 1 ? '#B740A1' : 'inherit' }}
                >
                    {word}{' '}
                </span>
            ))}
        </p>
    </div>
</div>


            {/* Mobile view */}
            <div className="md:hidden flex flex-col w-full overflow-hidden bg-[#43284C] border rounded-[16px] border-[#5455694D] mx-4 my-4 relative">
    {/* Content Image */}
    <img src={imageSrc} className="w-full h-[200px] object-cover" alt="AI related content" />

    {/* Flag Icon */}
    <div className="absolute bottom-[16px] right-[16px] w-[43px] top-[41vw] h-[43px] bg-[#545569] rounded-full flex items-center justify-center">
        {/* Play Icon */}
        <img src={flag} alt="Play" className="w-[20px] h-[20px]" />
    </div>

    {/* Text Content */}
    <div className="flex flex-col gap-2 p-4">
        <span className="text-xs sm:text-sm text-[#D7DAE3] font-raleway">{date}</span>
        <span className="text-lg sm:text-xl text-[#D7DAE3] font-raleway">{title}</span>
        <p className="pt-2 text-xs sm:text-sm text-[#CACED9] font-raleway">
            {description}
        </p>
    </div>
</div>

        </>
    );
};

export default AiCard;
