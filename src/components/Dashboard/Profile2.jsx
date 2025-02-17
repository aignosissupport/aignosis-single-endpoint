import React, { useState } from 'react';

import 'react-calendar/dist/Calendar.css';

import baby from './baby.png';

const Profile2 = () => {
    
  return (
    <div>
      <div className="border border-[#FB7CE4] mt-[2vw] rounded-lg p-2">
        <div className="mt-6">
          <h2 className="text-white text-xl mb-4">My Assessments</h2>
          {/* Responsive Wrapper */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-transparent text-white border-collapse border border-[#FB7CE4]">
              <thead>
                <tr>
                  <th className="border border-[#FB7CE4] px-4 py-2">Assessment</th>
                  <th className="border border-[#FB7CE4] px-4 py-2">Taken On</th>
                  <th className="border border-[#FB7CE4] px-4 py-2">Status</th>
                  <th className="border border-[#FB7CE4] px-4 py-2">Report</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#FB7CE4] px-4 py-2">Assessment 1</td>
                  <td className="border border-[#FB7CE4] px-4 py-2">4/12/2024</td>
                  <td className="border border-[#FB7CE4] px-4 py-2 text-green-500">Completed</td>
                  <td className="border border-[#FB7CE4] px-4 py-2">
                    <a href="#" className="text-blue-500 underline">View</a> |{' '}
                    <a href="#" className="text-blue-500 underline">Download</a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#FB7CE4] px-4 py-2">Assessment 2</td>
                  <td className="border border-[#FB7CE4] px-4 py-2">4/12/2024</td>
                  <td className="border border-[#FB7CE4] px-4 py-2 text-green-500">Completed</td>
                  <td className="border border-[#FB7CE4] px-4 py-2">
                    <a href="#" className="text-blue-500 underline">View</a> |{' '}
                    <a href="#" className="text-blue-500 underline">Download</a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#FB7CE4] px-4 py-2">Assessment 3</td>
                  <td className="border border-[#FB7CE4] px-4 py-2">4/12/2024</td>
                  <td className="border border-[#FB7CE4] px-4 py-2 text-green-500">Completed</td>
                  <td className="border border-[#FB7CE4] px-4 py-2">
                    <a href="#" className="text-blue-500 underline">View</a> |{' '}
                    <a href="#" className="text-blue-500 underline">Download</a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#FB7CE4] px-4 py-2">Assessment 4</td>
                  <td className="border border-[#FB7CE4] px-4 py-2">4/12/2024</td>
                  <td className="border border-[#FB7CE4] px-4 py-2 text-red-500">Incompleted</td>
                  <td className="border border-[#FB7CE4] px-4 py-2">
                    <a href="#" className="text-blue-500 underline">null</a> |{' '}
                    <a href="#" className="text-blue-500 underline">null</a>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#FB7CE4] px-4 py-2">Assessment 5</td>
                  <td className="border border-[#FB7CE4] px-4 py-2">4/12/2024</td>
                  <td className="border border-[#FB7CE4] px-4 py-2 text-red-500">Incompleted</td>
                  <td className="border border-[#FB7CE4] px-4 py-2">
                    <a href="#" className="text-blue-500 underline">null</a> |{' '}
                    <a href="#" className="text-blue-500 underline">null</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      

      
        <div className="mt-[5vw]">
  <div
    className="w-full h-auto flex flex-wrap items-center justify-between px-4 py-4 mt-4 rounded-lg"
    style={{
      background: 'linear-gradient(to left, #4B1056, #280834)',
    }}
  >
    {/* Left Section */}
    <div className="flex items-center space-x-4 w-full sm:w-3/4 mb-4 sm:mb-0">
      <div className="w-10 h-10 flex-shrink-0">
        {/* Placeholder for Icon */}
        <img src={baby} alt="Child Icon" className="w-full h-full" />
      </div>
      <div>
        <p className="text-white font-medium text-sm">
          Upto 1 in 5 children are at risk of developmental delays**
        </p>
        <p className="text-white font-medium mt-1 text-xs">
          Take 5 minutes to check if your child is achieving key milestones on time
        </p>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex w-full sm:w-auto justify-center sm:justify-end">
      <button className="text-white font-bold border-[2px] border-purple-500 rounded-full px-6 py-2 text-sm sm:text-lg">
        Take test now
      </button>
    </div>
  </div>
</div>

        
        <div className="mt-6">
      <h2 className="text-white text-xl mb-4">Schedule</h2>
      
    </div>
    </div>
    </div>
  );
};

export default Profile2;
