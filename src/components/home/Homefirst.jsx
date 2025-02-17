import React, { useState, useEffect } from "react";
import HomePageCard from "./HomePageCard";
import { Link } from "react-router-dom";
import m1 from "../../assets/h1.png";
import m2 from "../../assets/h2.png";
import sharks from "../../assets/7.png";
import star from "./star.png";
import p2 from "../../assets/PopUps/p2.png";
import p1 from "../../assets/PopUps/p1.png";

const images = [
  "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/carousel1.png",
  "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/carousel2.png",
  "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/carousel3.jpeg",
];

const Homefirst = () => {
  const [bgImage, setBgImage] = useState(images[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out effect

      setTimeout(() => {
        setBgImage((prevImage) => {
          const currentIndex = images.indexOf(prevImage);
          const nextIndex = (currentIndex + 1) % images.length;
          return images[nextIndex];
        });
        setFade(true); // Start fade-in effect
      }, 500); // Wait for fade-out before changing the image
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <>
      <>
        <div
          className="absolute h-full inset-0 bg-cover  mt-16 bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "cover",
            backgroundRepeat: "no-repeat",
            opacity: fade ? 0.2 : 0, // Fade-in and fade-out effect
            transition: "opacity .2s ease-in-out",
          }}
        ></div>

        <div
          className={`relative z-10 body w-[90%] h-full pt-[12vw] flex-col m-auto justify-center align-center items-center hidden md:flex`}
        >
          <span className="flex justify-center items-center tracking-[.3vw] text-sm font-bold font-raleway text-[#9C00AD]">
            <img
              src={star}
              className="scale-[.3] mr-[-1vw] max-sm:scale-[.4]"
              alt="star"
            />
            WELCOME TO AIGNOSIS
          </span>

          <span className="text-white font-bold text-5xl pt-[20px] font-manrope">
            Your journey with Aignosis!
          </span>
          <span className="text-[#811f67] font-bold text-5xl font-manrope">
            Helping you understand your child better
          </span>
          <div className="flex items-center justify-center px-[20vw] ">
            <p className="text-white font-raleway font-md text-center p-[10px]">
              Discover your child's developmental score in just 5 mins. The
              child watches a video and we are able to identify biomarkers which
              tell us subtle signs about his development.
            </p>
            <img
              src={p2}
              alt="Development Score"
              className="w-[100px] h-[100px]"
            />
          </div>

          {/* home page Card */}
          <div className="flex flex-row items-center space-x-6">
            <img src={p1} alt="Description" className="w-[100px] h-[100px]" />

            <div className="flex flex-row">
              <HomePageCard
                urlredirect="/prices"
                imageSrc={m1}
                title="For Parents"
                description="Early awareness opens doors to timely support and brighter possibilities"
              />
              <HomePageCard
                urlredirect="/clinic"
                imageSrc={m2}
                title="For doctors"
                description="Empowering clinics with advanced early detection tools"
              />
            </div>
          </div>
        </div>

        <div className="body w-[90%] h-full py-[8vh] flex-col m-auto justify-center align-center items-center flex md:hidden">
          {/* Welcome Text */}
          <span className="flex justify-center items-center font-manrope text-sm font-medium text-[#9C00AD] text-center tracking-widest uppercase mb-4">
            <img
              src={star}
              className="scale-[.3] max-sm:mr-[-2vw] max-sm:scale-[.4]"
              alt="star"
            />
            Welcome to Aignosis
          </span>

          {/* Main Heading */}
          <h1 className="text-white font-bold text-2xl font-manrope text-center mt-2 ">
            Your journey with Aignosis!
          </h1>
          <h2 className="text-[#811f67] font-extrabold text-3xl font-manrope text-center mb-6">
            Helping you understand your child better
          </h2>

          {/* Description */}
          <p className="text-white font-raleway font-normal text-center text-sm leading-relaxed mb-8">
          Discover your child's developmental score in just 5 mins. The
              child watches a video and we are able to identify biomarkers which
              tell us subtle signs about his development.
          </p>

          {/* Buttons for Cards */}
          <div className="flex flex-col space-y-4 w-full">
            <button className="flex items-center justify-between w-full bg-[#1A0C25] text-white border border-[#9C00AD] px-4 py-3 rounded-3xl hover:bg-[#9C00AD] hover:text-[#2A013E] transition-all">
              <Link to={"/prices"}>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full">
                    <img
                      className="w-full h-full object-contain"
                      src={m1}
                      alt="Icon for prices"
                    />
                  </div>
                  <span className="text-left">
                    <strong className="block font-bold">
                      Get your child tested now
                    </strong>
                    <span className="text-sm">
                      Empowering Clinics with Advanced Autism Detection Tools
                    </span>
                  </span>
                </div>
              </Link>
            </button>

            <button className="flex items-center justify-between w-full bg-[#1A0C25] text-white border border-[#9C00AD] px-4 py-3 rounded-3xl hover:bg-[#9C00AD] hover:text-[#2A013E] transition-all">
              <Link to={"/clinic"}>
                <div className="flex items-center space-x-4">
                  <div className="w-16 cursor-pointer h-16 rounded-full">
                    <img
                      className="w-full h-full object-contain"
                      src={m2}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <span className="text-left">
                    <strong className="block font-bold">For doctors</strong>
                    <span className="text-sm">
                      Empowering Clinics with Advanced Autism Detection Tools
                    </span>
                  </span>
                </div>
              </Link>
            </button>
          </div>
        </div>

        <div className="w-full 2xl:py-[10vw] md:py-[5vw] relative">
          <div className="absolute top-[30vw] right-0 w-[15%] h-full bg-[#B740A1A6] opacity-45 blur-[120px] rounded-xl"></div>
          <img
            className="w-full h-full hidden sm:block"
            src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/banner.png"
            alt="Sharks Images"
          />
        </div>
      </>
    </>
  );
};

export default Homefirst;
