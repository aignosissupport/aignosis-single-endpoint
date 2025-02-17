import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowUpRight } from "react-icons/go";
import brain from "../assets/images/brain.png";
import fetchData from "./config/fetchData";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import teddy from '../assets/PopUps/teddy.png'
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PartnershipPage = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    city: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const form = useRef();
  const imageRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768; // Define mobile breakpoint
    const yPosition = isMobile ? 720 : 300;
    // Animate image on scroll
    const imageAnimation = gsap.to(imageRef.current, {
      y: yPosition, // The final position when fully scrolled
      autoAlpha: 5, // Fade in the image
      ease: "none", // No easing, for a direct scroll correlation
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 35%", // Animation starts when the top of the image reaches 25% of the viewport
        end: "top 60%",
        scrub: 4, // Smooth scrubbing for responsive movement
      },
    });

    // Animate cards on scroll with better timing and effects
    cardsRef.current.forEach((card, index) => {
      const delay = index * 0.1; // Reduced delay for quicker animations
      gsap.fromTo(
        card,
        { y: 50, autoAlpha: 0 }, // Start cards slightly lower and fully transparent
        {
          y: 0, // Move to original position
          autoAlpha: 1,
          duration: 0.8, // Shorter duration for a snappier feel
          ease: "back.out(1.7)", // Add a bounce effect for smoother entry
          delay: delay, // Delay between card animations
          scrollTrigger: {
            trigger: card,
            start: "top 60%", // Start animating when the card is 60% from the top of the viewport
            toggleActions: "play none none none", // Play animation when entering viewport
          },
        }
      );
    });

    return () => {
      // Clean up the scroll triggers when the component unmounts
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      // Allow only digits and limit to 10 characters
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setData((prevData) => ({
        ...prevData,
        phone: numericValue,
      }));
    } else{
    setData((prevData) => ({
      ...prevData,
      [name]: name === "age" ? Number(value) : value, // Ensure age is a number
    }));
  }
  };

  // Function to send data to the API
  const contact = async (e) => {
    e.preventDefault();
     // Check if phone number is exactly 10 digits
  if (data.phone.length !== 10) {
    toast.error("Phone number must be exactly 10 digits!");
    return;
  }

    try {
      setLoading(true);
      const {response} = await fetchData({
        url: '/api/otp/contact-us',
        method: 'POST',
        data,
      });
      console.log('API response:', response);
      if(response.status == 200){
        toast.success("Message sent successfully!");
      }
      setLoading(false);
      // alert('Message sent successfully!');
         
      // Reset the form after successful submission
      setData({
        name: '',
        age: '',
        city: '',
        phone: '',
        message: '',
      });
    
   
    } catch (err) {
      console.error('Error sending message:', err.message);
      toast.error("Failed to send the message. Please try again.");
      setData({
        name: '',
        age: '',
        city: '',
        phone: '',
        message: '',
      });
      // alert('Failed to send the message. Please try again.');
    }
  };

  return (
    <>
     <ToastContainer />
    <div className="min-h-screen 2xl:px-[8rem] md:px-[4rem] mt-14 text-white flex flex-col w-full  max-sm:p-[2vw] font-montserrat bg-[#1A0C25] ">
      <div className="w-full flex 2xl:px-[2rem] py-[3rem] flex-col justify-center  items-center border-t rounded-[10rem]  max-sm:rounded-[5rem] border-[#B874B580] md:mb-10 ">
        <div className="flex flex-col justify-center items-center px-4 md:mb-10">
          <div className="flex justify-center gap-5 items-center mb-4">
            <span
              className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
              style={{
                background:
                  "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
              }}
            ></span>
            <spam className="text-[#EDD0E7]">Connect with Sales</spam>
            <span
              className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
              style={{
                background:
                  "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
              }}
            ></span>
          </div>
          <div className="px-4 md:px-[8vw] mb-4 text-center">
            <span className="2xl:text-5xl md:text-3xl tracking-tight font-semibold md:leading-[3rem]">
              If you are a healthcare provider, payor, or caregiver <br /> and
              want to partner with Ai.gnosis, let’s talk!
            </span>
          </div>
          <div className="px-4 2xl:text-lg mt-4 md:text-xs md:px-[20vw] text-center">
            <p>
              Emphasis on partnerships within India, focusing on integration
              with local healthcare.
            </p>
          </div>
        </div>

        {/* Partnership Benefits Boxes in 2x2 Grid */}
        <div className="w-full relative max-sm:max-w-[83vw] max-w-[60vw] grid grid-cols-1 md:grid-cols-2 gap-[10vw] justify-center items-center mt-10 px-4 md:px-0 mb-10">
          {[
            {
              title: "Early Identification of Developmental Disorders",
              description:
                "The solution enables you to identify developmental delays like autism at an early stage, providing you with the opportunity to begin interventions when they are most effective.",
            },
            {
              title: "Evidence-Based and Clinically Validated",
              description:
                "Our system is backed by clinical research and expert validation, ensuring that the results you receive are scientifically sound and can be trusted for accurate diagnosis.",
            },
            {
              title: "Streamlined Workflow for Pediatric Practices",
              description:
                "Designed for simplicity, our tool integrates seamlessly into your existing workflow, offering fast and accurate results without disrupting your practice's operations.",
            },
            {
              title: "Improved Patient Outcomes with Early Intervention",
              description:
                "By using our early detection tool, you can ensure that children receive timely intervention, which can lead to improved cognitive, social, and emotional development, enhancing their overall quality of life.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="2xl:p-6 p-4 md:p-[2rem] 2xl:h-[18vw] md:h-[16vw] rounded-3xl w-auto shadow-lg mb-6"
              ref={(el) => (cardsRef.current[index] = el)} // Store reference to each card
              style={{
                background: "radial-gradient(circle, #43284C 0%, #1A0C25 100%)",
              }} // Apply radial gradient 43284C 1A0C25 here
            >
              <h3 className="2xl:text-2xl border-l-2 pl-6 border-[#811F67] text-lg md:text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 md:text-xs test-sm 2xl:text-lg text-white p-2 ">
                {item.description}
              </p>
              <div className="w-full h-1 border-b-2 border-[#811F67] mt-5"></div>
            </div>
          ))}
        </div>

        {/* Center Image between Boxes */}
        <div
          className="md:flex hidden absolute justify-center items-center"
          ref={imageRef}
        >
          <img
            src={brain}
            alt="Brain Icon"
            className="2xl:w-[10rem] md:w-[6rem] md:h-[6rem] w-[10rem] md:scale-[2.5] 2xl:h-[10rem] 2xl:scale-[2]"
            loading="lazy"
          />
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full flex flex-col justify-center items-center md:px-4 mb-10">
        <div className="w-full text-center px-[10vw] md:px-[25vw]">
          
          <h3 className="2xl:text-xl font-medium md:text-2xl mb-10 max-sm:text-center">
            Fill up the form, and our team will respond promptly to assist you.
            
          </h3>
        
          <form onSubmit={contact} className="space-y-4 md:px-5 flex flex-col items-center w-full justify-center md:text-sm 2xl:text-lg">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={data.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-[#2521276B]  rounded-md"
            />
            <input
              type="age"
              name="age"
              placeholder="Your Age"
              value={data.age}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-[#2521276B]  rounded-md"
            />
            {/* <input
              type="email"
              placeholder="Your Email*"
              className="w-full px-4 py-2 bg-[#2521276B]  rounded-md"
            /> */}
            <input
              type="text"
              name="city"
              placeholder="Your City"
              value={data.city}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-[#2521276B]  rounded-md"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={data.phone}
              required
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-[#2521276B]  rounded-md"
            />
            <textarea
               name="message"
               placeholder="Your Message"
               value={data.message}
               onChange={handleInputChange}
               required
              className="w-full h-32 px-4 py-2 bg-[#2521276B]  rounded-md resize-none"
            ></textarea>
            <div className=" max-sm:mx-auto 2xl:w-[14rem] md:w-[9rem] w-[8rem] cursor-pointer mt-[1.5rem] border-2 border-[#B740A1] gap-2 rounded-full flex justify-center items-center text-[#0D0C0A] h-[3rem] md:h-[3rem] group bg-transparent hover:bg-[#B740A1] transition-colors duration-300">
              <button disabled={loading} type="submit" className="text-white text-sm md:text-sm">
                Submit
              </button>
              <div className="2xl:w-[2.5rem] md:w-[1.8rem] w-[1.8rem] h-[1.8rem] md:h-[1.8rem] 2xl:h-[2.5rem] justify-center flex items-center text-white text-lg md:text-base group-hover:bg-white group-hover:text-black rounded-full bg-[#B740A1]">
                <GoArrowUpRight />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default PartnershipPage;
