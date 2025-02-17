import React from 'react'
import ChoosePlan from './ChoosePlan'
import Advantages from './Advantages'
import Faq from './Faq'
import Header from '../Header'
import Footer from '../Footer'
import ContactPage from '../ContactPage'
import BlogFooter from '../BlogPages/BlogFooter'
import Newnavbar from '../Newnavbar'


const PriceMain = () => {
  return (
    <>
    <Newnavbar/>
    <div className='bg-[#1A0C25]'>
        <Header/>
        <ChoosePlan />
        <Advantages />
        <Faq />
        <ContactPage />
        <BlogFooter/>
        </div>
    </>
  )
}

export default PriceMain
