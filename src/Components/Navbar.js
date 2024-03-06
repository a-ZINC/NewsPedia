import React, { useEffect, useRef } from 'react';
import Upnav from './Upnav';
import Downnav from './Downnav';
const Navbar = () => {
  const headingref=useRef(null)
  
  return (
    <div className='w-full relative'>
        <Upnav/>
        <header className='flex justify-center lg:py-[4rem] sm:pt-[0.8rem] sm:pb-[0.2rem] border-b-[1px] border-b-[#777777] headingfix'>
            <h1 className='color-heading lg:leading-[4rem] font-black tracking-tight lg:text-8xl text-4xl leading-[2.5rem]' ref={headingref}>News Pedia</h1>
        </header>
        <Downnav id='downnav-sticky' headingref={headingref}/>
    </div>
  )
}

export default Navbar