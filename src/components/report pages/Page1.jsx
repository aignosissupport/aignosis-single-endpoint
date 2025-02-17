import React from 'react';
import img1 from "../../assets/report/img1.png";
import img2 from "../../assets/report/img2.png";
import img3 from "../../assets/report/img3.png";
import "./pdf.css";

const Page1 = () => {
    const progressData = [
        { label: 'Social Preference', value: 85 },
        { label: 'Eye Contact', value: 75 },
        { label: 'Joint Attention', value: 80 },
        { label: 'Gaze Hold', value: 70 },
        { label: 'Gaze Speed', value: 65 },
        { label: 'Attention Shift Frequency', value: 60 },
        { label: 'Gaze Dispersion', value: 78 },
        { label: 'Focal Points', value: 82 },
        { label: 'Screen Focus', value: 72 },
        { label: 'Object Tracking', value: 80 },
    ];

    const progressData2 = [
        { label: 'Social Preference', value: 85 },
        { label: 'Eye Contact', value: 75 },
        { label: 'Joint Attention', value: 80 },
    ];

    return (
        <div className="pdf-image flex flex-col font-manrope items-center p-8 bg-white min-h-screen">
            <div className="pdf-page bg-white p-8 shadow-md rounded-md w-[210mm] h-[297mm]">
                <div>
                    <h1 className='text-left text-sm'>Detailed Featured report</h1>
                    <div className="w-full border-t-2 mt-2 border-[#9C00AD]"></div>
                </div>

                <div className="w-full items-center justify-start flex mt-4">
                    <div className="w-[25%]">
                        <img src={img1} alt="Patient Image" />
                    </div>
                    <div className="font-playfair text-xs ml-5">
                        <h3>Patient Details:</h3>
                        <h3>Name: Jinaya Sagar Kothari</h3>
                        <h3>Age: 3 years</h3>
                        <h3>Date of Birth: 20/08/2021</h3>
                        <h3>Gender : Female</h3>
                    </div>
                </div>

                <h3 className='text-center font-playfair mt-4 font-semibold text-lg'>Developmental Skills Summary</h3>

                <div className="w-full justify-center font-playfair mt-8 font-semibold gap-5 px-5 items-center flex">
                    <div className="w-[45%] justify-center font-playfair mt-2 font-semibold items-center flex">
                        <div className="w-[10vw] flex flex-col justify-center items-center">
                            <img src={img2} alt="Visual Interest" />
                            <div className="w-[12vw] p-4 h-[8vw] bg-[#BD35E5] flex flex-col items-center justify-center rounded-3xl">
                                <h4 className='text-center'> Visual Interest Response</h4>
                                <h4>74%</h4>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[50%] flex-col">
                        {progressData.map((item, index) => (
                            <div key={index} className="w-full h-[4vh] bg-[#BD35E54D] rounded-full mb-2">
                                <div
                                    className="h-full bg-[#BD35E5] rounded-full flex justify-between items-center p-1"
                                    style={{ width: `${item.value}%` }}
                                >
                                    <div>
                                        <h4 className="text-xs text-white ml-3">{item.label}</h4>
                                    </div>
                                    <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center">
                                        <h5 className="text-[10px] text-[#BD35E5] font-raleway">{item.value}%</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full justify-center font-playfair mt-8 font-semibold gap-5 px-5 items-center flex">
                    <div className="w-[45%] justify-center font-playfair mt-2 font-semibold items-center flex">
                        <div className="w-[10vw] flex flex-col justify-center items-center">
                            <img src={img3} alt="Movement and Posture" />
                            <div className="w-[12vw] p-4 h-[8vw] bg-[#EC378E] flex flex-col items-center justify-center rounded-3xl">
                                <h4 className='text-center'> Movement and Posture</h4>
                                <h4>78%</h4>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[50%] flex-col">
                        {progressData2.map((item, index) => (
                            <div key={index} className="w-full h-[4vh] bg-[#B985A070] rounded-full mb-2">
                                <div
                                    className="h-full bg-[#EC378E] rounded-full flex justify-between items-center p-1"
                                    style={{ width: `${item.value}%` }}
                                >
                                    <div>
                                        <h4 className="text-xs text-white ml-3">{item.label}</h4>
                                    </div>
                                    <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center">
                                        <h5 className="text-[10px] text-[#EC378E] font-raleway">{item.value}%</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full flex justify-between items-center text-xs font-manrope mt-10 border-t-2 border-[#800080] pt-2">
                    <span className='text-[10px]'>Sample</span>
                    <div className="text-center text-[10px]">
                        <span>Received Date: 2023-07-28 17:22:09</span>
                        <br />
                        <span>ID: Report Generation Date:</span>
                    </div>
                    <span className='text-[10px]'>Page 06</span>
                </div>
            </div>
        </div>
    )
}

export default Page1;
