import React from 'react';
import img1 from "../../assets/image.png";
import img2 from "../../assets/Featured.png";
import f1 from "../../assets/image (21).jpg";
import f2 from "../../assets/image (25).jpg";
import f3 from "../../assets/image (24).jpg";
import p1 from '../../assets/images/81.png';
import p2 from '../../assets/images/82.png';
import p3 from '../../assets/images/83.png';
import p4 from '../../assets/images/91.png';
import p5 from '../../assets/images/92.png';
import p6 from '../../assets/images/93.png';

const PricepageBenefits = () => {
    const cardData = [
        {
            image:f1,
            name: "Anaya",
            age: "3.8 year",
            location: "Bengaluru",
            image1:[
                p1,
                p2,
                p3
            ],
            goals: [
                "Clearer Speech",
                "Improved Social Interactions",
                "Better Sensory Regulation",
            ],
            insights: [
                "Speech and Vocalization Patterns",
                "Sensory Responses (e.g., sensitivity to noise)",
                "Eye Contact and Joint Attention",
                "Interaction with Peers",
            ],
            recommendations: [
                "Speech Therapy",
                "Occupational Therapy for Sensory Integration",
                "Parent-Child Interactive Activities",
                "Social Skills Training",
            ],
        },
        {
            image:f2,
            name: "Aarav",
            age: "4.5 year",
            location: "Mumbai",
            image1:[
                p4,
                p5,
                p6
            ],
            goals: [
                "Improved Communication Skills",
                "Reduced Screen Time",
                "Enhanced Attention Span",
            ],
            insights: [
                "Response to Name",
                "Speech Development",
                "Attention to Visual and Social Cues",
                "Repetitive Behaviors",
            ],
            recommendations: [
                "Speech Therapy",
                "Occupational Therapy",
                "Structured Play Sessions",
                "Screen Time Management Strategies",
            ],
        },
        {
            image:f3,
            name: "Vivaan",
            age: "5.1 year",
            location: "Delhi",
            image1:[
                p1,
                p2,
                p3
            ],
            goals: [
                "Better Social Engagement",
                "Improved Focus",
                "Enhanced Emotional Understanding",
            ],
            insights: [
                "Social Communication",
                "Joint Attention",
                "Emotional Response",
                "Gaze Patterns",
            ],
            recommendations: [
                "Social Skills Training",
                "Behavioral Therapy",
                "Structured Play Activities",
            ],
        },

    ];
    const Divider = ({ title }) => (
        <div className="flex flex-row justify-center items-center space-x-4 mb-3 mt-10">
            <span
                className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                style={{
                    background:
                        'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                }}
            ></span>
            <span className="text-[18px] text-[#F1C6FE] font-medium max-sm:text-sm">
                {title}
            </span>
            <span
                className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                style={{
                    background:
                        'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                }}
            ></span>
        </div>
    );
    const data = [
        { imageUrl: "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/image.png", title: 'Early Detection for Better Outcomes' },
        { imageUrl: "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/image1.png", title: 'Personalized Therapy Recommendations' },
        { imageUrl: "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/Card.png", title: 'Improved Social Skills & Communication' },

        // Add more items as needed
    ];
    return (
        <>
            <div className="hidden md:block pt-8">
                {/* Divider Section */}
                <Divider title="Advantages" />
                <h5 className="text-2xl 2xl:text-5xl font-montserrat w-full text-center md:text-3xl tracking-tight font-semibold text-[#F6E8FB] max-sm:text-center">
                    Benefits of Ai.gnosis
                </h5>

                {/* Carousel Section */}
                <div className="flex h-full w-full justify-center items-center mt-10">
                    {/* Left Arrow */}
                    {/* <button className="flex justify-center items-center bg-pink-700 px-4 py-3 rounded-full shadow-md hover:scale-105 transition">
                        <span className="text-white text-xl">{'<'}</span>
                    </button> */}

                    {/* Carousel Items */}
                    <div className="flex gap-[3vw] justify-center items-center overflow-hidden w-[80%] px-4">
                        {/* First Item */}
                        <div className="p-4 rounded-lg shadow-lg flex flex-col justify-center items-center w-[200px]">
                            <img
                                src='https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/image.png'
                                alt="Child health"
                                className="w-full h-[10vw] scale-[1.2] rounded-lg object-cover"
                            />
                            <p className="mt-6 text-center text-sm text-white">Early Detection for Better Outcomes</p>
                        </div>

                        {/* Second Item */}
                        <div className="p-4 rounded-lg flex flex-col justify-center items-center w-[200px]">
                            <img
                                src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/image1.png"
                                alt="Child health"
                                className="w-full h-[10vw] scale-[1.2] rounded-lg object-cover"
                            />
                            <p className="mt-6 text-center text-sm text-white">Personalized Therapy Recommendations</p>
                        </div>

                        {/* Third Item */}
                        <div className="p-4 rounded-lg flex flex-col justify-center items-center w-[200px]">
                            <img
                                src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/Card.png"
                                alt="Child health"
                                className="w-full h-[10vw] scale-[1.2] rounded-lg object-cover"
                            />
                            <p className="mt-6 text-center text-sm text-white">Improved Social Skills & Communication</p>
                        </div>
                        {/* <div className="p-4 rounded-lg flex flex-col justify-center items-center w-[200px]">
                            <img
                                src={img1}
                                alt="Child health"
                                className="w-full h-[10vw] scale-[1.2] rounded-lg object-cover"
                            />
                            <p className="mt-6 text-center text-sm text-white">Child health</p>
                        </div> */}

                    </div>
                    {/* Right Arrow */}
                    {/* <button className="flex justify-center items-center bg-pink-700 px-4 py-3 rounded-full shadow-md hover:scale-105 transition">
                        <span className="text-white text-xl">{'>'}</span>
                    </button> */}
                </div>
            </div>
            <div className="hidden md:block pt-5 pb-5">
                {/* Divider Section */}
                <Divider title="Advantages" />
                <h5 className="text-2xl 2xl:text-5xl w-full font-montserrat text-center md:text-3xl tracking-tight font-semibold text-[#F6E8FB] max-sm:text-center">
                    Precision Solutions, Exclusively Designed for You
                </h5>

                {/* Cards Section */}
                <div className="flex justify-center items-center mt-10 gap-6">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="w-[full] relative flex flex-col items-center justify-center h-[auto] rounded-xl bg-[#43284C4D]"
                        >
                           

                           
                            <div className="p-4 px-6 mt-[15vw] w-full">
                                 {/* Image Section */}
                            <div className="w-[100%] absolute top-4 flex items-center justify-start ">
                                <img src={card.image} alt={`Card ${index}`} className="w-[90%] h-[250px] rounded-lg shadow-md" />
                            </div>
                                <h4 className="text-[12px] text-[#CACED9]">
                                    <span className="text-[18px] text-white font-medium">
                                        {card.name}{" "}
                                    </span>
                                    {card.age}
                                </h4>
                                <span className="text-[10px] text-[#CACED9]">{card.location}</span>
                                <div className="border-t border-[#B740A180] my-2"></div>

                                <span className="text-base font-semibold text-white">
                                 Development Goal:
                                 </span>

                                <ul className="text-[8.9px] text-center mt-2 text-[#CACED9] gap-4 flex flex-row ml-4">
                                {card.goals.map((goal, i) => (
                                <li key={i} className="flex items-center gap-2">
                                 {card.image1[i] && (
                                 <img src={card.image1[i]} alt="goal icon" className="w-6 h-6" />
                                    )}
                                  <span>{goal}</span>
                                    </li>
                                ))}
                                 </ul>


                                <div className="border-t border-[#B740A180] my-2"></div>

                                <h6 className="text-base font-semibold text-white">
                                    Personalized Screening Insights:
                                </h6>
                                <p className="text-[10px] mt-2 text-[#CACED9]">
                                    Key Features Assessed:
                                    <ul className="list-disc ml-4">
                                        {card.insights.map((insight, i) => (
                                            <li key={i}>{insight}</li>
                                        ))}
                                    </ul>
                                </p>

                                <div className="border-t border-[#B740A180] my-2"></div>

                                <h5 className="text-base font-semibold text-white">
                                    Therapy Recommendations:
                                </h5>
                                <ul className="text-[10px] mt-2 text-[#CACED9] list-disc ml-4">
                                    {card.recommendations.map((recommendation, i) => (
                                        <li key={i}>{recommendation}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="block md:hidden p-4">
                {/* Divider Section */}
                <Divider title="Advantages" />
                <span className="text-xl w-full text-center tracking-tight font-semibold text-[#F6E8FB]">
                    Benefits of Ai.gnosis
                </span>

                {/* Mobile Carousel Section */}
                <div className="flex flex-col gap-4 justify-center items-center mt-6">
                    {data.map((item, index) => (
                        <div key={index} className="p-4 rounded-lg shadow-lg flex flex-col justify-center items-center w-full">
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-[40vw] rounded-lg object-cover"
                            />
                            <p className="mt-4 text-center text-sm text-white">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="block md:hidden p-4">
                {/* Divider Section */}
                <Divider title="Advantages" />
                <span className="text-2xl sm:text-3xl lg:text-5xl w-full font-montserrat text-center tracking-tight font-semibold text-[#F6E8FB]">
                    Precision Solutions, Exclusively Designed for You
                </span>

                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-center lg:items-center mt-10 gap-6">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-[40%] lg:w-[22vw] pl-5 flex flex-col items-center justify-center h-auto sm:h-[45vw] rounded-xl bg-[#43284C4D] p-4"
                        >
                            {/* Image Section */}
                            <div className="w-full sm:w-[90%] flex items-center justify-center h-[40%]">
                                <img src={card.image} alt={`Card ${index}`} className="rounded-lg shadow-md" />
                            </div>

                            {/* Badge */}
                            <div className="absolute top-2 right-2 bg-[#E87BFF] text-white text-[10px] font-bold px-2 py-1 rounded-full">
                                {card.age}
                            </div>

                            {/* Text Section */}
                            <div className="mt-4 w-full">
                                <span className="text-sm sm:text-[12px] text-[#CACED9]">
                                    <span className="text-base sm:text-[18px] text-white font-medium">
                                        {card.name}{" "}
                                    </span>
                                    {card.age}
                                </span>
                                <span className="text-xs sm:text-[10px] text-[#CACED9]">{card.location}</span>
                                <div className="border-t border-[#B740A180] my-2"></div>
                                <span className="text-base font-semibold text-white">
                                 Development Goal:
                                 </span>

                                <ul className="text-[8.9px] text-center mt-2 text-[#CACED9] gap-4 flex flex-row ml-4">
                                {card.goals.map((goal, i) => (
                                <li key={i} className="flex items-center gap-2">
                                 {card.image1[i] && (
                                 <img src={card.image1[i]} alt="goal icon" className="w-6 h-6" />
                                    )}
                                  <span>{goal}</span>
                                    </li>
                                ))}
                                 </ul>

                                <div className="border-t border-[#B740A180] my-2"></div>

                                <span className="text-sm sm:text-base font-semibold text-white">
                                    Personalized Screening Insights:
                                </span>
                                <p className="text-xs sm:text-[10px] mt-2 text-[#CACED9]">
                                    Key Features Assessed:
                                    <ul className="list-disc ml-4">
                                        {card.insights.map((insight, i) => (
                                            <li key={i}>{insight}</li>
                                        ))}
                                    </ul>
                                </p>

                                <div className="border-t border-[#B740A180] my-2"></div>

                                <span className="text-sm sm:text-base font-semibold text-white">
                                    Therapy Recommendations:
                                </span>
                                <ul className="text-xs sm:text-[10px] mt-2 text-[#CACED9] list-disc ml-4">
                                    {card.recommendations.map((recommendation, i) => (
                                        <li key={i}>{recommendation}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default PricepageBenefits;
