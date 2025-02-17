import React from "react";
import img from "../assets/images/doctor.png";
import img1 from "../assets/images/doctor img.png";
import Divider from "./aboutus/Divider";
import img2 from "../assets/dr_expertphoto.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../assets/homepage/log1.png";
import current from '../assets/PopUps/current.png'
import star from '../assets/PopUps/star.png'

const FromDoctor = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Show next/prev arrows
    dots: true, // Show navigation dots
    autoplay: true,
    autoplaySpeed: 3000, // Slide every 3 seconds
  };

  return (
    <>
      <div className="w-full h-full hidden md:block text-white bg-[#1A0C25]">
        <div
          className="w-full h-16"
          style={{
            background:
              "linear-gradient(to bottom, #09121A 0%, #09121A00 100%)",
          }}
        ></div>
        <div className="">
          <div className="w-full h-[25vw] px-[5vw] py-[0vw] gap-14 flex mt-[3vw]" >
            <div >
              <img
                className="object-fill w-full h-full"
                src={img2}
                alt=""
                srcset=""
              />
            </div>
            <div className="w-[50%] h-full">
              <div className="flex flex-row justify-start items-center space-x-4">
                
                <span
                  className="h-[6px] w-[100px] rounded-full max-sm:w-[60px]"
                  style={{
                    background:
                      "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
                  }}
                ></span>

                
                <span className="text-[16px] text-[#F1C6FE] font-medium max-sm:text-sm">
                  From Doctors
                </span>

               
                <span
                  className="h-[6px] w-[100px] rounded-full max-sm:w-[60px]"
                  style={{
                    background:
                      "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
                  }}
                ></span>

                
                <img
                  src={current} 
                  alt="Doctor"
                  className="w-[80px] h-[80px] max-sm:w-[30px] max-sm:h-[30px] object-cover"
                />
              </div>

              <span className="font-raleway mt-5 text-4xl">Expert Voices </span>
              <p className="mt-5  leading-[1.2vw]">
                Hear from healthcare professionals who've experienced how our
                tool supports <br /> early understanding and better outcomes.
              </p>

              <div className="w-full">
                <div className="mt-10 w-[60%]">
                  <Slider
                    className="rounded-3xl gap-10"
                    {...settings}
                    style={{
                      background:
                        "radial-gradient(circle, #1A0C25 20%, #43284C 100%)",
                    }}
                  >
                    {/* Testimonial Card 1 */}
                    <div className="flex rounded-3xl w-[80%] h-[12vw] p-8 text-white mx-auto">
                      <div className="flex flex-col justify-between h-full">
                        {/* Testimonial Text */}
                        <p className="text-xs">
                          "As a pediatrician with over 40 years of experience, I
                          believe early detection of autism and developmental
                          disorders is critical. This test is a groundbreaking
                          tool that allows us to detect early signs with high
                          accuracy. It empowers parents to take action sooner,
                          improving outcomes for children."
                        </p>
                        {/* Divider */}
                        <div className="w-full h-[.5px] mt-4 bg-pink-400"></div>
                        {/* Doctor Info */}
                        <div className="flex justify-between items-center">
                          {/* Left Side */}
                          <div className="flex flex-col">
                            <h3 className="text-base text-[#CACED9] font-semibold">
                              Dr. S. Sitaraman,
                            </h3>
                            <span className="text-xs text-[#CACED9]">
                              Pediatrician & Developmental Expert
                            </span>
                          </div>

                          {/* Right Side (Stethoscope Icon) */}
                          <div>
                            <img
                              src={logo1}
                              alt="Stethoscope Icon"
                              className="w-10 h-10"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Card 2 */}
                    <div
                      className="flex rounded-3xl w-[80%] h-[11vw] p-8 text-white mx-auto"
                      style={{
                        background:
                          "radial-gradient(circle, #1A0C25 20%, #43284C 100%)",
                      }}
                    >
                      <div className="flex flex-col justify-between h-full">
                        {/* Testimonial Text */}
                        <p className="text-xs">
                          "The early autism detection test is a significant step
                          forward in pediatric care. It offers a non-invasive,
                          cost-effective, and efficient way to screen children
                          for neurodevelopmental disorders. I wholeheartedly
                          support this initiative, as it provides essential data
                          for timely intervention."
                        </p>
                        {/* Divider */}
                        <div className="w-full h-[.5px] mt-4 bg-pink-400"></div>
                        {/* Doctor Info */}
                        <div className="flex justify-between items-center">
                          {/* Left Side */}
                          <div className="flex flex-col">
                            <h2 className="text-base text-[#CACED9] font-semibold">
                              Dr. Ramesh Agarwal,
                            </h2>
                            <span className="text-xs text-[#CACED9]">
                              Head of Child Development, AIIMS Delhi
                            </span>
                          </div>
                          {/* Placeholder */}
                          <div>
                            <img
                              src={logo1}
                              alt="Stethoscope Icon"
                              className="w-10 h-10"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[835vw] right-[90vw] w-[15%] h-full bg-[#B740A1A6] opacity-55 blur-[120px] rounded-xl"></div>
          <div className="py-[5vw]">
            <div className="w-full gap-14 h-[30vw] px-[10vw] flex mt-[5vw]">
              <div className="w-full overflow-x-auto h-full">
                <div className="flex flex-row justify-start items-center space-x-4">
                <img
                src={star} 
                 alt="star"
                      className="w-[80px] h-[60px] max-sm:w-[30px] max-sm:h-[30px] object-cover"
                      />
                  <span
                    className="h-[6px] w-[100px] rounded-full max-sm:w-[60px]"
                    style={{
                      background:
                        "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
                    }}
                  ></span>
                  <span className="text-[16px] text-[#F1C6FE] font-medium max-sm:text-sm">
                    From Parents
                  </span>
                  <span
                    className="h-[6px] w-[100px] rounded-full max-sm:w-[60px]"
                    style={{
                      background:
                        "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
                    }}
                  ></span>
                </div>
                <span className="font-raleway mt-5 text-4xl">
                  Real Families, Real Stories 
                </span>
                <p className="mt-5  leading-[1.2vw]">
                  Every milestone matters in a child's development. Here's what
                  families like yours have to say about their experience with
                  us..
                </p>

                <div className="w-full pl-7">
                  <div className="mt-10 w-[60%]">
                    <Slider
                      className="rounded-3xl gap-10"
                      {...settings}
                      style={{
                        background:
                          "radial-gradient(circle, #1A0C25 20%, #43284C 100%)",
                      }}
                    >
                      {/* Testimonial Card 1 */}
                      <div className="flex rounded-3xl w-[80%] h-[11vw] p-8 text-white mx-auto">
                        <div className="flex flex-col justify-between h-full">
                          {/* Testimonial Text */}
                          <p className="text-xs">
                            "I was so unsure about my child’s development, but
                            this test was so easy and quick. We got the answers
                            we needed right at home, which made everything so
                            much easier."
                          </p>
                          {/* Divider */}
                          <div className="w-full h-[.5px] mt-4 bg-pink-400"></div>
                          {/* Doctor Info */}
                          <div className="flex justify-between items-center">
                            {/* Left Side */}
                            <div className="flex flex-col">
                              <h3 className="text-base text-[#CACED9] font-semibold">
                                Neha Sharma,
                              </h3>
                              <span className="text-xs text-[#CACED9]">
                                Mother of 4 year old
                              </span>
                            </div>
                            {/* Placeholder */}
                          </div>
                        </div>
                      </div>

                      {/* Testimonial Card 2 */}
                      <div
                        className="flex rounded-3xl w-[80%] h-[11vw] p-8 text-white mx-auto"
                        style={{
                          background:
                            "radial-gradient(circle, #1A0C25 20%, #43284C 100%)",
                        }}
                      >
                        <div className="flex flex-col justify-between h-full">
                          {/* Testimonial Text */}
                          <p className="text-xs">
                            "We weren’t sure what to expect, but the test was
                            straightforward, and the results gave us the clarity
                            we needed. It helped us take the next steps without
                            any guesswork."
                          </p>
                          {/* Divider */}
                          <div className="w-full h-[.5px] mt-4 bg-pink-400"></div>
                          {/* Doctor Info */}
                          <div className="flex justify-between items-center">
                            {/* Left Side */}
                            <div className="flex flex-col">
                              <h3 className="text-base text-[#CACED9] font-semibold">
                                Sunil Verma,
                              </h3>
                              <span className="text-xs text-[#CACED9]">
                                Father of 4 yr old
                              </span>
                            </div>
                            {/* Placeholder */}
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
              <div className="w-[75%] rounded-3xl overflow-hidden h-full">
                <img
                  className="object-cover w-full h-full"
                  src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/image+145.png"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full h-16"
          style={{
            background: "linear-gradient(to top, #09121A 0%, #09121A00 100%)",
          }}
        ></div>
      </div>
      <div className="block md:hidden bg-[#1A0C25] text-white h-full w-full">
        <div
          className="w-full h-16"
          style={{
            background:
              "linear-gradient(to bottom, #09121A 0%, #09121A00 100%)",
          }}
        ></div>
        <div className="w-full">
          <div className="w-full h-auto px-4 py-6 flex flex-col space-y-6">
            <div className="w-full flex flex-col space-y-4">
              <div className="flex flex-row justify-start items-center space-x-2">
                <span
                  className="h-[4px] w-[50px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
                  }}
                ></span>
                <h3 className="text-sm text-[#F1C6FE] font-medium">
                  From Doctors
                </h3>
                <span
                  className="h-[4px] w-[50px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
                  }}
                ></span>
              </div>
              <h3 className="font-raleway text-xl text-start">Expert Voices</h3>
              <p className="text-start text-xs">
                Hear from healthcare professionals who've experienced how our
                tool supports early understanding and better outcomes.
              </p>
              <div className="w-full">
                <img src={img2} alt="" srcset="" />
              </div>
              <div className="flex overflow-x-auto space-x-4 py-10 scrollbar-hide">
                <div
                  className="flex flex-col rounded-3xl p-4 py-10 text-white min-w-[400px]"
                  style={{
                    background:
                      "radial-gradient(circle, #1A0C25 20%, #43284C 100%)",
                  }}
                >
                  <p className="text-xs">
                    "As a pediatrician with over 40 years of experience, I
                    believe early detection of autism and developmental
                    disorders is critical. This test is a groundbreaking tool
                    that allows us to detect early signs with high accuracy. It
                    empowers parents to take action sooner, improving outcomes
                    for children."
                  </p>
                  <div className="w-full h-[.5px] my-2 mt-10 bg-pink-400"></div>
                  <div className="flex justify-between items-center">
                          {/* Left Side */}
                          <div className="flex flex-col">
                            <h3 className="text-base text-[#CACED9] font-semibold">
                              Dr. S. Sitaraman,
                            </h3>
                            <span className="text-xs text-[#CACED9]">
                              Pediatrician & Developmental Expert
                            </span>
                          </div>

                          {/* Right Side (Stethoscope Icon) */}
                          <div>
                            <img
                              src={logo1}
                              alt="Stethoscope Icon"
                              className="w-10 h-10"
                            />
                          </div>
                        </div>
                </div>
                <div
                  className="flex flex-col rounded-3xl p-4 py-10 text-white min-w-[400px]"
                  style={{
                    background:
                      "radial-gradient(circle, #1A0C25 20%, #43284C 100%)",
                  }}
                >
                  <p className="text-xs">
                    "The early autism detection test is a significant step
                    forward in pediatric care. It offers a non-invasive,
                    cost-effective, and efficient way to screen children for
                    neurodevelopmental disorders. I wholeheartedly support this
                    initiative, as it provides essential data for timely
                    intervention."
                  </p>
                  <div className="w-full h-[.5px] my-2 mt-10 bg-pink-400"></div>
                  <div className="flex justify-between items-center">
                          {/* Left Side */}
                          <div className="flex flex-col">
                            <h3 className="text-base text-[#CACED9] font-semibold">
                              Dr. Ramesh Aggarwal,
                            </h3>
                            <span className="text-xs text-[#CACED9]">
                              Head of child Department , AIIMS Delhi
                            </span>
                          </div>

                          {/* Right Side (Stethoscope Icon) */}
                          <div>
                            <img
                              src={logo1}
                              alt="Stethoscope Icon"
                              className="w-10 h-10"
                            />
                          </div>
                        </div>
        
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto px-4 flex flex-col space-y-2">
            <div className="w-full flex flex-col space-y-4">
              <div className="flex flex-row justify-end mr-2 items-center space-x-2">
                <span
                  className="h-[4px] w-[50px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
                  }}
                ></span>
                <span className="text-sm text-[#F1C6FE] font-medium">
                  From Parents
                </span>
                <span
                  className="h-[4px] w-[50px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
                  }}
                ></span>
              </div>
              <h3 className="font-raleway text-xl text-right">
                Real Families, Real Stories {" "}
              </h3>
              <p className="text-center text-xs">
                Every milestone matters in a child's development. Here's what
                families like yours have to say about their experience with us.
              </p>
              <div className="w-full">
                <img
                  src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/image+145.png"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="flex overflow-x-auto space-x-4 py-10 scrollbar-hide">
                <div
                  className="flex flex-col rounded-3xl p-4 py-10 text-white min-w-[400px]"
                  style={{
                    background:
                      "radial-gradient(circle, #1A0C25 20%, #43284C 100%)",
                  }}
                >
                  <p className="text-xs">
                    "As a pediatrician with over 40 years of experience, I
                    believe early detection of autism and developmental
                    disorders is critical. This test is a groundbreaking tool
                    that allows us to detect early signs with high accuracy. It
                    empowers parents to take action sooner, improving outcomes
                    for children."
                  </p>
                  <div className="w-full h-[.5px] my-2 mt-10 bg-pink-400"></div>
                  <div className="flex flex-col">
                    <h3 className="text-sm text-[#CACED9] font-semibold">
                      Neha Sharma,
                    </h3>
                    <span className="text-xs text-[#CACED9]">
                      Mother of 4 year old
                    </span>
                  </div>
                </div>
                <div
                  className="flex flex-col rounded-3xl p-4 py-10 text-white min-w-[400px]"
                  style={{
                    background:
                      "radial-gradient(circle, #1A0C25 20%, #43284C 100%)",
                  }}
                >
                  <p className="text-xs">
                    "The early autism detection test is a significant step
                    forward in pediatric care. It offers a non-invasive,
                    cost-effective, and efficient way to screen children for
                    neurodevelopmental disorders. I wholeheartedly support this
                    initiative, as it provides essential data for timely
                    intervention."
                  </p>
                  <div className="w-full h-[.5px] my-2 mt-10 bg-pink-400"></div>
                  <div className="flex flex-col">
                    <h3 className="text-sm text-[#CACED9] font-semibold">
                      Priya patil,{" "}
                    </h3>
                    <span className="text-xs text-[#CACED9]">
                      Mother of 3 yr old
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full h-16"
          style={{
            background: "linear-gradient(to top, #09121A 0%, #09121A00 100%)",
          }}
        ></div>
      </div>
    </>
  );
};

export default FromDoctor;
