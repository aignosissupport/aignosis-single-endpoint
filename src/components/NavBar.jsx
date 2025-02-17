import React from 'react'
import { FiAlignRight } from "react-icons/fi";
import { Link, useLocation, useNavigate } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className='navbar text-center w-full flex justify-between items-center px-[5vw] md:py-[14px] 2xl:py-[10px]'>
            <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60 rounded-lg"></div>
                <Link to="/" onClick={() => handleLinkClick('/')} className="relative md:text-xl 2xl:text-3xl font-semibold tracking-wide text-white z-10">
                    Ai.gnosis
                </Link>
            </div>
            <div className="text-white">
                <FiAlignRight size={30}/>
            </div>
        </div>
    )
}

export default NavBar