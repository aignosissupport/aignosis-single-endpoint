import React from 'react';
import img1 from '../../assets/image.png';

const CustomerLove2 = () => {
    const Divider = ({ title }) => (
        <div className="flex flex-row justify-center items-center space-x-4 mb-3 mt-10">
            <span
                className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                style={{
                    background:
                        'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                }}
            ></span>
            <h3 className="text-[18px] text-[#F1C6FE] font-medium max-sm:text-sm">
                {title}
            </h3>
            <span
                className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                style={{
                    background:
                        'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                }}
            ></span>
        </div>
    );

    const Card = () => (
        <div className="bg-[#43284C4D] w-[30vw] font-raleway rounded-lg p-[3vw] text-left text-[#F6E8FB] shadow-lg">
            <img src={img1} alt="Child health" className="rounded-lg mb-4" />
            <h2 className="text-xl font-bold">Child Health</h2>
            <p className="text-sm mt-2">
                Explore educational trends, teaching strategies, and edtech innovations that are
            </p>
        </div>
    );

    return (
        <div className="">
            {/* Divider Section */}
            <Divider title="Advantages" />
            <h1 className="text-2xl 2xl:text-5xl font-montserrat w-full text-center md:text-3xl tracking-tight font-semibold text-[#F6E8FB] max-sm:text-center">
                Customer Love
            </h1>

            {/* Cards Section */}
            <div className="gap-5 flex w-full items-center justify-center mt-10">
                <Card/> 
                <Card/>
            </div>
            <div className="gap-5 flex w-full items-center justify-center mt-10">
                <Card/> 
                <Card/>
            </div>
        </div>
    );
};

export default CustomerLove2;
