import React, { useState } from 'react';
import { FaBell, FaPlus, FaUserEdit } from "react-icons/fa";
import Newnavbar from '../Newnavbar';
import Header from '../Header';

const Orderhistory = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup visibility
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <React.Fragment>
      <Newnavbar />
      <Header />
      <div className="w-full text-white px-5 md:px-10 py-10 mt-[2vw] font-manrope pt-[8vh] md:pt-[12vh] min-h-screen h-full bg-[#2B1B2D]">
        <div className="w-full h-full">
          {/* Welcome Header Section */}
          <div
            className="w-full h-[7vw] flex items-center rounded-3xl  max-sm:h-[20vw] justify-between px-[5vw] md:px-10"
            style={{
              background: 'linear-gradient(to right, #B740A1, #9C00AD)',
            }}
          >
            {/* Avatar Section */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">V</span>
              </div>
              <div>
                <h2 className="text-white text-base font-medium">Welcome</h2>
                <p className="text-white font-bold text-xl">Vinay Prasad</p>
                <p className="text-white text-xs">+9876543567</p>
              </div>
            </div>
            {/* Notification Icon */}
            <div className="text-white text-2xl">
              <FaBell />
            </div>
          </div>

          {/* Edit Profile Section */}
          
            {/* Dashboard Container */}
            <div className="mt-5 px-5 md:px-10">
              <h3 className="font-semibold text-lg md:text-xl">Order History</h3>
            </div>

            <div className="border-b-2 my-2 border-[#B859EA]"></div>

            {/* Assessments and Sessions Section */}
            <div className="mt-5 px-5 md:px-10">
              {/* My Assessments Table */}
              <div className="border border-[#FB7CE4] rounded-lg p-2">
                <h4 className="text-lg font-semibold mb-4">My Assessments</h4>
                <div className="border border-[#9C00AD] rounded-lg">
                  <table className="w-full text-left text-sm text-white">
                    <thead>
                      <tr className="border-b border-[#9C00AD]">
                        <th className="px-4 py-2"> My Assessment</th>
                        <th className="px-4 py-2">Taken on</th>
                        <th className="px-4 py-2">Report</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#9C00AD]">
                        <td className="px-4 py-2">Assessment 1</td>
                        <td className="px-4 py-2">4/12/2024</td>
                        <td className="px-4 py-2">Paid</td>
                      </tr>
                      <tr className="border-b border-[#9C00AD]">
                        <td className="px-4 py-2">Assessment 2</td>
                        <td className="px-4 py-2">5/12/2024</td>
                        <td className="px-4 py-2">Paid</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Assessment 3</td>
                        <td className="px-4 py-2">6/12/2024</td>
                        <td className="px-4 py-2">Paid</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              

              {/* My Sessions Section */}
              <h4 className="text-lg font-semibold mt-10">My Sessions</h4>
              <div className="border border-[#9C00AD] mt-[1vw] rounded-lg p-4">
                <p className="text-sm text-gray-400">No sessions available.</p>
              </div>
              </div>
            </div>
          </div>
        
      </div>
    </React.Fragment>
  );
};

export default Orderhistory;
