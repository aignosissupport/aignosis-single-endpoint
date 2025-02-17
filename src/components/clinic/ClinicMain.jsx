import React from 'react'
import Header from '../Header'
import img2 from "../../assets/clinic/img2.png";
import img4 from "../../assets/clinic/img4.png";
import Comparison from '../Comparison';
import Trusted from './Trusted';
import Reports from './Reports';
import Awards from './Awards';
import Endrosed from './Endrosed';
import BlogFooter from '../BlogPages/BlogFooter';
import img23 from "../../assets/clinic/img 23.png"
import img24 from "../../assets/clinic/img24.png"
import img25 from "../../assets/clinic/img25.png"
import star from '../home/star.png'

import SEO from '../config/Seo';
import Newnavbar from '../Newnavbar';
const ClinicMain = () => {
  return (
    <>
      <Newnavbar />
      <SEO
        canonicalUrl={'https://aignosis.in/clinic'}
        metaDescription={'Visit Aignosis Autism Clinic for expert care and accurate diagnosis. Our specialists offer personalized solutions for autism treatment and support.'}
        pageTitle={'Aignosis Autism Clinic | Expert Care & Diagnosis'}
      />
      <div className='overflow-x-hidden'>
        <Header />

        <div className="bg-[#1A0C25]  min-h-screen font-raleway p-[5vw] flex flex-col items-center">
          <div className="flex flex-row  mt-[2vw] max-sm:mt-[15vw] items-center space-x-4 max-sm:mb-8">
            <span
              className="h-[10px] w-[100px] rounded-full max-sm:w-[60px]"
              style={{
                background:
                  "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
              }}
            ></span>
            <span className="text-[24px] text-[#F1C6FE] font-medium max-sm:text-sm">
              Clinic
            </span>
            <span
              className="h-[10px] w-[100px] rounded-full max-sm:w-[60px]"
              style={{
                background:
                  "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
              }}
            ></span>
          </div>
          <div className="flex max-sm:flex-col  lg:flex-nowrap w-full gap-8">
            {/* Left Side: Image */}
            <div className="md:flex-1 flex justify-center items-center">
              <img
                src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/img1.png"
                alt="Descriptive Alt Text"
                className="rounded-lg shadow-lg max-w-full max-h-[80vh] object-cover"
              />
            </div>

            {/* Right Side: Text */}
            <div className="flex-1 flex flex-col justify-center text-[#F6E8FB] space-y-6">
              <div className="flex items-center">
                <span className="flex items-center text-sm md:text-[16px] leading-tight text-[#9C00AD] font-bold">
                  <img src={star} className="mr-[-.8vw] scale-[.5]" alt="star" /> {/* Add margin to the right of the image */}
                  Welcome to AIGNOSIS
                </span>

                {/* <img
                src={img2}
                alt="Money Icon"
                className="w-6 h-6 md:w-[200px] md:h-[150px]"
              /> */}
              </div>
              <div>
                <h1 className='font-manrope text-[rgba(255,255,255,0.75)] leading-[4vw] text-[65px] max-sm:text-[20px]'>Enhance Your Care
                  with Aignosis</h1>
                <p className='font-raleway text-[20px] mt-5'>Leverage cutting-edge tools and data-driven insights to provide better care for your patients. Partner with us to revolutionize your practice.</p>
              </div>


            </div>

          </div>

          <div className="flex flex-col items-center mt-[5vw] justify-center h-full bg-[#1A0C25] p-1 md:p-8 text-white font-raleway">
            {/* Centered Heading */}
            <span className=" md:text-5xl text-center mb-8 text-[#F6E8FB] text-[24px]">
              Key Features and Our Solutions
            </span>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full  space-y-8 md:space-y-0 md:space-x-[60px]">
              {/* Left Image */}
              <div className="flex-shrink-0">
                <img
                  src={img23}
                  alt="Description of Image"
                  className="w-full max-h-[60vh] shadow-lg"
                />
              </div>

              {/* Right Text */}
              <div className="text-lg flex flex-col gap-4  max-w-lg text-[#ffff] font-manrope text-[20px]">
                {/* <p>
                Embark on a journey through our narrative, where innovation meets purpose.
              </p> */}
                {/* <p>Lorem ipsum dolor sit amet consectetur. Sit non diam justo fames. Blandit et purus mollis convallis malesuada egestas risus quam enim. Semper lorem rhoncus et felis tristique tellus volutpat orci. Dui elementum a sed.</p> */}
                <h2 className='font-bold text-xl'>Effortless Screening Setup
                </h2>
                <ul className="mt-4 font-manrope list-disc pl-5">
                  <li>A plug-and-play developmental screening solution using webcams.</li>
                  <li>Quick integration into existing clinic/hospital systems without additional hardware costs.</li>
                  <li>Provides holistic, data-driven insights about each child's growth.</li>
                  <li>Allows digital connection with psychologists for detailed assessments.</li>
                </ul>


              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#1A0C25] p-1 md:p-6 text-white font-raleway">


            {/* Content Section */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full  space-y-8 md:space-y-0 md:space-x-[60px]">



              <div className="text-lg flex flex-col gap-4  max-w-lg text-[#ffff] font-manrope text-[20px]">
                {/* <p>
                Embark on a journey through our narrative, where innovation meets purpose.
              </p>
              <p>Lorem ipsum dolor sit amet consectetur. Sit non diam justo fames. Blandit et purus mollis convallis malesuada egestas risus quam enim. Semper lorem rhoncus et felis tristique tellus volutpat orci. Dui elementum a sed.</p> */}
                <h2 className='font-bold text-xl'>Accurate Diagnosis at your Clinic.

                </h2>
                <ul className="mt-4 font-manrope list-disc pl-5">
                  <li>Proprietary AI algorithms analyze subtle biomarkers (e.g., gaze, attention, facial expressions) for early detection of autism and other neurodevelopmental disorders.</li>
                  <li>Results provided within minutes, enabling swift clinical decision-making with therapeutic intervention.</li>
                </ul>

              </div>
              {/* Left Image */}
              <div className="flex-shrink-0">
                <img
                  src={img24}
                  alt="Description of Image"
                  className="w-full max-h-[60vh] shadow-lg"
                />
              </div>
            </div>
          </div>
          {/* <div className='flex justify-center items-center'>
          <img src={img4} alt="" />
        </div> */}
          <div className="flex flex-col items-center justify-center bg-[#1A0C25] p-1 md:p-6 text-white font-raleway">


            {/* Content Section */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full  space-y-8 md:space-y-0 md:space-x-[60px]">
              {/* Left Image */}
              <div className="flex-shrink-0">
                <img
                  src={img25}
                  alt="Description of Image"
                  className="w-full max-h-[60vh] shadow-lg"
                />
              </div>

              <div className="text-lg flex flex-col gap-4  max-w-lg text-[#ffff] font-manrope text-[20px]">
                {/* <p>
                Embark on a journey through our narrative, where innovation meets purpose.
              </p>
              <p>Lorem ipsum dolor sit amet consectetur. Sit non diam justo fames. Blandit et purus mollis convallis malesuada egestas risus quam enim. Semper lorem rhoncus et felis tristique tellus volutpat orci. Dui elementum a sed.</p> */}
                <h2 className='font-bold text-xl'>Enhanced Patient Engagement
                </h2>
                <ul className="mt-4 font-manrope list-disc pl-5">
                  <li>Interactive and child-friendly screening videos ensure high cooperation rates with the child getting screened without even knowing.</li>
                  <li>Non-invasive, stress-free process for both children and parents.</li>
                  <li>No need for detailed, expensive diagnosis.</li>
                </ul>

              </div>
            </div>
          </div>
          <div>
            <Comparison />
          </div>
          <div>
            <Trusted />
          </div>
        </div>
        <div>
          <Reports />
        </div>
        <div>
          <Awards />
        </div>
        <div>
          {/* <Endrosed /> */}
        </div>
        <BlogFooter />
      </div>
    </>
  )
}

export default ClinicMain;
