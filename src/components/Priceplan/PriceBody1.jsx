import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import brain from "../../assets/brain payment.png";
import { MdDeleteForever } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { BsArrowRightShort } from "react-icons/bs";
import { FaPaypal } from "react-icons/fa";
import { FaCcAmazonPay } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import axiosInstance from "../config/axiosInstance";
import "./PriceBody.css"
import most from './most.png'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";


import p1 from "../../assets/pricepage/p1.png"
import p2 from "../../assets/pricepage/p2.png"
import p3 from "../../assets/pricepage/p3.png"
import p4 from "../../assets/pricepage/o4.png"
import p5 from "../../assets/pricepage/p5.png"

import t1 from "../../assets/pricepage/t1.png"
import t2 from "../../assets/pricepage/t2.png"
import t3 from "../../assets/pricepage/t3.png"
import t4 from "../../assets/pricepage/t4.png"
import t5 from "../../assets/pricepage/t5.png"



const PaymentPopup = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (id, price) => {
    setSelectedCard(id); // Update the selected card ID

  };

  const handleNextStep = () => {
    if (step === 3) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setOrderConfirmed(true);
      }, 2000); // Simulate a 2-second loading period
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };
  const handleClosePopup = () => {
    if (onClose) {
      onClose(); // Calling the onClose prop to handle the closing of the popup
    }
  };

  const renderStepContent = () => {
    if (orderConfirmed) {
      return (
        <div className="text-center">
          <h1 className="text-lg font-bold text-[#B740A1]">
            Payment Successful!
          </h1>
          <p className="text-sm mt-2">
            Thank you for your purchase. Your payment has been confirmed.
          </p>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="flex mb-[9.5vw] flex-col items-center justify-center h-full">
          <div className="loader border-t-[#B740A1] border-4 border-gray-300 rounded-full w-12 h-12 animate-spin"></div>
          <p className="mt-4 text-sm">Processing your payment...</p>
        </div>
      );
    }

    switch (step) {
      case 1:
        return (
          <div>
            <h1 className="text-xs font-bold">Complete Registration Payment</h1>
            <form className="mt-5 mb-5 grid gap-4 px-5">
              <input
                type="text"
                placeholder="Your Name*"
                className="border border-[#9C00AD63] w-full px-4 py-2 rounded-sm text-xs"
              />
              <input
                type="email"
                placeholder="Your Email*"
                className="border border-[#9C00AD63] w-full px-4 py-2 rounded-sm text-xs"
              />
              <input
                type="text"
                placeholder="Phone number*"
                className="border border-[#9C00AD63] w-full px-4 py-2 rounded-sm text-xs"
              />
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Area/city"
                  className="border border-[#9C00AD63] w-full px-4 py-2 rounded-sm text-xs"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="border border-[#9C00AD63] w-full px-4 py-2 rounded-sm text-xs"
                />
              </div>
            </form>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="p-2 mb-5 max-w-lg mx-auto">
              <h1 className="font-medium text-xs mb-3">Payment Methods</h1>
              <div className="space-y-2">
                <label className="flex items-start gap-4 py-2 px-4 border rounded-md cursor-pointer hover:shadow-lg transition-shadow">
                  <input
                    type="radio"
                    name="payment"
                    className="mt-1 w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  />
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <p className="font-medium text-[12px]">
                        Credit/Debit Cards
                      </p>
                      <p className="text-gray-500 text-[10px]">
                        Pay with your Credit / Debit Card
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <FaCcVisa />
                      <SiAmericanexpress />
                      <FaCcMastercard />
                    </div>
                  </div>
                </label>

                <label className="flex items-start gap-4 py-2 px-4 border rounded-md cursor-pointer hover:shadow-lg transition-shadow">
                  <input
                    type="radio"
                    name="payment"
                    className="mt-1 w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  />
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <p className="font-medium text-[12px]">
                        Direct Bank Transfer
                      </p>
                      <p className="text-gray-500 text-[10px]">
                        Make payment directly through bank account.
                      </p>
                    </div>
                  </div>
                </label>

                <label className="flex items-start gap-4 py-2 px-4 border rounded-md cursor-pointer hover:shadow-lg transition-shadow">
                  <input
                    type="radio"
                    name="payment"
                    className="mt-1 w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  />
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <p className="font-medium text-[12px]">
                        Other Payment Methods
                      </p>
                      <p className="text-gray-500 text-[10px]">
                        Make payment through Gpay, Paypal, Paytm etc
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <FaPaypal />
                      <FaCcAmazonPay />
                      <FaGooglePay />
                      <FaCcApplePay />
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="mb-[7vw]">
            <h1 className="text-[14px] font-medium">Enter OTP</h1>
            <p className="mt-4 text-center text-[12px] text-gray-600">
              Enter your 4-digit card pin to confirm this payment
            </p>
            <div className="w-full flex justify-center gap-4 mt-6">
              {Array(4)
                .fill("")
                .map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 text-black z-50 font-manrope flex items-center justify-end bg-white bg-opacity-50">
      <div className="bg-white p-8 h-screen w-[30%]">
        <div className="flex text-[#B740A1] justify-between items-center">
          <h1 className="text-[#B740A1] text-xs">Your Cart - 1 item</h1>
          <ImCancelCircle onClick={handleClosePopup} />
        </div>
        <div className="border flex border-[#9C00AD63] rounded-2xl mt-5 w-full h-[10vw] p-4">
          <div className="w-[10vw] rounded-2xl items-center justify-center flex h-full bg-[#9C00AD63]">
            <img src={brain} alt="" />
          </div>
          <div className="text-black w-full py-2 px-4">
            <div className="flex w-full justify-between items-center">
              <h1 className="text-xs font-medium">Behavioral therapy</h1>
              <MdDeleteForever />
            </div>
            <div className="flex w-full justify-between items-center">
              <div className="">
                <h1 className="text-[10px] mt-5">6-Month Validity</h1>
                <h1 className="text-[10px]">30 Sessions at ₹600/session</h1>
                <h1 className="text-[10px]">Save ₹8000 overall!</h1>
              </div>
              <h1 className="mt-[4vw] text-sm font-bold">Rs 46000</h1>
            </div>
          </div>
        </div>
        <div className="flex mt-5 gap-2 justify-center items-center w-full">
          <p className="text-[10px]">
            Explore educational trends, teaching strategies, and edtech
            innovations that are Explore educational trends, teaching
            strategies, and edtech innovations that are{" "}
          </p>
          <div className="border gap-2 flex items-center justify-center border-[#9C00AD63] px-2 py-2 w-[15vw]">
            <h1>
              <CiSquarePlus size={20} />
            </h1>
            <h1>1</h1>
            <h1>
              <CiSquareMinus size={20} />
            </h1>
          </div>
        </div>
        <div className="flex mt-3 gap-2 w-full">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="border border-[#9C00AD63] w-full px-4 py-1 text-xs rounded-md"
          />
          <button className="bg-[#B740A1] text-white px-4 py-2 text-xs rounded-md ">
            Apply
          </button>
        </div>

        {/* Price Details */}
        <div className="mt-6">
          <div className="flex justify-between text-sm">
            <span className="text-[10px]">Subtotal</span>
            <span className="text-[10px]">₹160.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[10px]">Sales Tax (6.5%)</span>
            <span className="text-[10px]">₹4.23</span>
          </div>
          <div className="flex justify-between text-sm font-bold">
            <span className="text-[12px]">Total Due</span>
            <span className="text-[12px]">₹164.23</span>
          </div>
        </div>

        <div className="mt-5">{renderStepContent()}</div>
        {!orderConfirmed && (
          <div className="flex bg-[#F1C6FE94] items-center justify-between border-t py-4 px-5">
            {step > 1 && (
              <button
                onClick={handlePrevStep}
                className="text-black border border-[#9C00AD] px-4 py-1 rounded-full text-xs flex items-center gap-2"
              >
                <div className="w-6 h-6 rotate-180 text-white bg-[#B7407D] rounded-full flex justify-center items-center">
                  <BsArrowRightShort size={20} />
                </div>
                Back
              </button>
            )}
            <h1 className="text-sm font-bold">
              ₹164.23{" "}
              <span className="text-[10px] font-normal">Includes tax</span>
            </h1>
            <button
              onClick={handleNextStep}
              className="text-black border border-[#9C00AD] px-4 py-1 rounded-full text-xs flex items-center gap-2"
            >
              {step === 3 ? "Confirm" : "Next"}
              <div className="w-6 h-6 text-white bg-[#B7407D] rounded-full flex justify-center items-center">
                <BsArrowRightShort size={20} />
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const PriceBody1 = ({ selectedOption }) => {
  const navigate = useNavigate(); // Initialize navigation
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [amount, setAmount] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [selectedImage, setSelectedImage] = useState(null); // State to hold the selected image
  const [selectedImage2, setSelectedImage2] = useState(null); // State to hold the selected image

  const images = ["https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/120.png", "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/130.png", "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/140.png", "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/150.png", "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/160.png"]; // Image array
  const images2 = [p1, p2, p3, p4, p5]; // Image array

  const handleCardSelect = (cardIndex, cardAmount) => {
    setSelectedCard(cardIndex); // Highlight the selected card
    setAmount(cardAmount); // Update the selected amount
  };

  const handleBuyNowClick = () => {
    if (!amount) {
      alert("Please select a plan before proceeding.");
      return;
    }
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };
  const storedToken = localStorage.getItem("authToken");

  const handlePayment = async () => {
    // Check if the user is logged in
    console.log("check2",storedToken)
    if (!storedToken) {
      // Show a toast message
      // toast.error("You need to log in to proceed with the payment.");

      // Redirect after a brief delay to allow the toast message to show
      navigate("/login");
      return; // Exit the function
    }


    try {
      console.log("Initiating payment process...");

      // Create order on the backend
      const { data: order } = await axiosInstance.post(
        "/api/payment/create-order",
        { amount },
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );

      // Set up Razorpay options
      const options = {
        key: "rzp_live_bJB6v4FhsKMk9Y",
        amount: order.amount,
        currency: order.currency,
        name: "Test Payment",
        description: "Test Transaction",
        order_id: order.id,
        handler: async (response) => {
          const verificationData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            amount,
            currency: "INR",
          };

          try {
            console.log("Verifying payment...");
            const { data } = await axiosInstance.post(
              "/api/payment/verify-payment",
              verificationData,
              {
                headers: {
                  Authorization: `Bearer ${storedToken}`,
                },
              }
            );
            setPaymentStatus(data.message || "Payment successful!");
            console.log("Payment verified:", data);
          } catch (error) {
            console.error("Payment verification failed:", error);
            setPaymentStatus("Payment verification failed.");
          }
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
      toast.error("Failed to initiate payment. Please try again.");
    }
  };

  const therapyCards = [
    {
      amount: 5000,
      discount: "Get 50% off by applying code",
      sessions: 10,
      sessionCost: 500,
      validity: "3-Month Validity",
      savings: 5000,
    },
    {
      amount: 7500,
      discount: "Get 50% off by applying code",
      sessions: 15,
      sessionCost: 500,
      validity: "3-Month Validity",
      savings: 7500,
    },
    {
      amount: 10000,
      discount: "Get 50% off by applying code",
      sessions: 20,
      sessionCost: 500,
      validity: "3-Month Validity",
      savings: 10000,
    },
  ];
  return (
    <>
      <ToastContainer />
      <div className="">
        <div className=" hidden md:flex w-full h-full font-raleway 2xl:p-10 md:p-4 2xl:px-[5vw] md:px-10">
          <div className="flex">
            {/* Left Column: Thumbnails */}
            <div className="flex w-[20%] overflow-hidden flex-col gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-[15vw] h-[10vw] bg-[#D9D9D9] cursor-pointer"
                  onClick={() => setSelectedImage(image)} // Update selected image on click
                >
                  <img className="max-sm:w-full w-[75%] h-full" src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
                
              ))}
            </div>

            {/* Right Column: Display Selected Image */}
            <div className="flex ml-[1vw] w-[40vw] h-[43.75vw] overflow-hidden">
              <div className="w-[40vw] h-[43.75vw] bg-[#D9D9D9]">
                <img
                  className="w-full h-full object-cover"
                  src={selectedImage || images[0]} // Default to the first image if none is selected
                  alt="Selected"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="w-[40%] pr-4">
            <div className="flex flex-col">
              <h1 className="text-4xl">
                Select best therapy plan  For Your Child's Needs

              </h1>
              <p className=" text-xs mt-4  pr-6 font-montserrat text-[#F6E8FB]">
                Find the ideal support plan tailored to your child’s unique journey. Our options are designed to provide targeted guidance,whether for developmental assessments, therapy, or academic support, ensuring a comprehensive approach to their growth and success.
              </p>

              <p className=" text-xs mt-4 pr-6 font-montserrat italic text-[#F6E8FB]">
                "Looking to support another child’s journey? You can also gift this assessment, offering meaningful support and valuable insights to families navigating similar paths."
              </p>
              {/* <p className="italic text-xs mt-4 text-[#F6E8FB]">
              "Looking to support another child’s journey? You can also gift
              this assessment, offering meaningful support and valuable insights
              to families navigating similar paths."
            </p> */}
            </div>
            {/* <div className="mt-4 font-montserrat">
                <h1>700₹</h1>
                <div className="text-[9px]">
                  <h1 className="text-[#F6E8FB]">originally ₹2000</h1>
                  <h1 className="text-[#F6E8FB]">(Comprehensive Evaluation)</h1>
                  <h1 className="text-[#F6E8FB]">Includes Formal Report</h1>
                  <h1 className="text-[#F6E8FB]">Detailed Explanation</h1>
                  <h1 className="text-[#F6E8FB]">Easy & fast procedure</h1>
                </div>
              </div> */}
            {/* <div className="mt-4">
                <h1>Benefits</h1>
              </div> */}
            {/* <div className="">
                <div className="">
                  <div className="mt-2 flex gap-4">
                    <h1 className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[11.5vw] text-center flex justify-center items-center">
                      Better Social Skills & Communication
                    </h1>
                    <h1 className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[11.5vw] flex justify-center items-center">
                      Stronger Emotional Connection
                    </h1>
                    <h1 className="bg-[#43284C4D] px-2 py-2 text-center rounded-lg text-[10px] w-[11.5vw] flex justify-center items-center">
                      Happier Families with Clear Guidance
                    </h1>
                  </div>
                  <div className="mt-2 flex gap-4">
                    <h1 className="bg-[#43284C4D] px-2 py-2 text-center rounded-lg text-[10px] w-[11.5vw] flex justify-center items-center">
                      Faster Developmental Growth
                    </h1>
                    <h1 className="bg-[#43284C4D] px-2 py-2 text-center rounded-lg text-[10px] w-[11.5vw] flex justify-center items-center">
                      Improved Focus & Learning
                    </h1>
                    <h1 className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[11.5vw] flex justify-center items-center">
                      Boosted Confidence & Happiness
                    </h1>
                  </div>
                </div>
              </div> */}
            {/* <div className="mt-5">
                <div className="flex gap-5">
                  <div className="w-[50%] h-full border bg-[#43284C4D] border-[#B740A1] rounded-3xl p-6">
                    <div className="w-[5vw] h-[2vw] bg-[#B7407D54] rounded-full flex justify-center items-center">
                      <h1 className="text-xs">33% Off!</h1>
                    </div>
                    <h1 className="mt-3">Aignosis Screening – Standard</h1>
                    <h1 className="text-[9px]">Includes Autism Screening Test + Expert Consultation</h1>
                    <h1 className="mt-3 font-manrope">₹599 <span className="text-[10px]">(₹1,199)</span></h1>
                    <h1 className="text-xs">(MRP incl. all taxes)</h1>
                  </div>
                  <div className="w-[60%] h-full border bg-[#43284C4D] border-[#5455694D] rounded-3xl p-6">
                    <div className="w-[5vw] h-[2vw] bg-[#B7407D54] rounded-full flex justify-center items-center">
                      <h1 className="text-xs">33% Off!</h1>
                    </div>
                    <h1 className="mt-3">Aignosis Screening – Comprehensive</h1>
                    <h1 className="text-[9px]">Includes Autism Screening Test + Expert Consultation + Personalized Home Therapy Plan + Assessments with 3 Therapy Sessions</h1>
                    <h1 className="mt-3 font-manrope">₹2,899 <span className="text-[10px]">(₹3,899)</span></h1>
                    <h1 className="text-xs">(MRP incl. all taxes)</h1>
                  </div>
                </div>
              </div>  */}
            <div className="mt-5">
              <div className="">
                <h1 className="text-2xl font-semibold text-white">Add Therapy</h1>
              </div>
              <div className="flex mt-6 h-full overflow-x-auto scrollbar-hidden gap-4 relative">
                {therapyCards.map((card, index) => (
                  <div
                    key={index}
                    className={`p-8 rounded-3xl w-full cursor-pointer bg-[#261431] ${selectedCard === index ? "border-2 rounded-3xl border-[#B7407D54]" : ""
                      }`}
                    onClick={() => handleCardSelect(index, card.amount)}
                  >
                    {index === 1 && (
                      <img
                        src={most}
                        alt="Most Popular"
                        className="absolute -top-2 left-1/6 transform -translate-x-1/2 w-20"
                      />
                    )}

                    <div className="bg-[#43284C4D] rounded-lg p-4 text-white w-[90%] sm:w-[18vw] md:w-[22vw] lg:w-[15vw]">
                      <div className="text-center mb-4">
                        <span className="bg-[#B7407D54] text-xs rounded-full px-1 py-1">
                          {card.discount} Off!
                        </span>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-semibold">
                          ₹{card.amount}{" "}
                          <span className="line-through text-gray-400">
                            ₹{card.amount + card.savings}
                          </span>
                        </p>

                        <p className="text-xs mt-2">{card.validity}</p>
                        <p className="text-xs">
                          {card.sessions} Sessions at ₹{card.sessionCost}/session
                        </p>
                        <p className="text-xs font-bold mt-2">
                          Save ₹{card.savings} overall!
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
              <div className="flex mt-5 gap-4">
                <div className="relative w-full flex justify-center items-center rounded-full p-[2px] bg-gradient-to-r opacity-60 from-[#D24074] to-[#6518B4]">
                  <div className="w-full rounded-full p-[2px] bg-[#1A0C25]"
                    onClick={() => {
                      if (navigator.share) {
                        navigator
                          .share({
                            title: "Check this out!",
                            text: "I found something interesting for you.",
                            url: window.location.href, // Current page URL
                          })
                          .then(() => console.log("Content shared successfully"))
                          .catch((error) => console.error("Error sharing content", error));
                      } else {
                        alert("Web Share API is not supported in your browser.");
                      }
                    }}
                  >
                    <button className="w-full text-sm px-5 py-2 bg-transparent text-white rounded-lg">
                      Share
                    </button>
                  </div>
                </div>
                <div className="relative w-full flex justify-center items-center rounded-full p-[2px] bg-gradient-to-r from-[#D24074] to-[#6518B4]">
                  <div className="w-full rounded-full p-[2px] bg-[#1A0C25]">
                    <button
                      //   onClick={handleBuyNowClick}
                      onClick={handlePayment}
                      className="w-full text-sm px-5 py-2 bg-transparent text-white rounded-lg"
                    >
                      Pre order
                    </button>
                  </div>
                </div>
              </div>
              {/* <div className="flex mt-5 gap-4">
                <div className="relative w-full flex justify-center items-center rounded-full p-[2px] bg-gradient-to-r from-[#D24074] to-[#6518B4]  opacity-60">
                    <div className="w-full rounded-full p-[2px] bg-[#1A0C25]">
                      <button className="w-full text-sm px-5 py-2 bg-transparent text-white rounded-lg">
                        Add to cart
                      </button>
                    </div>
                  </div> 
              </div> */}
            </div>
            {/* <div className="flex border-4 p-4 border-[#43284C4D] rounded-full flex-col justify-center items-center mt-[2vw]">
              <h3 className="text-lg font-semibold">Coming Soon</h3>
              <p className="text-sm mt-1">Stay tuned for exciting updates!</p>
              <a
                href="https://wa.me/+918209860578"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 p-2 px-[3vw] bg-green-500 text-white text-2xl rounded-full shadow hover:bg-green-600 transition-all flex items-center gap-2"
              >
                <FaWhatsapp /> <span className="text-sm">Chat Now</span>
              </a>
            </div> */}
          </div>
        </div>
        <div className="block md:hidden w-full h-full font-raleway p-4 gap-4">
          <div className="flex flex-col gap-4 items-center">
            {/* Center Image */}
            <div className="w-[90vw] h-[80vw] bg-[#D9D9D9]">
              <img
                className="w-full h-full object-center"
                src={selectedImage || images[0]} // Default to the first image if none is selected
                alt="Selected"
              />
            </div>

            {/* Left Column */}
            <div className="flex gap-2 w-full mt-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-[20vw] h-[20vw] bg-[#D9D9D9] cursor-pointer"
                  onClick={() => setSelectedImage(image)} // Update selected image on click
                >
                  <img className="w-full h-full object-cover" src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
            {/* Text Content */}
            <div className="text-left mt-4 px-2">
              <span className="text-xl font-bold">
                Select Perfect Plan For Your Child's Needs
              </span>
              <p className="text-xs mt-2 font-montserrat text-[#F6E8FB]">
                Find the ideal support plan tailored to your child’s unique
                journey. Our options are designed to provide targeted guidance,
                whether for developmental assessments, therapy, or academic
                support, ensuring a comprehensive approach to their growth and
                success.
              </p>
              <p className="italic text-xs mt-2 text-[#F6E8FB]">
                "Looking to support another child’s journey? You can also gift
                this assessment, offering meaningful support and valuable insights
                to families navigating similar paths."
              </p>
            </div>

            {/* Pricing */}
            {/* <div className="text-left w-full px-2 font-montserrat">
                <span className="text-2xl">700₹</span>
                <div className="text-[10px] mt-2 text-[#FFFEF8]">
                  <p>originally ₹2000</p>
                  <p>(Comprehensive Evaluation)</p>
                  <p>Includes Formal Report</p>
                  <p>Detailed Explanation</p>
                  <p>Easy & fast procedure</p>
                </div>
              </div> */}

            {/* Benefits */}
            {/* <div className="mt-4">
                <h1 className="text-lg text-left px-2 font-semibold">Benefits</h1>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[40%] text-center">
                    In-Depth Assessment
                  </span>
                  <span className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[40%] text-center">
                    Personalized Therapy
                  </span>
                  <span className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[40%] text-center">
                    Adaptive Learning Support
                  </span>
                  <span className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[40%] text-center">
                    Continuous Feedback
                  </span>
                </div>
              </div> */}
            {/* <div className="mt-5">
                <div className="flex flex-col gap-5">
                  <div className="w-full h-full border bg-[#43284C4D] border-[#B740A1] rounded-3xl p-6">
                    <div className="w-[15vw] h-[8vw] bg-[#B7407D54] rounded-full flex justify-center items-center">
                      <h1 className="text-xs">33% Off!</h1>
                    </div>
                    <h1 className="mt-3">Aignosis Screening – Standard</h1>
                    <h1 className="text-[9px]">Includes Autism Screening Test + Expert Consultation</h1>
                    <h1 className="mt-3 font-manrope">₹599 <span className="text-[10px]">(₹1,199)</span></h1>
                    <h1 className="text-xs">(MRP incl. all taxes)</h1>
                  </div>
                  <div className="w-full h-full border bg-[#43284C4D] border-[#5455694D] rounded-3xl p-6">
                    <div className="w-[15vw] h-[8vw] bg-[#B7407D54] rounded-full flex justify-center items-center">
                      <h1 className="text-xs">33% Off!</h1>
                    </div>
                    <h1 className="mt-3">Aignosis Screening – Comprehensive</h1>
                    <h1 className="text-[9px]">Includes Autism Screening Test + Expert Consultation + Personalized Home Therapy Plan + Assessments with 3 Therapy Sessions</h1>
                    <h1 className="mt-3 font-manrope">₹2,899 <span className="text-[10px]">(₹3,899)</span></h1>
                    <h1 className="text-xs">(MRP incl. all taxes)</h1>
                  </div>
                </div>
              </div> */}
            <div className="mt-4">
              <span className="text-lg text-left px-2 font-semibold">Benefits</span>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[40%] text-center">
                  Better Social Skills & Communication
                </span>
                <span className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[40%] text-center">
                  Stronger Emotional Connection
                </span>
                <span className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[40%] text-center">
                  Happier Families with Clear Guidance
                </span>
                <span className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[40%] text-center">
                  Boosted Confidence & Happiness
                </span>
                <span className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[40%] text-center">
                  Faster Developmental Growth                  </span>
                <span className="bg-[#43284C4D] px-2 py-2 rounded-lg text-[10px] w-[40%] text-center">
                  Improved Focus & Learning                  </span>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-xl font-bold text-white text-left px-2">
                Add Therapy
              </span>
              <div className="flex flex-wrap justify-center gap-4 mt-4 ">
                {therapyCards.map((card, index) => (
                  <div
                    key={index}
                    className={`relative p-8 rounded-3xl cursor-pointer w-full bg-[#261431] ${selectedCard === index ? "border-2 rounded-3xl border-[#B7407D54]" : ""
                      }`}
                    onClick={() => handleCardSelect(index, card.amount)}
                  >
                    {index === 1 && (
                      <img
                        src={most}
                        alt="Most Popular"
                        className="absolute top-[-5px] left-1/5 transform -translate-x-1/2 w-16 sm:w-20"
                      />
                    )}

                    <div className="mb-2">
                      <span className="bg-[#B7407D54] text-xs rounded-full px-2 py-1">
                        {card.discount}
                      </span>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">
                        ₹{card.amount}{" "}
                        <span className="line-through text-gray-400">₹{card.amount + card.savings}</span>
                      </p>
                      <p className="text-xs mt-2">{card.validity}</p>
                      <p className="text-xs">{card.sessions} Sessions at ₹{card.sessionCost}/session</p>
                      <p className="text-xs font-bold mt-2">
                        Save ₹{card.savings} overall!
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <button onClick={() => {
                if (navigator.share) {
                  navigator
                    .share({
                      title: "Check this out!",
                      text: "I found something interesting for you.",
                      url: window.location.href, // Current page URL
                    })
                    .then(() => console.log("Content shared successfully"))
                    .catch((error) => console.error("Error sharing content", error));
                } else {
                  alert("Web Share API is not supported in your browser.");
                }
              }}
                className="w-[100%] text-sm px-5 py-2 bg-gradient-to-r from-[#D2407480] to-[#6518B480] text-white rounded-lg">
                Share
              </button>
               {/* <button className="w-[40%] text-sm px-5 py-2 bg-gradient-to-r from-[#D2407480] to-[#6518B480] text-white rounded-lg">
                  Add to cart
                </button>  */}
              <button
                onClick={handlePayment}
                className="w-[100%] text-sm px-5 py-2 bg-gradient-to-r from-[#D2407480] to-[#6518B480] text-white rounded-lg"
              >
                Pre order
              </button>
            </div>
            {/* <div className="flex w-full border-4 p-4 border-[#43284C4D] rounded-full flex-col justify-center items-center mt-[8vw]">
              <h3 className="text-lg font-semibold">Coming Soon</h3>
              <p className="text-sm mt-1">Stay tuned for exciting updates!</p>
              <a
                href="https://wa.me/+918209860578"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 p-2 px-[3vw] bg-green-500 text-white text-2xl rounded-full shadow hover:bg-green-600 transition-all flex items-center gap-2"
              >
                <FaWhatsapp /> <span className="text-sm">Chat Now</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>



      {/* <PaymentPopup isVisible={isPopupVisible} onClose={handleClosePopup} /> */}
      {paymentStatus && <p className="payment-status">{paymentStatus}</p>}
    </>
  );
};

export default PriceBody1;
