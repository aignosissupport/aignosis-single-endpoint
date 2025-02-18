import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router, Route, and Routes
import Homepagemain from "./components/Homepagemain"; // Import the HomepageMain component
import AboutUs from "./components/AboutUs";
import PartnershipPage from "./components/PartnershipPage";
import PatientHistory from "./components/PatientHistory"; // Import the combined PatientHistory component
import Offer from "./components/Offer.jsx"; // Import the Offer component
import TestMain from "./components/testPages/TestMain";
import VideoPlayback from "./components/testPages/VideoPlayback";
import CalibrationPage from "./components/testPages/CalibrationPage";
import WebcamMicTest from "./components/testPages/WebcamMicTest";
import PriceMain from "./components/price/PriceMain";
import ReportComLast from "./components/ReportComLast";
import ScrollToTop from "./components/ScrollToTop";
import BlogPage from "./components/BlogPages/BlogPage";
import PaymentScreensMain from "./components/PaymentScreensMain";
import Toddlers from "./components/testPages/Toddlers";
import ContactPage from "./components/ContactPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ServicePage2 from "./components/servicePages/ServicePage2";
import ServicePage3 from "./components/servicePages/ServicePage3";
import ServicePage4 from "./components/servicePages/ServicePage4";
import ServicePage5 from "./components/servicePages/ServicePage5";
import ServicePage1 from "./components/servicePages/ServicePage1";
import TAndC from "./components/TAndC";
import RefundAndReschedule from "./components/RefundAndReschedule";
import LoginPage from "./components/LoginPage/LoginPage";
import BlogView from "./components/BlogPages/BlogView";
import WeWork from "./components/BlogPages/WeWork";
import ClinicMain from "./components/clinic/ClinicMain";
import Priceplan from "./components/Priceplan";

import BrainMain from "./components/homeBrain/BrainMain";

import FromDoctor from "./components/FromDoctor";
import CareerPage from "./components/Career/CareerPage";
// import AutismTest from "./components/AutismTest";
import DogCalibration from "./components/aignosisintegration/DogCalibration";
import Error from "./components/aignosisintegration/Error";
import DataCollectionPage from "./components/aignosisintegration/DataCollectionPage";
import Report from "./components/ReportPages/page1";
import Dashboard from './components/Dashboard/Dashboard';
import Profile from "./components/Dashboard/Profile";

import Profile1 from "./components/Dashboard/Profile1";
import Orderhistory from "./components/Dashboard/Orderhistory";

import Page1 from "./components/report pages/Page1";
import Page2 from "./components/report pages/Page2";
import Page3 from "./components/report pages/Page3";
import Page4 from "./components/report pages/Page4";
import Page5 from "./components/report pages/Page5";
import GeneratePDF from "./components/report pages/GeneratePDF";
import DownloadPage from "./components/testPages/DownloadPage";
import Howework from "./components/BlogPages/Howework.jsx";
import Therapy from "./components/Therapy";


// import AuthRoute from './components/config/AuthRoute';

const App = () => {
  const [offerTimeLeft, setOfferTimeLeft] = useState(10 * 60); // 10 minutes in seconds
  const [isOfferVisible, setIsOfferVisible] = useState(true);

  // Countdown timer logic
  useEffect(() => {
    if (!isOfferVisible || offerTimeLeft <= 0) return;

    const timer = setInterval(() => {
      setOfferTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup the interval on unmount
    return () => clearInterval(timer);
  }, [isOfferVisible, offerTimeLeft]);

  // Auto-hide when timer reaches 0
  useEffect(() => {
    if (offerTimeLeft <= 0) {
      setIsOfferVisible(false);
    }
  }, [offerTimeLeft]);
  return (
    <Router>
      <ScrollToTop />
      {/* {isOfferVisible && (
        <Offer
          timeLeft={offerTimeLeft}
          onClose={() => setIsOfferVisible(false)}
        />
      )} */}
      <Routes>
        {" "}
        {/* Use Routes to define all your routes */}
        <Route path="/" element={<TestMain />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/partnership" element={<PartnershipPage />} />
        <Route path="/patienthistory" element={<PatientHistory />} />{" "}
        {/* Updated route for PatientHistory */}
        <Route path="/assessments-evaluation" element={<ServicePage1 />} />
        <Route path="/speech-language" element={<ServicePage2 />} />
        <Route path="/behaviour-therapy" element={<ServicePage3 />} />
        <Route path="/occupational-therapy" element={<ServicePage4 />} />
        <Route path="/special-education" element={<ServicePage5 />} />
        <Route path="/patienthistory" element={<PatientHistory />} />{" "}
        {/* Updated route for PatientHistory */}
        <Route path="/priceplan" element={<PriceMain />} />
        <Route path="/fromdoctor" element={<FromDoctor />} />
        <Route path="/prices" element={<Priceplan />} />
        <Route path="/test" element={<Priceplan />} />
        <Route path="/report" element={<ReportComLast />} />
        <Route path="/test/fillup" element={<TestMain />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<WeWork />} />
        <Route path="/clinic" element={<ClinicMain />} />
        <Route path="/test/fillup/tod" element={<Toddlers />} />
        <Route path="/payment" element={<PaymentScreensMain />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TAndC />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/refund-reschedule" element={<RefundAndReschedule />} />
        <Route path="/brain" element={<BrainMain />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/AutismTest" element={<CalibrationPage />} />
        <Route path="/dogcalibration" element={<DogCalibration />} />
        <Route path="/video" element={<VideoPlayback />} />
        <Route path="/test/fillup" element={<TestMain />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/dataCollection" element={<DataCollectionPage />} />
        <Route path="/download" element={<Report />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/thankyou' element={<DownloadPage />} />

        <Route path='/profile1' element={<Profile1 />} />
        <Route path='/orderhistory' element={<Orderhistory />} />


        <Route path='/page1' element={<Page1 />} />
        <Route path='/page2' element={<Page2 />} />
        <Route path='/page3' element={<Page3 />} />
        <Route path='/page4' element={<Page4 />} />
        <Route path='/page5' element={<Page5 />} />
        <Route path='/Generatepdf' element={<GeneratePDF />} />
        <Route path='/Howework' element={<Howework />} />
        <Route path='/therapy' element={<Therapy />} />
    
        

       
      </Routes>
    </Router>
  );
};

export default App;
