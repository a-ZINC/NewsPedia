import React from 'react'
import { FaInstagram,FaTwitter,FaFacebook,FaDiscord } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='w-full min-h-[100px] flex md:flex-row flex-col md:py-0 py-2 md:gap-0 sm:gap-4 gap-1 justify-between items-center bg-heading px-[2rem]'>
      
      <p className='text-[#868686] font-serif sm:text-[0.8rem] text-[0.6rem] font-extralight'>Copyright by NewsPedia</p>
      <h1 className='text-parent-bg sm:text-5xl text-[2rem] font-black'>News Pedia</h1>
      <div className='flex justify-between items-center gap-3 sm:ext-base text-[0.7rem]  text-parent-bg md:mt-0 mt-2 sm:mt-1'>
            <Link to=""><FaInstagram/></Link>
            <Link to=""><FaTwitter/></Link>
            <Link to=""><FaFacebook/></Link>
            <Link to=""><FaDiscord/></Link>
      </div>
      
    </div>
  )
}

export default Footer