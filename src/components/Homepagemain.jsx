import React from "react";
import Homepage from "./Homepage";
import Laptop from "./Laptop";

import ContactPage from "./ContactPage";
import WhatsAppButton from "./WhatsAppButton";
import BlogFooter from "./BlogPages/BlogFooter";
import SEO from "./config/Seo";
import Offer from "./Offer";
import Newnavbar from "./Newnavbar";
import Flyer from "./Flyer";
const Homepagemain = () => {
  return (

    <>
      <SEO
        pageTitle="AI-Powered Early Autism Screening Tools | Aignosis"
        canonicalUrl="https://aignosis.in/"
        metaDescription="Explore AI-powered tools by Aignosis for early autism screening, diagnosis, and detection. Revolutionize autism care with advanced technology."
      />

      <div className="bg-[#1A0C25] overflow-x-hidden">
        <Homepage />
        <Offer/>
        <WhatsAppButton />
        {/* <Laptop /> */}
        <ContactPage />
        <BlogFooter />
      </div>
    </>
    // </AnimatedIntro>
  );
};

export default Homepagemain;
