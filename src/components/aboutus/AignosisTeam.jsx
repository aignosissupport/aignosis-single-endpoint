import React, { lazy, Suspense } from "react";
// Lazy load components
const Divider = lazy(() => import("./Divider"));
const MemberCard = lazy(() => import("./MemberCard"));
import member3 from "../../assets/members/image3.png";
import member6 from "../../assets/members/image6.png";
import member9 from "../../assets/members/image9.png";
import raj from "./raj.jpeg";
import amit from "./amit.jpeg";
import mem from "./05 (1).jpg";
import aman from '../../assets/members/aman-gupta.webp'
import nikhil from '../../assets/members/Nikhil-Kamath.jpg'
import peyush from '../../assets/members/peyush bansal.jpg'
import varun from '../../assets/members/Varun Dua.webp'
import logo1 from '../../assets/homepage/a21.png';
import logo2 from '../../assets/homepage/image a3.png';
import logo3 from '../../assets/homepage/image a2.png';
import logo4 from '../../assets/homepage/a16.png';
import logo5 from '../../assets/images/sponsered/image 89.png';
import logo6 from '../../assets/images/sponsered/image 107.png';
import logo7 from '../../assets/homepage/image a6.png';
import logo8 from '../../assets/images/sponsered/image 102.png'
import logo9 from '../../assets/homepage/a20.png';
import logo10 from '../../assets/homepage/image90.avif'
import logo11 from '../../assets/images/sponsered/image 85.png';
import logo12 from '../../assets/images/sponsered/image 71.png';
import citation from '../../assets/members/citations.jpeg'
import founders from '../../assets/members/founders.jpeg'
import raksheet from '../../assets/members/raksheet.jpeg';
import divyansh from '../../assets/members/divyansh.jpeg'

const AignosisTeam = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex rounded-2xl py-[5vw] mt-[8vw] flex-col my-8 max-sm:mx-2 mx-8 border border-solid bg-gray-800 bg-opacity-30 border-white border-opacity-10 min-h-auto">
        <Divider
          title="Our Project team"
          subtitle="The Minds Behind Ai.gnosis"
          desc={
            <>
              At Aignosis, we are driven by the vision to revolutionize early
              detection of neurodevelopmental disorders through cutting-edge AI
              technology.
              <br />
              Our passionate and diverse team brings together expertise in
              healthcare, artificial intelligence, and entrepreneurship to make
              autism screening.
              <br />
              <div className="text-center">
                accessible, affordable, and scalable for every child.
              </div>
            </>
          }
        />
        <div className="flex mt-10 max-sm:p-[0vw] max-sm:flex-col max-sm:gap-[10vw]  gap-4 px-10">
          <MemberCard
            title="Divyansh ​Mangal"
            subtitle="Co Founder & CEO"
            desc="Divyansh Mangal is a passionate entrepreneur and AI researcher dedicated to transforming healthcare accessibility. With a strong academic foundation in Physics from BITS Pilani and Quantum Information Technology from the University of Gdansk"
            src={divyansh}
            logos={[logo1, logo2]}
          />
          <MemberCard
            title="Raksheet ​Jain"
            subtitle="Co-Founder & CTO"
            desc="Raksheet Jain is an AI specialist with a B.Tech in Artificial Intelligence from Virginia Tech and NMIMS Mumbai. His technical expertise spans deep learning and AI model development, with co-authored research on diabetic retinopathy detection."
            src={raksheet}
            logos={[logo3, logo4]}
          />
        </div>
        <div className="flex flex-col mt-10 max-sm:p-[0vw] max-sm:gap-[1vw] gap-4 px-10">
          <span className="text-center text-3xl font-semibold w-full">
            Advisory Board
          </span>
          <div className="flex mt-10 max-sm:p-[0vw] max-sm:flex-col max-sm:gap-[10vw] gap-4 px-10">
            <MemberCard
              title="Dr. S. Sitaraman"
              subtitle="DIRECTOR & DEVELOPMENTAL NEUROLOGIST"
              desc="Dr. S. Sitaraman is a highly respected developmental paediatrician with over 40 years of experience in child health. As Vice-Chancellor of the Indian College of Pediatrics, he has been instrumental in shaping pediatric care in India."
              src={mem}
              logos={[logo5]}
            />
            <MemberCard
              title="Dr. Ramesh Agrawal"
              subtitle="HOD mother & child block, AIIMS Delhi"
              desc="Dr. Ramesh Agrawal is a leading expert in pediatric healthcare, serving as the Head of the Child and Mother Block at AIIMS Delhi. With over 200 publications and 300+ research papers"
              src={citation}
              logos={[logo6]}
            />
          </div>
          <div className="flex mt-10 max-sm:p-[0vw] max-sm:flex-col max-sm:gap-[10vw] gap-4 px-10">
            <MemberCard
              title="Dr. Rajesh Jain"
              subtitle="Director & Consultant Pediatrician, Raksheet Hospital, Jaipur"
              desc="Dr Rajesh Jain is a renowned paediatrician and the Director at Raksheet Hospital, Jaipur. With extensive experience in pediatric care and developmental health, Dr. Jain has been a vital contributor to Aignosis’s clinical approach."
              src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/Dr+Rajesh+Jain.PNG"
              logos={[logo7]}
            />
            <MemberCard
              title="Dr. Dhananajay Mangal"
              subtitle="Director & Consultant Pediatrician, Babylon Hospital, Jaipur"
              desc="Dr. Dhananjay Mangal brings over 27 years of pediatric healthcare experience and currently serves as the President of the Rajasthan Chapter of the Telemedicine Society of India."
              src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/dr+dhananjay.png"
              logos={[logo8]}
            />
          </div>
          <div className="flex flex-col mt-10 max-sm:p-[0vw] max-sm:gap-[1vw] gap-4 px-10">
            <span className="text-center text-3xl font-semibold w-full">
              Strategic Investors & Mentors
            </span>
            <div className="flex mt-10 max-sm:p-[0vw] max-sm:flex-col max-sm:gap-[10vw] gap-4 px-10">
              <MemberCard
                title=" Mr. Amit Jain"
                subtitle="Strategic Mentor & Investor"
                desc="Amit Jain, an alumnus of IIT Delhi, is the Co-Founder and CEO of CarDekho Group, a prominent Autotech company in India that has achieved unicorn status with a valuation of $1.2 billion in 2021."
                src={amit}
                logos={[logo9]}
              />
              <MemberCard
                title="Mr. Rajneesh Bhandari"
                subtitle="Founder, NeuroEquilibrium Diagnostic Systems Pvt. Ltd."
                desc="Rajneesh Bhandari is a seasoned entrepreneur in healthcare diagnostics, having founded NeuroEquilibrium, India’s leading vestibular diagnostic network. With 250+ centers nationwide"
                src={member9}
                logos={[logo10,logo11]}
              />
            </div>
            <div className="flex mt-10 max-sm:p-[0vw] max-sm:flex-col max-sm:gap-[10vw] gap-4 px-10">
              <MemberCard
                title="Mr. Aman Gupta"
                subtitle="Co-Founder & CMO, boAt"
                desc="Aman Gupta is the Co-Founder and Chief Marketing Officer of boAt, one of India’s leading consumer electronics brands. With a strong background in business and marketing.."
                src={aman}
                logos={[]}
              />
                
                <MemberCard
                title="Mr. Rajendra Setia"
                subtitle="Strategic Mentor & Advisor"
                desc="Rajendra Kumar Setia is the Managing Director and the Chief Executive Officer of SK fInance. He holds a bachelor’s degree in science from the University of Rajasthan, Jaipur, Rajasthan, India."
                src={raj}
                logos={[logo12]}
              />
              {/* <MemberCard
                title="Mr. Nikhil Kamath"
                subtitle="Co-Founder, Zerodha & True Beacon"
                desc="Nikhil Kamath is the Co-Founder of Zerodha, India’s largest stock brokerage firm, and True Beacon, an asset management company. A self-taught trader, he is known for revolutionizing India’s investment landscape with commission-free trading and wealth management solutions."
                src=""
                logos={[]}
              /> */}
            </div>
            <div className="flex mt-10 max-sm:p-[0vw] max-sm:flex-col max-sm:gap-[10vw] gap-4 px-10">
              <MemberCard
                title="Mr. Varun Dua"
                subtitle="Founder & CEO, Acko"
                desc="Varun Dua is the Founder and CEO of Acko, a digital-first insurance company transforming India’s insurance industry with technology-driven, customer-centric solutions. With a vision to simplify insurance, he has positioned Acko as a leading insurtech startup in India."
                src={varun}
                logos={[]}
              />

              <MemberCard
                title="Mr. Peyush Bansal"
                subtitle="Founder & CEO, Lenskart"
                desc="Peyush Bansal is the Founder and CEO of Lenskart, India’s largest eyewear retailer. With a mission to make quality eyewear accessible and affordable, he has led Lenskart’s growth into a tech-driven omnichannel platform, serving millions of customers across India."
                src={peyush}
                logos={[]}
              />
            </div>
            
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default AignosisTeam;
