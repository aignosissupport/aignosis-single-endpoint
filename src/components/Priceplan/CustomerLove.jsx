import React, { useState } from "react";
import img1 from "../../assets/review.jpg";
import img2 from "../../assets/image (29).jpg";
import img3 from "../../assets/image (31).jpg";

import { Link } from "react-router-dom";


const CustomerLove = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        {
            text: "“I was skeptical at first, but Aignosis made the entire screening process simple and stress-free for my son. The detailed report and therapy recommendations were exactly what we needed.”",
            rating: 4.9,
            name: "Priya Khanna",
            profession: "Mother",
            image: img1, // Replace with actual image URLs
        },
        {
            text: "Aignosis not only gave us clarity about our child’s behavior but also empowered us with steps to improve his focus and social interaction. This is such a useful tool for parents!",
            rating: 5.0,
            name: "Akash Verma",
            profession: "Father",
            image: img2, // Replace with actual image URLs
        },
        {
            text: "“The screening was so easy to do at home. The detailed report provided valuable insights about my daughter’s developmental patterns. Highly recommend it to every parent.”",
            rating: 4.9,
            name: "Sneha Gupta",
            profession: "Mother",
            image: img3,
        },
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const currentTestimonial = testimonials[currentIndex];


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

    return (
        <>
            <div className="px-8 md:block hidden pt-8">
                {/* Divider Section */}
                <Divider title="Advantages" />
                <h5 className="text-2xl 2xl:text-5xl font-montserrat w-full text-center md:text-3xl tracking-tight font-semibold text-[#F6E8FB] max-sm:text-center">
                    Customer Love
                </h5>
                {/* Carousel Section */}
                <div className="flex items-center justify-center mt-8 md:mt-12">
                    {/* Left Arrow */}
                    <button
                        className="bg-[#711D64] text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center"
                        onClick={handlePrev}
                    >
                        &lt;
                    </button>

                    {/* Card */}
                    <div
                        className="flex flex-col md:flex-row rounded-3xl w-[90%] md:w-[80%] h-auto md:h-[30vw] p-6 md:p-8 text-white mx-2 md:mx-4"
                        style={{
                            background: "radial-gradient(circle, #1A0C25 20%, #43284C 100%)",
                        }}
                    >
                        {/* Text Section */}
                        <div className="flex-1 flex flex-col justify-between pr-0 md:pr-7">
                            <p className="text-sm md:text-base">{currentTestimonial.text}</p>
                            <div className="w-full h-[2px] md:h-[4px] mt-4 md:mt-[10vw] flex justify-center items-center bg-[#811F67]"></div>
                            <div className="flex flex-col md:flex-row items-center justify-between mt-4 md:mt-0 px-0 md:px-10">
                                <div className="text-center md:text-left">
                                    <span className="text-sm text-[#CACED9]">
                                        {currentTestimonial.rating} Ratings
                                    </span>
                                    <div className="flex items-center justify-center md:justify-start">
                                        <span className="text-yellow-400">★★★★★</span>
                                    </div>
                                </div>
                                <div className="mt-2 md:mt-0 text-center md:text-right">
                                    <span className="text-sm text-white">
                                        {currentTestimonial.name}
                                        <span className="block text-[#CACED9] mt-2 text-xs">
                                            {currentTestimonial.profession}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="flex-1 flex items-center justify-center mt-4 md:mt-0">
                            <img
                                src={currentTestimonial.image}
                                alt={currentTestimonial.name}
                                className="rounded-lg object-cover h-32 md:h-full w-full"
                            />
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        className="bg-[#711D64] text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center"
                        onClick={handleNext}
                    >
                        &gt;
                    </button>
                </div>

            </div>
            <div className="px-4 block md:hidden pt-6 md:px-8 md:pt-8">
                {/* Divider Section */}
                <Divider title="Advantages" />
                <h5 className="text-xl md:text-3xl lg:text-5xl font-montserrat w-full text-center tracking-tight font-semibold text-[#F6E8FB] max-sm:text-center">
                    Customer Love
                </h5>
                {/* Carousel Section */}
                <div className="flex items-center justify-center mt-8 md:mt-12">
                    {/* Left Arrow */}
                    <button
                        className="bg-[#711D64] text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center"
                        onClick={handlePrev}
                    >
                        &lt;
                    </button>

                    {/* Card */}
                    <div
                        className="flex flex-col md:flex-row rounded-3xl w-[90%] md:w-[80%] h-auto md:h-[30vw] p-6 md:p-8 text-white mx-2 md:mx-4"
                        style={{
                            background: "radial-gradient(circle, #1A0C25 20%, #43284C 100%)",
                        }}
                    >
                        {/* Text Section */}
                        <div className="flex-1 flex flex-col justify-between pr-0 md:pr-7">
                            <p className="text-sm md:text-base">{currentTestimonial.text}</p>
                            <div className="w-full h-[2px] md:h-[4px] mt-4 md:mt-[10vw] flex justify-center items-center bg-[#811F67]"></div>
                            <div className="flex flex-col md:flex-row items-center justify-between mt-4 md:mt-0 px-0 md:px-10">
                                <div className="text-center md:text-left">
                                    <span className="text-sm text-[#CACED9]">
                                        {currentTestimonial.rating} Ratings
                                    </span>
                                    <div className="flex items-center justify-center md:justify-start">
                                        <span className="text-yellow-400">★★★★★</span>
                                    </div>
                                </div>
                                <div className="mt-2 md:mt-0 text-center md:text-right">
                                    <span className="text-sm text-white">
                                        {currentTestimonial.name}
                                        <span className="block text-[#CACED9] mt-2 text-xs">
                                            {currentTestimonial.profession}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="flex-1 flex items-center justify-center mt-4 md:mt-0">
                            <img
                                src={currentTestimonial.image}
                                alt={currentTestimonial.name}
                                className="rounded-lg object-cover h-38 md:h-full w-full"
                            />
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        className="bg-[#711D64] text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center"
                        onClick={handleNext}
                    >
                        &gt;
                    </button>
                </div>
            </div>
            <div
                className="bg-gradient-to-b from-[#241E22] to-[#43284C] h-[300px] my-[5vw] flex flex-col justify-center items-center gap-4 text-white font-manrope"
            >
                <p className="text-2xl max-sm:text-lg font-semibold font-montserrat">
                    We Value Your Feedback!
                </p>
                <p className="text-sm text-center px-4 max-w-[60%]">
                    Your experience matters to us. Share your thoughts and help us improve!
                </p>
                <div className="text-center">
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60 rounded-lg"></div>
                        <Link to="/" onClick={() => handleLinkClick('/')} className="relative md:text-xl 2xl:text-3xl font-semibold tracking-wide text-white z-10">
                            Ai.gnosis
                        </Link>
                    </div>
                    <p className="text-yellow-400 mt-2 text-lg font-semibold">4.9 ⭐⭐⭐⭐⭐</p>
                    <p className="text-sm mt-2">459 Reviews</p>
                </div>
                <Link
                    to="/feedback"
                    className="border text-sm border-[#9C00AD] text-white px-6 py-2 rounded-full hover:bg-purple-500 hover:text-white transition"
                >
                    Leave a Review
                </Link>
            </div>
        </>
    );
};

export default CustomerLove;
