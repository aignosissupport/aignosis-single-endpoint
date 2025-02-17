import React from 'react';


const HowToUseOptically = () => {
    const Divider = ({ title }) => (
        <div className="flex flex-row justify-center items-center space-x-4 mb-3 mt-10">
            <span
                className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                style={{
                    background:
                        'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                }}
            ></span>
            <h4 className="text-[18px] text-[#F1C6FE] font-medium max-sm:text-sm">
                {title}
            </h4>
            <span
                className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                style={{
                    background:
                        'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                }}
            ></span>
        </div>
    );

    const cards = [
        { title: 'Observe Natural Behaviors', description: 'A calm environment helps capture your child’s authentic responses.', image_url:"https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/Card1.png" },
        { title: 'Early Screening, Better Outcomes', description: 'Detecting early signs ensures timely intervention and improved development.' ,image_url:"https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/Card2.png" },
        { title: 'Keep it Relaxed', description: 'Ensure your child is comfortable and engaged for the best results.', image_url:"https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/Card3.png" },
        { title: 'One Step at a Time', description: 'One screening session is enough to provide valuable insights', image_url:"https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/Card4.png" },
    ];

    return (
        <>
            <div className="md:block hidden py-4 px-6">
                {/* Divider Section */}
                <Divider title="Advantages" />
                <h5 className="text-2xl 2xl:text-5xl font-montserrat w-full text-center md:text-3xl tracking-tight font-semibold text-[#F6E8FB] max-sm:text-center">
                    Why screening is important for your child            </h5>

                {/* Cards Section */}
                <div className="flex flex-wrap justify-center gap-8 mt-10">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center w-[20vw] gap-4"
                        >
                            {/* Box */}
                            <div className="bg-[#43284C4D] overflow-hidden rounded-3xl w-full h-[20vw]">
                                <img className='w-full h-full object-cover' src={card.image_url} alt="" />
                            </div>

                            {/* Title and Description */}
                            <div className="text-left">
                                <h3 className="text-base font-semibold text-white">{card.title}</h3>
                                <p className="text-sm text-[#CACED9] mt-2">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div className="block md:hidden py-4 px-4">
                {/* Divider Section */}
                <Divider title="Advantages" />
                <h5 className="text-xl sm:text-2xl font-montserrat w-full text-center tracking-tight font-semibold text-[#F6E8FB]">
                    Why screening is important for your child
                </h5>

                {/* Cards Section */}
                <div className="flex flex-wrap justify-center gap-6 mt-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center w-[80vw] gap-4"
                        >
                            {/* Box */}
                            <div className="bg-[#43284C4D] overflow-hidden rounded-3xl w-full h-[60vw]">
                                <img className='w-full h-full object-cover' src={card.image_url} alt="" />
                            </div>
                            {/* Title and Description */}
                            <div className="text-center">
                                <span className="text-base font-semibold text-white">{card.title}</span>
                                <p className="text-sm text-[#CACED9] mt-2">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HowToUseOptically;
