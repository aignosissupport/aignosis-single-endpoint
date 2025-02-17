import React from "react";
import icon1 from "../../assets/factorimpacting/img1.png"; // Replace with your actual icon paths
import icon2 from "../../assets/factorimpacting/img2.png";
import icon3 from "../../assets/factorimpacting/img3.png";
import icon4 from "../../assets/factorimpacting/img4.png";
import icon5 from "../../assets/factorimpacting/img5.png";
import icon6 from "../../assets/factorimpacting/img6.png";
import icon7 from "../../assets/factorimpacting/img7.png";
import icon8 from "../../assets/factorimpacting/img8.png";
import outdor from "../../assets/factorimpacting/outdor.webp";

// Add other icon imports here

const factorsData = [
    {
        imageUrl: icon1,
        title: "1. Screen Time",
        subtitle: "Excessive screen time reduces opportunities for social interaction and engagement, affecting developmental milestones.",
    },
    {
        imageUrl: icon2,
        title: "2. Lack of Social Interaction",
        subtitle: "Limited peer interaction can hinder a child's social and emotional development.",
    },
    {
        imageUrl: icon3,
        title: "3. Stress in the Environment",
        subtitle: "Stressful home or school environments can impact attention, focus, and emotional regulation.",
    },
    {
        imageUrl: icon4,
        title: "4. Poor Nutrition",
        subtitle: "Unbalanced diets lacking essential nutrients can slow cognitive and physical development.",
    },
    {
        imageUrl: icon5,
        title: "5. Inadequate Sleep",
        subtitle: "Insufficient or poor-quality sleep affects attention, behavior, and learning.",
    },
    {
        imageUrl: icon6,
        title: "6. Irregular Routines",
        subtitle: "Inconsistent daily schedules can disrupt a child’s ability to develop structured habits and focus.",
    },
    {
        imageUrl: icon7,
        title: "7. Exposure to Toxins",
        subtitle: "Exposure to pollutants, secondhand smoke, or other toxins can affect brain development and overall health.",
    },
    {
        imageUrl: icon8,
        title: "8. Limited Physical Activity",
        subtitle: "A sedentary lifestyle impacts motor skill development and overall mental and physical well-being.",
    },
    {
        imageUrl: outdor,
        title: "9. Lack of Outdoor Play",
        subtitle:"Limited outdoor activities can reduce physical fitness, creativity, and social skills development, impacting overall well-being.",
    },
    // Add more data objects for other cards
];

const FactorImpacting = () => {
    return (
        <>
            <div className="md:flex hidden  flex-col items-center mt-10">
                <div className="text-center mb-6">
                    <div className="flex justify-center items-center space-x-4">
                        <span
                            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                            style={{
                                background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                            }}
                        ></span>
                        <h1 className="text-[18px] text-[#F1C6FE] font-medium max-sm:text-sm">
                            Advantages
                        </h1>
                        <span
                            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                            style={{
                                background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                            }}
                        ></span>
                    </div>
                    <h2 className="text-white text-3xl font-semibold mt-4">Factor Impacting</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-4">
                    {factorsData.map((factor, index) => (
                        <div key={index} className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: 'rgba(67, 40, 76, 0.3)' }}>
                            <div className="flex justify-center mb-4">
                                <img src={factor.imageUrl} alt={factor.title} className="w-[73px] h-13" />
                            </div>
                            <h3 className="text-white text-lg font-semibold mb-2 text-center">{factor.title}</h3>
                            <p className="text-sm text-white text-center">{factor.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Mobile view */}
            <div className="md:hidden flex flex-col items-center mt-10">
                <div className="text-center mb-6">
                    <div className="flex justify-center items-center space-x-4">
                        <span
                            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                            style={{
                                background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                            }}
                        ></span>
                        <h1 className="text-[18px] text-[#F1C6FE] font-medium max-sm:text-sm">
                            Advantages
                        </h1>
                        <span
                            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                            style={{
                                background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                            }}
                        ></span>
                    </div>
                    <h2 className="text-white text-3xl font-semibold mt-4">Factor Impacting</h2>
                </div>
                <div className="grid grid-cols-1 gap-6 max-w-full w-full px-4">
                    {factorsData.map((factor, index) => (
                        <div key={index} className="p-6 rounded-lg shadow-lg " style={{ backgroundColor: 'rgba(67, 40, 76, 0.3)' }}>
                            <div className="flex justify-center mb-4">
                                <img src={factor.imageUrl} alt={factor.title} className="w-12 h-12" />
                            </div>
                            <h3 className="text-white text-lg font-semibold mb-2 text-center">{factor.title}</h3>
                            <p className="text-sm text-white text-center">{factor.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FactorImpacting;
