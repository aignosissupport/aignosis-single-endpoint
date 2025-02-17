import React, { useEffect, useRef } from "react";
import Divider from "../aboutus/Divider";
import img5 from "../../assets/clinic/img5.png";
import animal from "../../assets/animal.png";
import img1 from "../../assets/homepage/image i1.png";
import img2 from "../../assets/ZenBook Duo 15.png";
import img3 from "../../assets/homepage/image i3.png";
import img4 from "../../assets/image69.png";
import gsap from "gsap";
import p4 from "../../assets/PopUps/p.png";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import p3 from '../../assets/PopUps/p3.png'

gsap.registerPlugin(ScrollTrigger);

const Features = () => {

  const p3Ref = useRef(null);  // Create a reference for p3 image

    useEffect(() => {
        // GSAP animation for p3 image
        gsap.fromTo(p3Ref.current, 
            { opacity: 0, x: 200 }, 
            {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: p3Ref.current,
                    start: "top 80%",  // Animation starts when p3 image top reaches 80% of the viewport height
                    end: "top center", // Animation ends when p3 image top reaches the center of the viewport
                    scrub: true,
                }
            }
        );
    }, []);
  const cardRefs = useRef([]);
  const lightRefs = useRef([]);

  const addToRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  const handleMouseMove = (event, card, light) => {
    if (!card || !light) return;

    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to the card
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Move light to follow the cursor
    gsap.to(light, {
      x: mouseX - 100,
      y: mouseY - 100,
      duration: 0.1,
    });

    // Calculate normalized position for card rotation
    const normalizedX = (mouseX / rect.width) * 2 - 1; // Range: -1 to 1
    const normalizedY = (mouseY / rect.height) * 2 - 1; // Range: -1 to 1

    // Limit rotation to -60 to 60 degrees
    const rotationX = normalizedY * 10;
    const rotationY = normalizedX * -10;

    // Animate the specific card
    gsap.to(card, {
      rotationX,
      rotationY,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.5,
    });
  };

  const resetCard = (card, light) => {
    if (!card || !light) return;

    // Reset card and light to original positions
    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      transformPerspective: 10000,
      ease: "power2.out",
      duration: 0.5,
    });

    gsap.to(light, {
      opacity: 0,
      duration: 0.1,
    });
  };

  const showLight = (light) => {
    gsap.to(light, {
      opacity: 0.2,
      duration: 0.1,
    });
  };

  return (
    <div className="bg-[#1A0C25] min-h-screen font-raleway  p-[4vw] ">
      <div>
        {/* <img src={animal} className='w-[00px]' alt="" /> */}
        <Divider title="Feature" desc="" titleImg={p3} subtitle="" />
        <div className="flex justify-center items-center">
          <h3 className="text-[#F6E8FB] font-bold font-raleway text-center max-sm:text-center text-[40px]  max-sm:text-[24px]">
            Our Approach to Key Features and Solutions
          </h3>
          <img src={p4} className="w-[100px] hidden md:block max-sm:w-[50px] -mt-10" alt="" ref={p3Ref}/>
        </div>
      </div>
      <div className="flex flex-col mt-[3vw] justify-center items-center  gap-[1.5vw] p-4">
        {/* Blank Divs */}
        <div className="flex max-sm:flex-col gap-[1.5vw]">
          <div
            className="w-[40vw] h-[35vw] md:h-[25vw] max-sm:w-[300px] max-sm:h-full p-4 bg-[#43284C4D] rounded-lg border border-[#5455694D]"
            ref={(el) => addToRefs(el, cardRefs)}
            onMouseMove={(e) =>
              handleMouseMove(e, cardRefs.current[0], lightRefs.current[0])
            }
            onMouseLeave={() =>
              resetCard(cardRefs.current[0], lightRefs.current[0])
            }
            onMouseEnter={() => showLight(lightRefs.current[0])}
          >
            {/* Light effect */}
            <div
              className="absolute top-0 left-0 w-[200px] h-[200px] bg-white rounded-full opacity-0 pointer-events-none"
              ref={(el) => addToRefs(el, lightRefs)}
              style={{
                filter: "blur(50px)",
                transform: "translate(-50%, -50%)",
              }}
            ></div>

            <div className="h-[60%] w-full flex justify-center items-center p-2 pt-5">
              <img className="object-contain w-[300px] h-full" src={img1} alt="" />
            </div>
            <div className="flex flex-col text-white w-full justify-center items-center px-[8vw]">
              <h4 className="font-bold text-lg mt-4">
              Comfort and Privacy of Home 
              </h4>
              <p className="text-[#C4C4C4] text-sm text-center mt-4">
              Complete the test from the comfort of your own home, ensuring privacy for both you and your child. 
              </p>
              
            </div>
          </div>
          <div className="w-[30vw] md:h-[25vw] max-sm:w-[300px] max-sm:h-full p-4 bg-[#43284C4D] rounded-lg border border-[#5455694D]"ref={(el) => addToRefs(el, cardRefs)}
            onMouseMove={(e) =>
              handleMouseMove(e, cardRefs.current[1], lightRefs.current[1])
            }
            onMouseLeave={() =>
              resetCard(cardRefs.current[1], lightRefs.current[1])
            }
            onMouseEnter={() => showLight(lightRefs.current[1])}
          >
            {/* Light effect */}
            <div
              className="absolute top-0 left-0 w-[200px] h-[200px] bg-white rounded-full opacity-0 pointer-events-none"
              ref={(el) => addToRefs(el, lightRefs)}
              style={{
                filter: "blur(50px)",
                transform: "translate(-50%, -50%)",
              }}
            ></div>
            <div className="h-[60%] w-full flex justify-center items-center p-2 pt-5">
              <img className="object-contain w-[300px] h-full" src={img2} alt="" />
            </div>
            <div className="flex flex-col text-white w-full justify-center items-center px-[5vw]">
              <h4 className="font-bold text-lg mt-4">Accurate Diagnosis</h4>
              <p className="text-[#C4C4C4] text-sm text-center mt-2">
              Backed by experts, you can trust the system for accurate insights into your child’s development 
              </p>
             
            </div>
          </div>
        </div>
        <div className="flex max-sm:flex-col gap-[1.5vw]">
          <div className="w-[30vw] md:h-[25vw] max-sm:w-[300px] max-sm:h-full p-4 bg-[#43284C4D] rounded-lg border border-[#5455694D]"ref={(el) => addToRefs(el, cardRefs)}
            onMouseMove={(e) =>
              handleMouseMove(e, cardRefs.current[2], lightRefs.current[2])
            }
            onMouseLeave={() =>
              resetCard(cardRefs.current[2], lightRefs.current[2])
            }
            onMouseEnter={() => showLight(lightRefs.current[2])}
          >
            {/* Light effect */}
            <div
              className="absolute top-0 left-0 w-[200px] h-[200px] bg-white rounded-full opacity-0 pointer-events-none"
              ref={(el) => addToRefs(el, lightRefs)}
              style={{
                filter: "blur(50px)",
                transform: "translate(-50%, -50%)",
              }}
            ></div>
            <div className="flex flex-col text-white w-full justify-center items-center px-[4vw]">
              <h4 className="font-bold text-lg mt-4">Easy Journey</h4>
              <p className="text-[#C4C4C4] text-sm text-center mt-4">
              Get results in minutes, with an easy-to-follow process that anyone can complete.
              </p>
              
            </div>
            <div className="h-[60%] w-full flex justify-center items-center p-2 pt-5">
              <img className="object-contain w-[300px] h-full" src={img3} alt="" />
            </div>
          </div>
          <div className="w-[40vw] h-[35vw] md:h-[25vw] max-sm:w-[300px] max-sm:h-full p-4 bg-[#43284C4D] rounded-lg border border-[#5455694D]"ref={(el) => addToRefs(el, cardRefs)}
            onMouseMove={(e) =>
              handleMouseMove(e, cardRefs.current[3], lightRefs.current[3])
            }
            onMouseLeave={() =>
              resetCard(cardRefs.current[3], lightRefs.current[3])
            }
            onMouseEnter={() => showLight(lightRefs.current[3])}
          >
            {/* Light effect */}
            <div
              className="absolute top-0 left-0 w-[200px] h-[200px] bg-white rounded-full opacity-0 pointer-events-none"
              ref={(el) => addToRefs(el, lightRefs)}
              style={{
                filter: "blur(50px)",
                transform: "translate(-50%, -50%)",
              }}
            ></div>
            <div className="h-[60%] w-full flex justify-center items-center p-2 pt-5">
              <img className="object-contain w-[300px] h-full" src={img4} alt="" />
            </div>
            <div className="flex flex-col text-white w-full justify-center items-center px-[7vw]">
              <h4 className="font-bold text-lg text-center mt-4">
              Non-Invasive Testing with Just Your Webcam
              </h4>
              <p className="text-[#C4C4C4] text-sm text-center px-[1vw] mt-4">
              The test is non-invasive, requiring only a standard webcam—no needles or complex equipment.

              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
