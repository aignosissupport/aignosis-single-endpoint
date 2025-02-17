import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

const BlogFooter = () => {
  return (
    <div>
      <footer className="bg-[#811F67] px-[10vw] text-white py-[10vh]">
        <div className="container justify-center mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-[1vw] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:space-y-6">
          {/* Pages Section */}
          <div className="max-sm:w-full max-sm:text-left">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60 rounded-lg"></div>
              <Link
                to="/"
                onClick={() => handleLinkClick("/")}
                className="relative md:text-2xl 2xl:text-3xl font-semibold tracking-wide text-white z-10"
              >
                Ai.gnosis
              </Link>
            </div>
            <p className="mt-5 " >AI.gnosis is here to offer AI-powered tools that help you understand your child’s unique way of experiencing the world. </p>
            <ul className="space-x-4 hidden justify-start items-start pt-4 max-sm:pl-0 md:flex max-sm:space-y-0 flex-row max-sm:flex-row max-sm:space-x-4">
              <li>
                <a
                  href="https://www.instagram.com/aignosis.in?igsh=MTU0dmUybjViOTIzZw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaInstagram size={26} className="text-pink-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/19HxXZyVyE/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaFacebook size={26} className="text-blue-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@aignosis?si=gozM9TLj4ZToY5-k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaYoutube size={26} className="text-red-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/aignosisai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaLinkedin size={26} className="text-blue-500" />
                </a>
              </li>
            </ul>
          </div>
          <div className="max-sm:w-full max-sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2 list-disc pl-[2vw] max-sm:pl-0 max-sm:list-none">
              <Link to="/">
                {" "}
                <li>Home</li>
              </Link>{" "}
              <Link to="/clinic">
                {" "}
                <li>Clinic</li>
              </Link>{" "}
              <Link to={"/about-us"}>
                {" "}
                <li>About us</li>
              </Link>
              <Link to={"/assessments-evaluation"}>
                {" "}
                <li>Services</li>
              </Link>
              <Link>
                {" "}
                <li>Contact us</li>
              </Link>
              <Link to={'/career'}>
                {" "}
                <li>Career</li>
              </Link>
            </ul>
          </div>

          {/* Information Section */}
          <div className="max-sm:w-full max-sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2 list-disc pl-[2vw] max-sm:pl-0 max-sm:list-none">
              {/* <li>Brand Story</li> */}
              <Link to={"/terms"}>
                {" "}
                <li>Terms & Conditions</li>
              </Link>
              <Link to={"/refund-reschedule"}>
                {" "}
                <li>Return Policy</li>
              </Link>{" "}
              <Link to={"/refund-reschedule"}>
                {" "}
                <li>Refund Policy</li>
              </Link>{" "}
              <Link to={"/privacy-policy"}>
                {" "}
                <li>Privacy Policy</li>
              </Link>{" "}
            </ul>
          </div>

          {/* Customer Service Section */}
          {/* <div className="max-sm:w-full max-sm:text-center">
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 list-disc pl-[2vw] max-sm:pl-0 max-sm:list-none">
              <Link to={"/about-us"}>
                {" "}
                <li>Our Team</li>
              </Link>
              <Link to={"/blog"}>
                {" "}
                <li>Blog</li>
              </Link>
            </ul>
          </div> */}

          {/* Contact Us Section */}
          <div className="max-sm:w-full max-sm:text-left">
            <h3 className="text-lg text-left font-semibold mb-4">Contact Us</h3>
            <address className="not-italic space-y-2 max-sm:text-left">
              <p>
                Registered Office: 311, Adarsh Nagar
                Jaipur, Rajasthan, 302004
              </p>
              <p>+91 8209860578</p>
              <p>support@aignosis.in</p>
            </address>
            {/* <ul className="space-y-2 list-disc pl-[2vw] max-sm:pl-0 max-sm:list-none">
              <Link
                to={
                  "https://www.instagram.com/aignosis.in?igsh=MTU0dmUybjViOTIzZw=="
                }
              >
                {" "}
                <li>Instagram </li>
              </Link>
              <Link to={'https://www.facebook.com/share/19HxXZyVyE/?mibextid=wwXIfr'}>
                <li>Facebook</li>
              </Link>
              <Link to={'https://youtube.com/@aignosis?si=gozM9TLj4ZToY5-k'}>
                <li>YouTube</li>
              </Link>{" "}
              <Link to={'https://www.linkedin.com/company/aignosisai/'}> 
                <li>Linkedin</li>
              </Link>{" "}
            </ul> */}
          </div>
          <div className="max-sm:w-full block md:hidden max-sm:text-left">
            <h3 className="mt-5 text-lg font-medium">Follow us</h3>
            <ul className="space-x-4 justify-start items-start pt-4 max-sm:pl-0 flex max-sm:space-y-0 flex-row max-sm:flex-row max-sm:space-x-4">
              <li>
                <a
                  href="https://www.instagram.com/aignosis.in?igsh=MTU0dmUybjViOTIzZw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaInstagram size={26} className="text-pink-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/19HxXZyVyE/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaFacebook size={26} className="text-blue-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@aignosis?si=gozM9TLj4ZToY5-k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaYoutube size={26} className="text-red-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/aignosisai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaLinkedin size={26} className="text-blue-500" />
                </a>
              </li>
            </ul>
          </div>
          <div className="border-t-2 md:hidden flex justify-center items-center w-full border-[#F6E8FB80]">
            <h3 className="text-[10px] text-center mt-4"> <p>
              &copy; 2025{' '}
              All rights reserved By Aignosis Artificial Intelligence Private Limited Powered by
              <a
                href="https://doggleindia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {' '} Doggleindia
              </a>
            </p>
            </h3>
          </div>
        </div>
        <div className="border-t-2 mt-[5vw] hidden md:flex justify-center items-center w-full border-[#F6E8FB80]">
          <h3 className="text-[10px] text-center mt-4"> <p>
            &copy; 2025{' '}
            All rights reserved By Aignosis Artificial Intelligence Private Limited <br /> Powered by
            <a
              href="https://doggleindia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {' '}Doggleindia
            </a>
          </p>

          </h3>
        </div>
      </footer>
    </div>
  );
};

export default BlogFooter;
