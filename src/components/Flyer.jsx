import React, { useState, useEffect } from "react";


const Flyer = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup after 15 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 15000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-8/12 lg:w-6/12 flex flex-col md:flex-row overflow-hidden">
        {/* Left Section (Image with Content Overlay) */}
        <div className="relative text-white p-6 flex-1 flex flex-col justify-center items-center">
          {/* Shark Image */}
          <img
            src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/sharks.png"
            className="absolute inset-0 w-full h-full object-fit"
            alt="Shark"
          />
          {/* Overlay Content */}
          <div className="relative z-10 text-center">
            <h1 className="text-2xl md:text-3xl font-[Passion One] text-[#8EADFC] font-bold mb-2">
              SHARK TANK
            </h1>
            <h2 className="text-xl md:text-2xl font-[Passion One] font-bold text-yellow-500 mb-2">
              INDIA
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">50% off</h3>
            <p
              className="text-sm md:text-base py-2 px-4 rounded-lg mb-2 font-semibold"
              style={{
                background:
                  "linear-gradient(90deg, #9C00AD 0%, rgba(241, 198, 254, 0.46) 100%)",
              }}
            >
              On your first screening
            </p>
            <p className="text-sm md:text-base">
              Free consultation for First 1000 users
            </p>
          </div>
          {/* Overlay Background */}
          <div className="absolute inset-0 bg-[#1A0C25] opacity-80"></div>
        </div>

        {/* Right Section (Form) */}
        <div className="p-6 bg-[#063756] flex-1">
          <div className="flex justify-between items-center text-center mb-4">
            <h3 className="text-lg md:text-xl text-center ml-[4vw] text-white max-sm:ml-[12vw] font-bold">
              Know your child better
            </h3>
            <button
              className="text-gray-500 hover:text-gray-800 text-xl"
              onClick={closePopup}
            >
              &times;
            </button>
          </div>
          <p className="text-sm mb-4 text-white">
            100% Privacy. No spam. Only helpful updates.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone number
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#9C00AD] text-white py-2 rounded-lg font-semibold hover:bg-purple-600 transition"
            >
              Get now
            </button>
          </form>
          {/* <p className="text-xs text-white mt-4">
          This privacy policy (the "Privacy Policy") applies to your use of the website of Aignosis hosted at Aignosis Artificial Intelligence Private Limited, the Services (as defined under the Aignosis "Terms of Use") and Aignosis applications on mobile platforms (Android, Blackberry, Windows Phone, iOS, etc.) (collectively ("AIGNOSIS" or "WEBSITE")), but does not apply to any third-party websites that may be linked to them, or any relationships you may have with the businesses listed on Aignosis.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Flyer;
