import React from "react";

const Form = () => {
  return (
    <div className="min-h-screen bg-[#1a0c25] flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-[#1a0c25] text-white rounded-lg">
      <div className="flex items-center text-left gap-4 mb-4">
        <div className="h-1 w-20 bg-gradient-to-l from-pink-500 to-transparent rounded-full"></div>
        <span className="text-white font-semibold tracking-widest">Jobs</span>
        <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-transparent rounded-full"></div>
      </div>
        <h1 className="text-3xl font-bold text-left mb-4">Hiring at Aignosis</h1>
        <p className="text-left text-sm text-gray-300 mb-8">
          At Aignosis, we are dedicated to creating a supportive and dynamic environment where you can excel both <br/> personally and professionally. </p>
          
         <p className="text-sm "> Join our team and become part of a community that values innovation, well-being, and your success. Together,  we're making a lasting impact in the world of autism care through cutting-edge AI solutions.</p>
        
        <form className="space-y-6 mt-[2vw]">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full p-3 bg-[#2b1838] text-white border border-gray-500 rounded-lg focus:outline-none focus:ring focus:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Mobile*"
              className="w-full p-3 bg-[#2b1838] text-white border border-gray-500 rounded-lg focus:outline-none focus:ring focus:ring-pink-500"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full p-3 bg-[#2b1838] text-white border border-gray-500 rounded-lg focus:outline-none focus:ring focus:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Role*"
              className="w-full p-3 bg-[#2b1838] text-white border border-gray-500 rounded-lg focus:outline-none focus:ring focus:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Experience*"
              className="w-full p-3 bg-[#2b1838] text-white border border-gray-500 rounded-lg focus:outline-none focus:ring focus:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Location*"
              className="w-full p-3 bg-[#2b1838] text-white border border-gray-500 rounded-lg focus:outline-none focus:ring focus:ring-pink-500"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 bg-[#2b1838] text-white border border-gray-500 rounded-lg focus:outline-none focus:ring focus:ring-pink-500"
            ></textarea>
          </div>
          <div className="space-y-4">
            <input
              type="file"
              className="w-full text-gray-300 bg-[#2b1838] border border-gray-500 rounded-lg p-3 focus:outline-none"
            />
            <p className="text-white">Note: Size Less Than 2MB</p>
             <button type='submit' className="px-6 py-3 bg-transparent border border-pink-600 text-white rounded-full hover:bg-pink-500 hover:text-white transition duration-300">
              Join now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
