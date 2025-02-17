import React, { useState, useEffect } from "react";
import { FaBell } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import pic from "../../assets/pic4.png"
import { FaUserEdit } from "react-icons/fa";

import fetchData from "../config/fetchData";
import Sessions from './Sessions';
import Header from '../Header';
import Newnavbar from '../Newnavbar';
import { Link } from 'react-router-dom';
import axios from 'axios';  // Import axios at the top

const Dashboard = () => {
  const token = localStorage.getItem("authToken"); // Fetch the token from localStorage

  const API_BASE_URL = import.meta.env.VITE_MAIN_BACKEND;

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/profiles`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setProfiles(response.data.profiles); // Set the fetched profiles
      } catch (err) {
        console.error('Error fetching profiles:', err);
        setError('Error fetching profiles');
      }
    };
    fetchProfiles();
  }, [token]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const [currentProfile, setCurrentProfile] = useState(null); // For editing specific profile
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    age: "",
    email: "",
    dob: "",
    gender: "",
  });

  const [profilePic, setProfilePic] = useState(null); // State to handle profile picture

  const toggleEdit = (profile = null) => {
    if (profile) {
      // Edit existing profile
      setCurrentProfile(profile);
      setFormData({
        name: profile.name,
        username: profile.username,
        age: profile.age,
        email: profile.email,
        dob: profile.dob,
        gender: profile.gender,
      });
      setProfilePic(profile.profilePic); // If profile picture exists
      setIsUpdating(true);
    } else {
      // Add new profile
      setFormData({
        name: "",
        username: "",
        age: "",
        email: "",
        dob: "",
        gender: "",
      });
      setProfilePic(null); // Reset profile pic
      setIsUpdating(false);
    }
    setIsEditing(true);
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      profilePic: e.target.files[0],
    }));
  };

  const handleProfilePicChange = (e) => {
    setProfilePic(e.target.files[0]); // Update profilePic in state
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("authToken");

    const profileFormData = new FormData();
    profileFormData.append("name", formData.name);
    profileFormData.append("username", formData.username);
    profileFormData.append("age", formData.age);
    profileFormData.append("email", formData.email);
    profileFormData.append("dob", formData.dob);
    profileFormData.append("gender", formData.gender);

    const profilePic = document.querySelector("#profilePicInput").files[0];
    if (profilePic) {
      profileFormData.append("profilePic", profilePic);
    }

    try {
      if (currentProfile) {
        console.log("Updating profile with ID:", currentProfile.id);
        const response = await axios.put(
          `${API_BASE_URL}/api/profiles/${currentProfile.id}`, // Ensure ID is passed
          profileFormData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // Update the profile in the local state
        setProfiles((prevProfiles) =>
          prevProfiles.map((profile) =>
            profile.id === currentProfile.id ? response.data.profile : profile
          )
        );
        console.log("Profile updated successfully:", response.data);
      } else {
        // Add a new profile
        const response = await axios.post(
          `${API_BASE_URL}/api/profiles/add`,
          profileFormData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setProfiles((prevProfiles) => [...prevProfiles, response.data.profile]);
        console.log("Profile added successfully:", response.data);
      }

      setIsEditing(false);
      setCurrentProfile(null);
    } catch (err) {
      console.error("Error saving profile:", err);
      setError(
        err.response?.data?.message || "An error occurred while saving the profile."
      );
    }
  };



  return (
    <>
      <Newnavbar />
      <Header />
      <div className='w-full text-white px-5 md:px-10 py-10 mt-[2vw] font-manrope pt-[8vh] md:pt-[12vh] h-full bg-[#2B1B2D]'>
        <div className="w-full h-full md:block hidden">
          {/* Header */}
          <div
            className="w-full h-[7vw] flex items-center rounded-3xl justify-between px-[5vw]"
            style={{
              background: "linear-gradient(to right, #B740A1, #9C00AD)",
            }}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                {profiles.length > 0 && profiles[0].profilePicUrl ? (
                  <div className="w-full h-full bg-gray-500 overflow-hidden rounded-full flex items-center justify-center">
                    <img
                      className="w-full h-full object-cover"
                      src={profiles[0].profilePicUrl}
                      alt="Profile"
                    />
                  </div>

                ) : (
                  <div className="w-full h-full bg-gray-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">?</span> {/* Default placeholder */}
                  </div>
                )}
              </div>
              <div>
                <h2 className="text-white text-base font-medium">Welcome</h2>
                {profiles.length > 0 ? (
                  <>
                    <p className="text-white font-bold text-xl">{profiles[0].name}</p>
                    <p className="text-white text-xs">{profiles[0].email}</p>
                  </>
                ) : (
                  <p className="text-white text-xs">No profile data available</p>
                )}
              </div>
            </div>

            {/* Notification Icon */}
            {/* <div className="text-white text-2xl">
              <FaBell />
            </div> */}
          </div>

          <div>
            {isEditing ? (
              <div className="mt-4 relative border-2 border-[#C4C4C45E] w-full h-full bg-[#2B1B2D] text-sm text-white px-[4vw] py-6 rounded-md">
                <h2 className="text-lg font-bold mb-4">
                  {isUpdating ? "Edit Personal Info" : "Add Personal Info (Guardian)"}
                </h2>
                <form>
                  <div className="grid grid-cols-1 pr-[20vw] md:grid-cols-2 gap-6 text-sm">
                    {/* Form Fields */}
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="w-full p-2 rounded bg-[#3D253F] text-white"
                    />
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="User name"
                      className="w-full p-2 rounded bg-[#3D253F] text-white"
                    />
                    <input
                      type="text"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder="Age"
                      className="w-full p-2 rounded bg-[#3D253F] text-white"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full p-2 rounded bg-[#3D253F] text-white"
                    />
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      placeholder="Date of birth"
                      className="w-full p-2 rounded bg-[#3D253F] text-white"
                    />
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full p-2 rounded bg-[#3D253F] text-white"
                    >
                      <option value="">Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <label className="block mb-2">Profile Picture</label>
                    <input
                      type="file"
                      id="profilePicInput"
                      name="profilePic"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="w-full p-2 rounded bg-[#3D253F] text-white"
                    />
                  </div>
                  <div className="mt-4 flex space-x-4">
                    <button
                      onClick={handleSaveProfile}
                      className="border border-[#9C00AD] px-6 py-2 rounded-full text-white"
                    >
                      {isUpdating ? "Update" : "Save"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="border border-red-500 px-6 py-2 rounded-full text-white"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <>
                <div className="mt-5 px-5">
                  <h3 className="font-semibold">Profiles</h3>
                  <div className="grid grid-cols-6 gap-4">
                    {profiles.map((profile) => (
                      <div
                        key={profile._id}
                        className="w-[12vw] h-[12vw] bg-[#3D253F] flex justify-center items-center mt-5 rounded-md cursor-pointer"
                        onClick={() => toggleEdit(profile)}
                      >
                        <div className="w-14 flex relative overflow-hidden justify-center items-center h-14 bg-[#9C00AD] rounded-full">
                          <img className="w-full h-full object-cover" src={profile.profilePicUrl} alt="" />
                        </div>
                      </div>
                    ))}
                    <div
                      onClick={() => toggleEdit()}
                      className="w-[12vw] h-[12vw] bg-[#3D253F] flex justify-center items-center mt-5 rounded-md cursor-pointer"
                    >
                      <div className="w-14 flex justify-center items-center h-14 bg-[#9C00AD] rounded-full">
                        <FaPlus />
                      </div>
                    </div>
                  </div>

                </div>
                <div className="mt-5 px-5">
                  <div
                    className="w-full h-[5vw] flex items-center justify-between px-10  mt-4"
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
                        Take test now
                      </button>
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20">
                        <FaPlus size={12} />
                      </div>
                    </div>
                  </div>
                </div></>
            )}
          </div>
        </div>
        <div className="w-full h-full md:hidden block py-4">
          {/* Avatar Section */}
          <div
            className="w-full h-20 flex items-center rounded-2xl justify-between px-4"
            style={{
              background: 'linear-gradient(to right, #B740A1, #9C00AD)',
            }}
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                {profiles.length > 0 && profiles[0].profilePicUrl ? (
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={profiles[0].profilePicUrl}
                    alt="Profile"
                  />
                ) : (
                  <span className="text-white text-base">
                    {profiles.length > 0 && profiles[0].name ? profiles[0].name[0] : "?"}
                  </span> // Use the first letter of the name or a fallback
                )}
              </div>
              <div>
                <h2 className="text-white text-sm font-medium">Welcome</h2>
                {profiles.length > 0 ? (
                  <>
                    <p className="text-white font-bold text-lg">{profiles[0].name}</p>
                    <p className="text-white text-xs">
                      {profiles[0].email || "+1234567890"} {/* Default to phone if email is not available */}
                    </p>
                  </>
                ) : (
                  <p className="text-white text-xs">No profile data available</p>
                )}
              </div>
            </div>

            {/* <div className="text-white text-xl">
              <FaBell />
            </div> */}
          </div>

          {/* Edit Profile Form */}
          {isEditing ? (
            <div className="relative border-2 mt-[5vw] border-[#C4C4C45E] w-full h-full bg-[#2B1B2D] text-sm text-white px-[4vw] py-6 rounded-md">
              <h2 className="text-lg font-bold mb-4">
                {isUpdating ? "Edit Personal Info" : "Add Personal Info (Guardian)"}
              </h2>
              <form>
                <div className="grid grid-cols-1 pr-[20vw] gap-6 text-sm">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="w-full p-2 rounded bg-[#3D253F] text-white"
                  />
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="User name"
                    className="w-full p-2 rounded bg-[#3D253F] text-white"
                  />
                  <input
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="Age"
                    className="w-full p-2 rounded bg-[#3D253F] text-white"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full p-2 rounded bg-[#3D253F] text-white"
                  />
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    placeholder="Date of birth"
                    className="w-full p-2 rounded bg-[#3D253F] text-white"
                  />
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded bg-[#3D253F] text-white"
                  >
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <label className="block mb-2">Profile Picture</label>
                  <input
                    type="file"
                    name="profilePic"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full p-2 rounded bg-[#3D253F] text-white"
                  />
                </div>

                <div className="mt-4 flex space-x-4">
                  <button
                    type="button"
                    onClick={handleSaveProfile}
                    className="border border-[#9C00AD] px-6 py-2 rounded-full text-white"
                  >
                    {isUpdating ? "Update" : "Save"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="border border-red-500 px-6 py-2 rounded-full text-white"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div>
              {/* Display Profiles */}
              <h3 className="font-semibold mt-[10vw] text-sm">Profile</h3>

              {/* Profile List */}
              <div className="grid grid-cols-3">
                <div onClick={() => toggleEdit()} className="w-24 h-24 bg-[#3D253F] flex justify-center items-center mt-5 rounded-md">
                  <div className="w-10 h-10 bg-[#9C00AD] flex justify-center items-center rounded-full">
                    <FaPlus />
                  </div>
                </div>

                {profiles.map((profile) => (
                  <div
                    key={profile._id}
                    onClick={() => toggleEdit(profile)}
                    className="w-24 h-24 bg-[#3D253F] flex justify-center items-center mt-5 rounded-md"
                  >
                    <div className="w-10 h-10 bg-[#9C00AD] flex justify-center items-center rounded-full">
                      <h3 className="font-bold text-xl">{profile.name.charAt(0)}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 px-3">
                <div
                  className="w-full h-auto flex flex-col items-start justify-between px-4 py-3 space-y-4 sm:flex-row sm:items-center sm:px-8 sm:py-5"
                  style={{
                    background: 'linear-gradient(to left, #4B1056, #280834)',
                  }}
                >
                  {/* Left Section */}
                  <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10">
                      <img
                        src={pic}
                        alt="Child Icon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-white font-medium text-xs sm:text-sm">
                        Upto 1 in 5 children are at risk of developmental delays**
                      </p>
                      <p className="text-white font-medium mt-1 text-xs sm:text-sm">
                        Take 5 minutes to check if your child is achieving key milestones on time
                      </p>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="flex items-center justify-center w-full">
                    <button className="text-white text-center font-bold text-lg sm:text-xl">
                      Take test now
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
        <Sessions />
        <Link to={'/prices'} className="w-full border-2 flex justify-center items-center border-zinc-500 py-4">
          <h3 className='font-bold'>Book Now</h3>
        </Link>
      </div>
    </>
  )
}

export default Dashboard