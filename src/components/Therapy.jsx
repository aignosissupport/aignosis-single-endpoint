import React, { useState } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import PriceBody from './Priceplan/PriceBody';
import PricepageBanefits from './Priceplan/PricepageBanefits';
import HowitWorks from './Priceplan/HowitWorks';
import ContactPage from './ContactPage';
import BlogFooter from './BlogPages/BlogFooter';
import HowtoUseOptically from './Priceplan/HowtoUseOptically';
import CustomerLove from './Priceplan/CustomerLove';
import CustomerLove2 from './Priceplan/CustomerLove2';
import Features from './homeBrain/Features';
import FactorImpacting from './Priceplan/FactorImpacting';
import SEO from './config/Seo'
import Offer from './Offer';
import Newnavbar from './Newnavbar';
import PriceBody1 from './Priceplan/PriceBody1';
import WhatsAppButton from './WhatsAppButton';

const Therapy = () => {
  const [selectedOption, setSelectedOption] = useState('Assessment');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
    <Newnavbar/>
   <SEO
   canonicalUrl={"https://aignosis.in/prices"}
   metaDescription={"Check out Aignosis' competitive pricing for autism assessments, psychological evaluations, and specialized care solutions. Affordable services for parents."}
   pageTitle={"Affordable Pricing for Autism Assessment & Care | Aignosis"}
   />
      <Header />
      <div className='bg-[#1A0C25] p-2 overflow-x-hidden text-white w-full h-full'>
        <div className="w-full mt-[5vw] hidden md:block h-full">
          <div className="w-full p-10 flex ml-6 gap-10">
            
            <button
              className=""
              onClick={() => handleOptionChange('Therapy')}
            >
              Therapy
            </button>
          </div>
        </div>
        <div className="w-full mt-10 md:hidden h-full">
          <div className="w-full p-4 flex justify-around gap-4">
            
            <button
              className=""
              onClick={() => handleOptionChange('Therapy')}
            >
              Therapy
            </button>
          </div>
        </div>
        <PriceBody1 selectedOption={selectedOption} />
        <PricepageBanefits />
        <WhatsAppButton/>
        <HowitWorks />
        <HowtoUseOptically />
        {/* <CustomerLove /> */}
        <Features />
        <FactorImpacting />
        <ContactPage />
      </div>
      <BlogFooter />
    </>
  );
};

export default Therapy;
