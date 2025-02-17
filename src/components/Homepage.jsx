import React, { useState, useEffect } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import HeroSection from './home/HeroSection';
import Header from './Header';
import Newnavbar from './Newnavbar';

const Homepage = () => {
   

    return (
        <>
            <Newnavbar/>
            <Header />
            {/* Hero Section */}
            <HeroSection />
        </>
    );
}

export default Homepage;
