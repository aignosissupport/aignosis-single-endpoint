import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CalibrationPage from "./CalibrationPage";
import { DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../aignosisintegration/AppContext";
import { format } from "date-fns";

export const FillupPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isBackInfoVisible, setIsBackInfoVisible] = useState(false);
  const [dob, setDob] = useState(null);
  const [, setAgeYears] = useState("");
  const [, setAgeMonths] = useState("");
  const [, setAgeFullYear] = useState("");
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const { testData, setTestData } = useContext(AppContext);

  useEffect(() => {
    setDob(formatDate(selectedDate));

    // Push initial state to prevent default navigation
    window.history.pushState(null, null, window.location.href);

    const handleBackButton = () => {
      navigate("/calibrationpage"); // Redirect to CalibrationPage on back press
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [navigate, selectedDate]);

  const handleNextClick = async () => {
    if (document.getElementById("patient-name-input").value == "" || !dob) {
      alert("Please enter all fields");
    } else {
      setTestData({
        ...testData,
        patientName: document.getElementById("patient-name-input").value,
        patientDOB: dob,
      });

      console.log(testData)
      navigate("/autismtest");
    }
  };

  function formatDate(date) {
    // Check if date is valid, and format it correctly using date-fns
    if (date && !isNaN(date)) {
      return format(new Date(date), "dd/MM/yyyy");
    }
    return ""; // Return empty string for invalid dates
  }

  // Function to calculate age based on DOB
  const handleDateChange = (date) => {
    // Convert moment to JavaScript Date and format it
    const formattedDate = formatDate(date ? date.toDate() : null); // Convert moment to Date
    setDob(formattedDate);

  };

  return (
    <>
      <div className="bg-[#1A0C25] flex flex-col justify-center items-center h-[110vh] ">
        {!isBackInfoVisible ? (
          <div className="flex flex-row max-sm:flex-col max-sm:justify-center items-center justify-between mt-[10px] max-sm:mt-0 max-sm:mb-[50px]">
            <div className="flex flex-col items-start space-y-[80px] px-8 max-sm:mt-[50px]">
              <div className="relative inline-block m-[auto]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60 rounded-lg"></div>
                <span className="relative text-4xl font-semibold tracking-wide text-white z-10">Ai.gnosis</span>
              </div>

              <div className="flex flex-col space-y-4 max-w-sm ">
                <p className="text-white font-manrope text-center text-2xl">
                  Please take the assessment to{" "}
                  <span className="text-left ">begin with diagnosis</span>
                </p>
                <p className="text-[#FFFFFF] font-raleway text-sm px-4 py-2 text-center ">
                  Assessment duration: 5 mins
                </p>
              </div>
            </div>

            <div className="bg-[#564A5957] p-10 rounded-2xl shadow-lg w-[50vw] max-sm:w-auto mx-8">
              <h2 className="text-white text-2xl font-semibold mb-4 font-manrope text-center">
                Welcome to Ai.gnosis early detection screener
              </h2>
              <p className="text-gray-400 text-sm mb-8 font-raleway text-center">
                Ai.gnosis is an online platform that helps you detect early signs of developmental disorder in children.
              </p>

              <form className="space-y-4">
                <input
                  id="patient-name-input"
                  type="text"
                  placeholder="Patient Name"
                  className="bg-[#1A0C25] text-white px-4 py-2.5 rounded-lg w-full placeholder-gray-500 border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500"
                />

                <DatePicker
                  onChange={handleDateChange}
                  format="DD/MM/YYYY"
                  className="w-full text-white bg-[#1A0C25] border-[#B7407D4D] focus:ring-2 focus:ring-pink-500"
                  placeholder="DD/MM/YYYY"
                  style={{
                    color: 'black',
                    backgroundColor: 'white'
                  }}
                />

                <div className="flex justify-center items-center gap-2 max-sm:flex-col">
                  <Link
                    to="/prices"
                    className="text-white border border-[#9C00AD] px-6 py-3 rounded-full font-semibold mt-4 w-[150px] flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-[#9C00AD] hover:border-transparent hover:shadow-md"
                  >
                    Back
                  </Link>

                  <button
                    type="button"
                    onClick={handleNextClick}
                    className="hover:bg-pink-700 text-white border border-[#9C00AD] px-6 py-3 rounded-full font-semibold mt-4 w-[150px] flex justify-center items-center"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <CalibrationPage />
        )}
      </div>
    </>
  );
};

export default FillupPage;
