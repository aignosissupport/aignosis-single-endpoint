import React, { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import axiosInstance from "./config/axiosInstance";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [selectedService, setSelectedService] = useState(""); // Renamed state variable
  const [authUser, setAuthUser] = useState(false); // Authenticated user
  // Menu visibility
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false); // Services dropdown visibility
  const navigate = useNavigate();

  const handleNavigate = () => {
    // Navigate to home with state to trigger scrolling
    navigate("/", { state: { scrollToContact: true } });
  };

  const handleServiceClick = (link) => {
    setActiveLink(link);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(false); // Close dropdown if main menu is toggled
  };

  const location = useLocation();

  // Update activeLink when the location changes
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("authToken");

    // Clear other user-related data if necessary
    setAuthUser(null); // Update state to reflect logged-out status

    // Redirect to login page
    window.location.href = "/";
  };


  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("authToken");
      try {
        console.log(authUser, "authUser1");
        console.log(token)
        // Verify the token with the backend
        const response = await axiosInstance.post(
          "/verifyJwt",
          {}, // Empty body for the POST request
          {
            headers: {
              Authorization: `Bearer ${token}`, // Add the token in the headers
            },
          });
        setAuthUser(true)
        
        

        if (!response.data.success) {
          console.log(authUser, "authUser2");
          // Token verification failed, redirect to login
          setAuthUser(false)
        }
      } catch (error) {
        console.error("Token verification failed:", error);
        setAuthUser(false)
      }
    }
    checkAuth();
  }, []);

  return (
    <div className="text-white w-full bg-[#1A0C25]/60 2xl:h-[4vw] flex items-center justify-center md:h-[4vw] mt-[2vw] font-montserrat fixed top-0 z-20 transition-transform duration-300 translate-y-0 backdrop-blur-md">
      <div className="navbar text-center w-full flex justify-between items-center px-[5vw] md:py-[14px] py-[4vw] max-sm:py-[3.3vw] 2xl:py-[10px]">
        {/* Logo Section */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60 rounded-lg"></div>
          <Link
            to="/"
            onClick={() => handleLinkClick("/")}
            className="relative md:text-xl 2xl:text-3xl font-semibold tracking-wide text-white z-10"
          >
            Ai.gnosis
          </Link>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex justify-center font-medium items-center gap-[4rem]">
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link
              to=""
              onClick={() => handleServiceClick("/assessments-evaluation")} // Updated function name
              className={`text-sm md:text-base font-raleway text-[#F6E8FB] ${selectedService === "/assessments-evaluation" ? "border-b-2 border-white" : ""
                }`} // Updated condition
            >
              Services
            </Link>
            {/* Dropdown menu */}
            {isHovered && (
              <div
                className="absolute text-white p-2 mt-2 rounded-lg shadow-lg top-[70%] -left-[8vw] w-[22vw] z-10 transition-all duration-200 ease-in-out"
                style={{
                  background:
                    "radial-gradient(101.54% 60.98% at 50% 39.02%, #070B0E 0%, #300834 100%)",

                  padding: "1rem 0",

                  borderRadius: "8px",
                }}
              >
                <ul className="space-y-2 flex flex-col justify-center items-center">
                  <li>
                    <Link
                      to="/assessments-evaluation"
                      onClick={() => handleServiceClick("/service1")}
                      className={`block p-3 border-b-2 border-[#952981] w-[18vw] hover:text-[#B740A1]  transition duration-200 ${activeLink === "/assessments-evaluation" ? "text-[#B740A1]" : ""
                        }`}
                      aria-label="/assessments-evaluation"
                    >
                      Assessments & Evaluation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/speech-language"
                      onClick={() => handleServiceClick("/speech-language")}
                      className={`block p-3 border-b-2 border-[#952981] w-[18vw] hover:text-[#B740A1]  transition duration-200 ${activeLink === "/speech-language" ? "text-[#B740A1]" : ""
                        }`}
                      aria-label="Service 2"
                    >
                      Speech & Language
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/behaviour-therapy"
                      onClick={() => handleServiceClick("/behaviour-therapy")}
                      className={`block p-3 border-b-2 border-[#952981] w-[18vw] hover:text-[#B740A1]  transition duration-200 ${activeLink === "/behaviour-therapy" ? "text-[#B740A1]" : ""
                        }`}
                      aria-label="Service 3"
                    >
                      Behaviour Therapy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/occupational-therapy"
                      onClick={() => handleServiceClick("/occupational-therapy")}
                      className={`block p-3 border-b-2 border-[#952981] w-[18vw] hover:text-[#B740A1]  transition duration-200 ${activeLink === "/occupational-therapy" ? "text-[#B740A1]" : ""
                        }`}
                      aria-label="Service 4"
                    >
                      Occupational Therapy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/special-education"
                      onClick={() => handleServiceClick("/special-education")}
                      className={`block p-3 border-b-2 border-[#952981] w-[18vw] hover:text-[#B740A1] transition duration-200 ${activeLink === "/service5" ? "text-[#B740A1]" : ""
                        }`}
                      aria-label="special-education"
                    >
                      Special Education
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link
            to="/about-us"
            onClick={() => handleLinkClick("/about-us")}

            className={`text-sm md:text-base font-raleway text-[#F6E8FB] ${activeLink === "/about-us" ? "border-b-2 border-white" : ""
              }`}
          >
            About Us
          </Link>
          <Link
            to="/test"
            onClick={() => handleLinkClick("/prices")}
            className={`text-sm md:text-base font-raleway text-[#F6E8FB] ${activeLink === "/test" ? "border-b-2 border-white" : ""
              }`}
          >
            Test
          </Link>
          <Link
            to="/therapy"
            onClick={() => handleLinkClick("/prices")}
            className={`text-sm md:text-base font-raleway text-[#F6E8FB] ${activeLink === "/therapy" ? "border-b-2 border-white" : ""
              }`}
          >
            Therapy
          </Link>
          <Link
            to="/clinic"
            onClick={() => handleLinkClick("/clinic")}
            className={`text-sm md:text-base font-raleway text-[#F6E8FB] ${activeLink === "/clinic" ? "border-b-2 border-white" : ""
              }`}
          >
            Clinic
          </Link>
          <div className="relative group">
            <button className="text-sm md:text-base font-raleway text-[#F6E8FB] hover:underline">
              Blog
            </button>
            <div
              className="absolute text-white p-2 mt-2 rounded-lg shadow-lg top-[70%] -left-[8vw] w-[22vw] z-10 transition-all duration-200 ease-in-out hidden group-hover:block"
              style={{
                background:
                  "radial-gradient(101.54% 60.98% at 50% 39.02%, #070B0E 0%, #300834 100%)",
                padding: "1rem 0",
                borderRadius: "8px",
              }}
            >
              <ul className="space-y-2 flex flex-col justify-center items-center">
                <li>
                  <Link
                    to="/blog"
                    onClick={() => handleLinkClick("/blog")}
                    className={`block p-3 border-b-2 border-[#952981] w-[18vw] hover:text-[#B740A1] transition duration-200 ${activeLink === "/blog" ? "text-[#B740A1]" : ""
                      }`}
                    aria-label="Blogs"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Howework"
                    onClick={() => handleLinkClick("/Howework")}
                    className={`block p-3 border-b-2 border-[#952981] w-[18vw] hover:text-[#B740A1] transition duration-200 ${activeLink === "/Howework" ? "text-[#B740A1]" : ""
                      }`}
                    aria-label="How We Work"
                  >
                    How We Work
                  </Link>
                </li>
              </ul>
            </div>
          </div>




          {authUser ? (
            <>
              <div className="">
                <div
                  className="relative"
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}
                >
                  <Link
                    to=""
                    onClick={() => handleServiceClick("/dashboard")} // Updated function name
                    className={`text-sm md:text-base font-raleway text-[#F6E8FB] ${selectedService === "/assessments-evaluation" ? "border-b-2 border-white" : ""
                      }`} // Updated condition
                  >
                    Dashboard
                  </Link>
                  {/* Dropdown menu */}
                  {isHovered2 && (
                    <div
                      className="absolute text-white p-2 mt-2 rounded-lg shadow-lg top-[70%] -left-[8vw] w-[22vw] z-10 transition-all duration-200 ease-in-out"
                      style={{
                        background:
                          "radial-gradient(101.54% 60.98% at 50% 39.02%, #070B0E 0%, #300834 100%)",

                        padding: "1rem 0",

                        borderRadius: "8px",
                      }}
                    >
                      <ul className="space-y-2 flex flex-col justify-center items-center">
                        <li>
                          <Link
                            to="/dashboard"
                            onClick={() => handleServiceClick("/service1")}
                            className={`block p-3 border-b-2 border-[#952981] w-[18vw] hover:text-[#B740A1]  transition duration-200 ${activeLink === "/assessments-evaluation" ? "text-[#B740A1]" : ""
                              }`}
                            aria-label="/assessments-evaluation"
                          >
                            User Dashboard
                          </Link>
                        </li>
                        <li>
                          {/* <Link
                            to="/profile"
                            onClick={() => handleServiceClick("/profile")}
                            className={`block p-3 border-b-2 border-[#952981] w-[18vw] hover:text-[#B740A1]  transition duration-200 ${activeLink === "/speech-language" ? "text-[#B740A1]" : ""
                              }`}
                            aria-label="Service 2"
                          >
                            Profile
                          </Link> */}
                          <Link
                            to="/profile1"
                            onClick={() => handleServiceClick("/profile1")}
                            className={`block p-3 border-b-2 border-[#952981] w-[18vw] hover:text-[#B740A1]  transition duration-200 ${activeLink === "/speech-language" ? "text-[#B740A1]" : ""
                              }`}
                            aria-label="Service 2"
                          >
                            Profile
                          </Link>
                          <Link
                            to="/orderhistory"
                            onClick={() => handleServiceClick("/orderhistory")}
                            className={`block p-3 border-b-2 border-[#952981] w-[18vw] hover:text-[#B740A1]  transition duration-200 ${activeLink === "/speech-language" ? "text-[#B740A1]" : ""
                              }`}
                            aria-label="Service 2"
                          >
                            Order History
                          </Link>
                        </li>
                        {/* <li>
                      <Link
                        to="/behaviour-therapy"
                        onClick={() => handleServiceClick("/behaviour-therapy")}
                        className={`block p-3 border-b-2 border-[#952981] w-[18vw] hover:text-[#B740A1]  transition duration-200 ${activeLink === "/behaviour-therapy" ? "text-[#B740A1]" : ""
                          }`}
                        aria-label="Service 3"
                      >
                        Behaviour Therapy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/occupational-therapy"
                        onClick={() => handleServiceClick("/occupational-therapy")}
                        className={`block p-3 border-b-2 border-[#952981] w-[18vw] hover:text-[#B740A1]  transition duration-200 ${activeLink === "/occupational-therapy" ? "text-[#B740A1]" : ""
                          }`}
                        aria-label="Service 4"
                      >
                        Occupational Therapy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/special-education"
                        onClick={() => handleServiceClick("/special-education")}
                        className={`block p-3 border-b-2 border-[#952981] w-[18vw] hover:text-[#B740A1] transition duration-200 ${activeLink === "/service5" ? "text-[#B740A1]" : ""
                          }`}
                        aria-label="special-education"
                      >
                        Special Education
                      </Link>
                    </li> */}
                      </ul>
                      <button
                        onClick={handleLogout}
                        className="border-b-2 border-[#952981] w-[18vw] p-3 md:text-base hover:text-[#B740A1]  transition duration-200"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <Link
                to={'/prices'}
                className="2xl:w-[17rem] md:w-[14rem] gap-3 rounded-full flex justify-center cursor-pointer items-center text-[#0D0C0A] md:h-[3rem] 2xl:h-[3rem] bg-white group hover:bg-[#B7407D] hover:text-white transition-colors duration-300"
              >
                <span className="2xl:text-base md:text-sm">
                  Book an appointment
                </span>
                <div className="2xl:w-[2.5rem] md:w-[2rem] md:h-[2rem] text-white group-hover:text-black text-xl flex justify-center items-center 2xl:h-[2.5rem] rounded-full bg-[#B740A1] group-hover:bg-white">
                  <GoArrowUpRight />
                </div>
              </Link>

            </>
          ) : (
            <Link
              to="/login"
              onClick={() => handleLinkClick("/login")}
              className="group border border-[#B740A1] p-2 px-4 hover:bg-pink-500 rounded-[30px]"
            >
              <span className="flex items-center 2xl:text-base md:text-sm m-auto text-xl text-white">
                Log in
                <div className="w-[1.8rem] h-[1.8rem] flex justify-center items-center text-white text-xl bg-[#B740A1] rounded-full ml-2 group-hover:bg-white group-hover:text-black transition duration-300">
                  <GoArrowUpRight />
                </div>
              </span>
            </Link>

          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex md:hidden items-center">
          <button onClick={toggleMenu} className="text-white text-3xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute text-left p-6 top-[6.8vh] left-0 w-full bg-[#1A0C25] z-10 flex flex-col items-center md:hidden">
          <Link
            to="/"
            onClick={() => {
              handleLinkClick("/");
              toggleMenu();
            }}
            className={`text-lg p-4 w-full text-left ${activeLink === "/" ? "text-[#B740A1]" : ""
              }`}
          >
            Home
          </Link>
          <div className="border-t-2 w-full border-[#952981]"></div>
          <div
            className="relative text-lg p-4 w-full text-left"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="flex justify-between items-center">
              Services
              {dropdownOpen ? (
                <RiArrowDropUpLine size={30} />
              ) : (
                <RiArrowDropDownLine size={30} />
              )}
            </span>
            {dropdownOpen && (
              <div className="top-full text-base text-left p-2 left-0 w-full bg-[#1A0C25]">
                <Link
                  to="/assessments-evaluation"
                  onClick={() => {
                    handleLinkClick("/assessments-evaluation");
                    toggleMenu();
                  }}
                  className={`block p-4 ${activeLink === "/assessments-evaluation" ? "text-[#B740A1]" : ""
                    }`}
                >
                  Assessments & Evaluation
                </Link>
                <div className="border-t-2 w-full border-[#952981]"></div>

                <Link
                  to="/speech-language"
                  onClick={() => {
                    handleLinkClick("/speech-language");
                    toggleMenu();
                  }}
                  className={`block p-4  ${activeLink === "/speech-language" ? "text-[#B740A1]" : ""
                    }`}
                >
                  Speech & Language
                </Link>
                <div className="border-t-2 w-full border-[#952981]"></div>

                <Link
                  to="/behaviour-therapy"
                  onClick={() => {
                    handleLinkClick("/behaviour-therapy");
                    toggleMenu();
                  }}
                  className={`block p-4 ${activeLink === "/behaviour-therapy" ? "text-[#B740A1]" : ""
                    }`}
                >
                  Behaviour Therapy
                </Link>
                <div className="border-t-2 w-full border-[#952981]"></div>

                <Link
                  to="/occupational-therapy"
                  onClick={() => {
                    handleLinkClick("/occupational-therapy");
                    toggleMenu();
                  }}
                  className={`block p-4 ${activeLink === "/occupational-therapy" ? "text-[#B740A1]" : ""
                    }`}
                >
                  Occupational Therapy
                </Link>
                <div className="border-t-2 w-full border-[#952981]"></div>

                <Link
                  to="/special-education"
                  onClick={() => {
                    handleLinkClick("/special-education");
                    toggleMenu();
                  }}
                  className={`block p-4 ${activeLink === "/special-education" ? "text-[#B740A1]" : ""
                    }`}
                >
                  Special Education
                </Link>
              </div>
            )}
          </div>
          <div className="border-t-2 w-full border-[#952981]"></div>
          <Link
            to="/about-us"
            onClick={() => {
              handleLinkClick("/about-us");
              toggleMenu();
            }}
            className={` text-lg p-4 w-full text-left ${activeLink === "/about-us" ? "text-[#B740A1]" : ""
              }`}
          >
            About Us
          </Link>
          <div className="border-t-2 w-full border-[#952981]"></div>
          <Link
            to="/test"
            onClick={() => {
              handleLinkClick("/test");
              toggleMenu();
            }}
            className={` text-lg p-4 w-full text-left ${activeLink === "/test" ? "text-[#B740A1]" : ""
              }`}
          >
            Test
          </Link>
          <div className="border-t-2 w-full border-[#952981]"></div>
          <Link
            to="/therapy"
            onClick={() => {
              handleLinkClick("/therapy");
              toggleMenu();
            }}
            className={` text-lg p-4 w-full text-left ${activeLink === "/therapy" ? "text-[#B740A1]" : ""
              }`}
          >
            Therapy
          </Link>
          <div className="border-t-2 w-full border-[#952981]"></div>

          <Link
            to="/clinic"
            onClick={() => {
              handleLinkClick("/clinic");
              toggleMenu();
            }}
            className={` text-lg p-4 w-full text-left ${activeLink === "/clinic" ? "text-[#B740A1]" : ""
              }`}
          >
            Clinic
          </Link>
          <div className="border-t-2 w-full border-[#952981]"></div>
          <div
            className="relative text-lg p-4 w-full text-left"
            onClick={() => setDropdownOpen3(!dropdownOpen3)} // Toggle dropdown
          >
            <span className="flex justify-between items-center">
              Blog
              {dropdownOpen3 ? (
                <RiArrowDropUpLine size={30} />
              ) : (
                <RiArrowDropDownLine size={30} />
              )}
            </span>
            {dropdownOpen3 && (
              <div className="top-full text-base text-left p-2 left-0 w-full bg-[#1A0C25]">
                {/* Blogs Link */}
                <Link
                  to="/blog"
                  onClick={() => {
                    handleLinkClick("/blog");
                    toggleMenu();
                  }}
                  className={`block p-4 ${activeLink === "/blog" ? "text-[#B740A1]" : ""}`}
                >
                  Blogs
                </Link>
                <div className="border-t-2 w-full border-[#952981]"></div>

                {/* How We Work Link */}


                {/* Additional Blog Categories */}
                <Link
                  to="/Howework"
                  onClick={() => {
                    handleLinkClick("/case-studies");
                    toggleMenu();
                  }}
                  className={`block p-4 ${activeLink === "/Howework" ? "text-[#B740A1]" : ""}`}
                >
                  How We Work
                </Link>

              </div>
            )}

          </div>


          {authUser ? (
            <>
              <div className="border-t-2 w-full border-[#952981]"></div>
              <button
                onClick={handleLogout}
                className="text-lg p-4 w-full text-left"
              >
                Logout
              </button>
              <div className="border-t-2 w-full border-[#952981]"></div>

              <div
                className="relative text-lg p-4 w-full text-left"
                onClick={() => setDropdownOpen2(!dropdownOpen2)}
              >
                <span className="flex justify-between items-center">
                  Dashboard
                  {dropdownOpen2 ? (
                    <RiArrowDropUpLine size={30} />
                  ) : (
                    <RiArrowDropDownLine size={30} />
                  )}                </span>
                {dropdownOpen2 && (
                  <div className="top-full text-base text-left p-2 left-0 w-full bg-[#1A0C25]">
                    <Link
                      to="/dashboard"
                      onClick={() => {
                        handleLinkClick("/dashboard");
                        toggleMenu();
                      }}
                      className={`block p-4 ${activeLink === "/assessments-evaluation" ? "text-[#B740A1]" : ""
                        }`}
                    >
                      User Dashboard
                    </Link>
                    {/* <div className="border-t-2 w-full border-[#952981]"></div> */}

                    {/* <Link
                      to="/profile"
                      onClick={() => {
                        handleLinkClick("/speech-language");
                        toggleMenu();
                      }}
                      className={`block p-4  ${activeLink === "/speech-language" ? "text-[#B740A1]" : ""
                        }`}
                    >
                      Profile
                    </Link> */}
                    <div className="border-t-2 w-full border-[#952981]"></div>
                    <Link
                      to="/profile1"
                      onClick={() => {
                        handleLinkClick("/profile1");
                        toggleMenu();
                      }}
                      className={`block p-4  ${activeLink === "/speech-language" ? "text-[#B740A1]" : ""
                        }`}
                    >
                      Profile1
                    </Link>
                    <div className="border-t-2 w-full border-[#952981]"></div>
                    <Link
                      to="/orderhistory"
                      onClick={() => {
                        handleLinkClick("/orderhistory");
                        toggleMenu();
                      }}
                      className={`block p-4  ${activeLink === "/speech-language" ? "text-[#B740A1]" : ""
                        }`}
                    >
                      Order History
                    </Link>
                    <div className="border-t-2 w-full border-[#952981]"></div>
                    {/* <div className="border-t-2 w-full border-[#952981]"></div> */}

                    {/* <Link
                  to="/behaviour-therapy"
                  onClick={() => {
                    handleLinkClick("/behaviour-therapy");
                    toggleMenu();
                  }}
                  className={`block p-4 ${activeLink === "/behaviour-therapy" ? "text-[#B740A1]" : ""
                    }`}
                >
                  Behaviour Therapy
                </Link>
                <div className="border-t-2 w-full border-[#952981]"></div>

                <Link
                  to="/occupational-therapy"
                  onClick={() => {
                    handleLinkClick("/occupational-therapy");
                    toggleMenu();
                  }}
                  className={`block p-4 ${activeLink === "/occupational-therapy" ? "text-[#B740A1]" : ""
                    }`}
                >
                  Occupational Therapy
                </Link>
                <div className="border-t-2 w-full border-[#952981]"></div>

                <Link
                  to="/special-education"
                  onClick={() => {
                    handleLinkClick("/special-education");
                    toggleMenu();
                  }}
                  className={`block p-4 ${activeLink === "/special-education" ? "text-[#B740A1]" : ""
                    }`}
                >
                  Special Education
                </Link> */}
                  </div>
                )}
              </div>
              <div className="border-t-2 w-full mb-5 border-[#952981]"></div>

              <Link
                to={'/prices'}
                className="w-full text-white text-lg p-3 rounded-full text-center bg-[#B740A1]"
              >
                Book an appointment
              </Link>
              {/* <Link
                to="/dashboard"
                onClick={toggleMenu}
                className="w-full text-white text-lg p-3 mt-5 rounded-full text-center border border-[#B740A1]"
              >
                Dashboard
              </Link> */}
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={toggleMenu}
                className="w-full text-white text-lg p-3 rounded-full text-center bg-[#B740A1]"
              >
                Log in
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
