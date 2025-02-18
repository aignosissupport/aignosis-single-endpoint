import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CalibrationPage from "./CalibrationPage";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { differenceInYears, differenceInMonths } from "date-fns";
import { useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../aignosisintegration/AppContext";
import { format } from "date-fns";
import TextField from "@mui/material/TextField";


export const FillupPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isBackInfoVisible, setIsBackInfoVisible] = useState(false);
  const [dob, setDob] = useState(null);
  const [, setAgeYears] = useState("");
  const [, setAgeMonths] = useState("");
  const [, setAgeFullYear] = useState("");
  const [dataCollectionMode, setDataCollectionMode] = useState([]); // New state for selected options
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const { testData, setTestData } = useContext(AppContext);
  const [isButtonsDisabled, setIsButtonsDisabled] = useState(true);
  const [buttonAccessibility, setButtonAccessibility] = useState({
    INCLEN: true,
    ISAA: true,
    CARS: true,
  });

  console.log(testData, "testData");

  useEffect(() => {
    // if (testData.PATIENT_UID === "" || testData.TRANSACTION_ID == "") {
    //   navigate("/");
    // }

    console.log("FILLUP UP TEST DATA", testData);

    // document.getElementById("patient-uid-input").value = testData.PATIENT_UID;
  }, []);

  useEffect(() => {

    setDob(formatDate(selectedDate));

    // Push initial state to prevent default navigation
    window.history.pushState(null, null, window.location.href);

    const handleBackButton = () => {
      navigate("/calibrationpage"); // Redirect to CalibrationPage on back press
    };

    // Listen for the popstate event
    window.addEventListener("popstate", handleBackButton);

    // Cleanup the listener on unmount
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [navigate, selectedDate]);

  const handleNextClick = async () => {
    try {
      // Request permission for webcam and microphone
      // await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      // If permission is granted, show the CalibrationPage
      // setIsBackInfoVisible(true);
      //if permission go to download report page
      // navigate("/patienthistory");

      if (document.getElementById("patient-name-input").value == "" || !dob) {
        alert("Please enter all fields");
      } else {
        console.log("patient dob in useState is ", dob);
        setTestData({
          ...testData,
          patientName: document.getElementById("patient-name-input").value,
          patientDOB: dob.toString(),
        });

        navigate("/autismtest");
      }
    } catch (error) {
      console.error("Permission denied for webcam and microphone:", error);
      alert("Please allow webcam and microphone access to proceed.");
    }
  };


  function formatDate(date){
    const formattedDate = date ? format(date, "ddMMyyyy") : "";
    return formattedDate.toString();
  }

  // Function to calculate age based on DOB
  const handleDateChange = (date) => {
    setDob(date);

    const years = differenceInYears(new Date(), date);
    const months = differenceInMonths(new Date(), date) % 12;
    const fullYear = date.getFullYear();

    setAgeYears(years);
    setAgeMonths(months);
    setAgeFullYear(fullYear);
    const formattedDate = date ? format(date, "ddMMyyyy") : "";
    setDob(formattedDate);
    console.log("Formatted DOB:");
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    console.log(dataCollectionMode);
    setTestData((prevTestData) => {
      const updatedDataCollectionMode = checked
        ? [...prevTestData.dataCollectionMode, value] // Add value if checked
        : prevTestData.dataCollectionMode.filter((item) => item !== value); // Remove value if unchecked

      return {
        ...prevTestData,
        dataCollectionMode: updatedDataCollectionMode,
      };
    });
  };

  return (
    <>
      <div className="bg-[#1A0C25] flex flex-col justify-center items-center h-[110vh] ">
        {/* <StepProgress /> */}
        {!isBackInfoVisible ? (
          <div className="flex flex-row  max-sm:flex-col max-sm:justify-center items-center justify-between mt-[10px] max-sm:mt-0 max-sm:mb-[50px]">
            {/* Left side content */}
            <div className="flex flex-col items-start space-y-[80px] px-8  max-sm:mt-[50px]">
              {/* Logo with Gradient Background */}
              <div className="relative inline-block m-[auto]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60 rounded-lg"></div>
                <span className="relative text-4xl font-semibold tracking-wide text-white z-10">
                  Ai.gnosis
                </span>
              </div>

              {/* Assessment Text */}
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

            {/* Right side form */}
            <div className="bg-[#564A5957] p-10 rounded-2xl shadow-lg w-[50vw] max-sm:w-auto mx-8">
              <h2 className="text-white text-2xl font-semibold mb-4 font-manrope text-center">
                Welcome to Ai.gnosis early detection screener
              </h2>
              <p className="text-gray-400 text-sm mb-8 font-raleway text-center">
                Ai.gnosis is an online platform that helps you detect early
                signs of <br /> developmental disorder in children.
              </p>

              <form className="space-y-4">
                <input
                  id="patient-name-input"
                  type="text"
                  placeholder="Patient Name"
                  className="bg-[#1A0C25] text-white px-4 py-2.5 rounded-lg w-full placeholder-gray-500 border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500"
                />

                {/* <input
                  id="patient-uid-input"
                  type="text"
                  placeholder="Patient ID"
                  className="bg-[#1A0C25] text-white px-4 py-2.5 rounded-lg w-full placeholder-gray-500 border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500"
                /> */}

                {/* Date Picker for DOB */}
                {/* <DatePicker
                  selected={dob}
                  onChange={handleDateChange}
                  placeholder="Patient DOB"
                  // style={backgroundColor: "transparent",}
                  className="bg-[#1A0C25] text-white px-4 py-2.5 w-25 rounded-lg w-full placeholder-gray-500 border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500"
                /> */}

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Select a date"
                    value={selectedDate}
                    onChange={(newValue) => setSelectedDate(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                    sx={{
                      backgroundColor: "white"
                    }}
                  />
                </LocalizationProvider>

                {/* <DatePicker oneTap style={{ width: 200 }} onChange={handleDateChange} className="bg-[#1A0C25] text-white px-4 py-2.5 rounded-lg w-full placeholder-gray-500 border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500 "/> */}

                <div className="flex justify-center items-center gap-2 max-sm:flex-col">
                  <Link
                    to="/prices"
                    className="text-white border border-[#9C00AD] px-6 py-3 rounded-full font-semibold mt-4 w-[150px] flex justify-center items-center
             transition-all duration-300 ease-in-out hover:bg-[#9C00AD] hover:border-transparent hover:shadow-md"
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
