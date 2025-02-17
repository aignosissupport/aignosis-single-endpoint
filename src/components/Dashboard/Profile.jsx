import React, { useState } from 'react'
import { FaBell } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import pic from "../../assets/pic4.png"
import Sessions from './Sessions';
import Header from '../Header';
import { FaUserEdit } from "react-icons/fa";
import Newnavbar from '../Newnavbar';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup visibility
    const [isEditing, setIsEditing] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };
    const toggleEdit = () => {
        setIsEditing((prev) => !prev);
    };

    return (
        <>
            <Newnavbar />
            <Header />
            <div className='w-full text-white px-5 md:px-10 py-10 mt-[2vw] font-manrope pt-[8vh] md:pt-[12vh] min-h-screen h-full bg-[#2B1B2D]'>
                <div className="w-full h-full md:block hidden">
                    <div
                        className="w-full h-[7vw] flex items-center rounded-3xl justify-between px-[5vw]"
                        style={{
                            background: 'linear-gradient(to right, #B740A1, #9C00AD)',
                        }}
                    >
                        {/* Avatar Section */}
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                                {/* Placeholder for Avatar */}
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
                            {/* Bell Icon */}
                            <FaBell />
                        </div>
                    </div>
                    {isEditing ? (
                        <div className="mt-4 relative border-2 border-[#C4C4C45E] w-full h-full bg-[#2B1B2D] text-sm text-white px-[4vw] py-6 rounded-md">
                            <h2 className="text-lg font-bold mb-4">Add Personal Info (Guardian)</h2>
                            <form>
                                <div className="grid grid-cols-1 pr-[20vw] md:grid-cols-2 gap-6 text-sm">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full p-2 rounded bg-[#3D253F] text-white"
                                    />
                                    <input
                                        type="text"
                                        placeholder="User name"
                                        className="w-full p-2 rounded bg-[#3D253F] text-white"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Mobile number"
                                        className="w-full p-2 rounded bg-[#3D253F] text-white"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full p-2 rounded bg-[#3D253F] text-white"
                                    />
                                    <input
                                        type="date"
                                        placeholder="Date of birth"
                                        className="w-full p-2 rounded bg-[#3D253F] text-white"
                                    />
                                    <select className="w-full p-2 rounded bg-[#3D253F] text-white">
                                        <option value="">Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="mt-4 flex justify-between items-center">
                                    <div>
                                        <label className="block mb-2">Profile Picture</label>
                                        <div className="w-[12vw] h-[12vw] bg-[#3D253F] flex justify-center items-center mt-5 rounded-md">
                                            <div className="w-14 flex justify-center items-center h-14 bg-[#9C00AD] rounded-full">
                                                <FaPlus />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="absolute bottom-10 right-10">
                                <div className="flex space-x-4">
                                    <button
                                        type="submit"
                                        className="border border-[#9C00AD] px-6 py-2 rounded-full text-white"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                            <div className="absolute top-10 right-10">
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="border border-red-500 px-6 py-2 rounded-full text-white"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>

                    ) : (
                        <>
                            <div className="mt-5 px-5">
                                <h3 className='font-semibold'>Dashboard</h3>
                                <div className="border-b-2 my-2 border-[#B859EA]"></div>
                            </div>
                            <div className="mt-16 px-5">
                                <h3 className='font-semibold'>Profile</h3>
                                <div className="flex gap-4">
                                    <div className="w-[12vw] h-[12vw] bg-[#3D253F] flex justify-center items-center mt-5 rounded-md">
                                        <div className="w-14 flex relative justify-center items-center h-14 bg-[#9C00AD] rounded-full">
                                            <h3 className='font-bold'>P1</h3>
                                            <FaUserEdit onClick={toggleEdit} className='absolute cursor-pointer bottom-0 right-0' />
                                        </div>
                                    </div>
                                    <div className="w-[12vw] h-[12vw] bg-[#3D253F] flex justify-center items-center mt-5 rounded-md">
                                        <div className="w-14 flex relative justify-center items-center h-14 bg-[#9C00AD] rounded-full">
                                            <h3 className='font-bold'>P2</h3>
                                            <FaUserEdit onClick={toggleEdit} className='absolute cursor-pointer bottom-0 right-0' />
                                        </div>
                                    </div>
                                    <div className="w-[12vw]  h-[12vw] bg-[#3D253F] flex justify-center items-center mt-5 rounded-md">
                                        <div className="w-14 cursor-pointer flex justify-center items-center h-14 bg-[#9C00AD] rounded-full">
                                            <FaPlus />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 px-5">
                                <div
                                    className="w-full h-[5vw] flex items-center justify-between px-10 mt-4"
                                    style={{
                                        background: 'linear-gradient(to left, #4B1056, #280834)',
                                    }}
                                >
                                    {/* Left Section */}
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10">
                                            <img
                                                src={pic}
                                                alt="Child Icon"
                                                className="w-full h-full"
                                            />
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
                                    <div className="flex items-center space-x-8">
                                        <button className="text-white font-bold text-xl">
                                            Act now
                                        </button>
                                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20">
                                            <FaPlus size={12} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Sessions />
                            <Link to={'/prices'} className="w-full border-2 flex justify-center items-center border-zinc-500 py-4">
                                <h3 className='font-bold'>Book Now</h3>
                            </Link>
                        </>
                    )}
                </div>

            </div>
        </>
    )
}

export default Profile