import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Menuheader from './Menuheader';
import { IoIosArrowBack } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import Menucountry from './Menucountry';
import {motion,AnimatePresence} from 'framer-motion'



const Menu = () => {
  const {setmenu,menu}=useContext(AppContext);
  const [home,sethome]=useState(false);
  const[menucategory,setmenucategory]=useState(false);
  const[menucountry,setmenucountry]=useState(false);
  const[menulang,setmenulang]=useState(false);
  const circleref=useRef(null);
  useEffect(()=>{

    function mousemovehandler(e){
      if(circleref.current){
      circleref.current.style.setProperty('--x', `${e.clientX}px`);
      circleref.current.style.setProperty('--y', `${e.clientY}px`);
      }
    }

    window.addEventListener('mousemove', mousemovehandler);

    return ()=>{
      window.removeEventListener('mousemove', mousemovehandler)
    }
  },[]);

  const ipath=`M0 300 Q${window.innerWidth/2} 0 ${window.innerWidth} 300 L${window.innerWidth} ${window.innerHeight+300} Q${window.innerWidth/2} ${window.innerHeight + 600} 0 ${window.innerHeight+300} L0 300 `;
  const rpath=`M0 300 Q${window.innerWidth/2} 0 ${window.innerWidth} 300 L${window.innerWidth} ${window.innerHeight} L0 ${window.innerHeight} L0 300 `;
  
  const slideVariants = {
    hidden: {
      top: '-300px'
    },
    visible: {
      top: '-200vh',
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1]
      },
      transitionEnd:{
        top:'-300px',
        zIndex:4,
      }
    },
    exit: {
      top: '200vh',
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  };
    
  const pathVariants={
    hidden:{
      fill:'#ffffff'
    },
    visible:{
      fill:'#000000',
      transition:{
        delay:0.4,
        duration:0.4,
        ease: [0.76, 0, 0.24, 1]
      },
   
    },
    exit:{
      fill:"#000000",
      transition:{
        duration:0.8,
        ease: [0.76, 0, 0.24, 1]
      },
    }
  }
  
  
const svgref=useRef(null);
  
  return (
    <div className='h-screen w-screen bg-heading '>

      <motion.div className='menuTransitionanim'
        variants={slideVariants}
        initial='hidden'
        animate='visible'
        exit='exit'>
          <svg className='w-full h-full fill-bg stroke-none' ref={svgref}>
            <motion.path variants={pathVariants} d={ipath} ></motion.path>
          </svg>
      </motion.div>

      {menu&&<div className='w-full h-full  flex flex-col items-center justify-between pb-10'>
          <Menuheader></Menuheader>
          {!home&&!menucategory&&!menucountry&&!menulang&&<div className=' z-10  text-bg lg:text-5xl md:text-4xl text-3xl w-full flex flex-col items-center justify-center gap-3' >
          <NavLink className=' md:w-9/12 w-5/6 transition-transform origin-left duration-500 hover:animate-pulse ' onClick={()=>sethome(true)}><div className='w-full flex justify-between'><div className='flex items-baseline gap-1 '>Home<IoMdArrowDropdown className='lg:text-3xl md:text-2xl text-xl'/></div><p id='num1'>00</p></div><div className='h-[1.5px] bg-bg' id='ul1'></div></NavLink>
          <NavLink to='/Profile' className=' md:w-9/12 w-5/6 transition-transform origin-left duration-500 hover:animate-pulse  ' onClick={()=>setmenu(false)}><div className='w-full flex justify-between'>Profile<p id='num2'>01</p></div><div className='h-[1.5px] bg-bg' id='ul2'></div></NavLink>
          <NavLink to='/about'className=' md:w-9/12 w-5/6 transition-transform origin-left duration-500 hover:animate-pulse  ' onClick={()=>setmenu(false)} ><div className='w-full flex justify-between'>About<p id='num3'>02</p></div><div className='h-[1.5px] bg-bg' id='ul3'></div></NavLink>
          <NavLink to='/contact'className=' md:w-9/12 w-5/6 transition-transform origin-left duration-500 hover:animate-pulse  ' onClick={()=>setmenu(false)}><div className='w-full flex justify-between'>Contact<p id='num4'>03</p></div><div className='h-[1.5px] bg-bg' id='ul4'></div></NavLink>
          <NavLink to='/support'className=' md:w-9/12 w-5/6 transition-transform origin-left duration-500 hover:animate-pulse  ' onClick={()=>setmenu(false)}><div className='w-full flex justify-between'>Support<p id='num5'>04</p></div><div className='h-[1.5px] bg-bg' id='ul5'></div></NavLink>
          </div>}

          {home&&!menucategory&&!menucountry&&!menulang&&<div className='z-10  text-bg lg:text-5xl md:text-4xl text-3xl w-full flex flex-col items-center justify-center gap-3' >
          <div className='absolute top-4 left-4 text-2xl text-bg cursor-pointer' onClick={()=>sethome(false)}><IoIosArrowBack/></div>
          <div className='md:w-9/12 w-5/6 transition-transform origin-left duration-500 hover:animate-pulse cursor-pointer ' onClick={()=>{setmenucategory(true);sethome(false);}}><div className='w-full flex justify-between'><div className='flex items-baseline gap-1 '>Category<IoMdArrowDropdown className='lg:text-3xl md:text-2xl text-xl'/></div><p id='num1'>00</p></div><div className='h-[1.5px] bg-bg' id='ull1'></div></div>
          <div className='md:w-9/12 w-5/6 transition-transform origin-left duration-500 hover:animate-pulse cursor-pointer ' onClick={()=>{setmenulang(true);sethome(false);}}><div className='w-full flex justify-between'><div className='flex items-baseline gap-1 '>Language<IoMdArrowDropdown className='lg:text-3xl md:text-2xl text-xl'/></div><p id='num2'>01</p></div><div className='h-[1.5px] bg-bg' id='ul2'></div></div>
          <div className='md:w-9/12 w-5/6 transition-transform origin-left duration-500 hover:animate-pulse cursor-pointer  'onClick={()=>{setmenucountry(true);sethome(false);}}><div className='w-full flex justify-between'><div className='flex items-baseline gap-1 '>Country<IoMdArrowDropdown className='lg:text-3xl md:text-2xl text-xl'/></div><p id='num3'>02</p></div><div className='h-[1.5px] bg-bg' id='ul3'></div></div>
          <NavLink to='/source' className='md:w-9/12 w-5/6 transition-transform origin-left duration-500 hover:animate-pulse cursor-pointer ' onClick={()=>setmenu(false)}><div className='w-full flex justify-between'><div className='flex items-baseline gap-1 '>Source</div><p id='num4'>03</p></div><div className='h-[1.5px] bg-bg' id='ul4'></div></NavLink>
          </div>}

          {!home&&menucategory&&!menucountry&&!menulang&&<div  className='z-10  text-bg lg:text-4xl md:text-3xl text-2xl w-full flex flex-col items-center justify-center gap-3' >
          <div className='absolute top-4 left-4   text-2xl text-bg cursor-pointer' onClick={()=>{sethome(true);setmenucategory(false);}}><IoIosArrowBack/></div>
          <NavLink to='/category/business' className='md:w-9/12 w-5/6 transition-transform origin-left duration-500 hover:animate-pulse ' onClick={()=>setmenu(false)}><div className='w-full flex justify-between'><div className='flex items-baseline gap-1 '>Buisness</div><p id='num1'>00</p></div><div className='h-[1.5px] bg-bg' id='ull1'></div></NavLink>
          <NavLink to='/category/sport' className='md:w-9/12 w-5/6 transition-transform origin-left duration-500 hover:animate-pulse  'onClick={()=>setmenu(false)} ><div className='w-full flex justify-between'>Sport<p id='num2'>01</p></div><div className='h-[1.5px] bg-bg' id='ul2'></div></NavLink>
          <NavLink to='/category/health' className='md:w-9/12 w-5/6 transition-transform origin-left duration-500 hover:animate-pulse  'onClick={()=>setmenu(false)} ><div className='w-full flex justify-between'>Health<p id='num3'>02</p></div><div className='h-[1.5px] bg-bg' id='ul3'></div></NavLink>
          <NavLink to='/category/entertainment' className='md:w-9/12 w-5/6 transition-transform origin-left duration-500 hover:animate-pulse  'onClick={()=>setmenu(false)}><div className='w-full flex justify-between'>Entertainment<p id='num4'>03</p></div><div className='h-[1.5px] bg-bg' id='ul4'></div></NavLink>
          <NavLink to='/category/technology' className='md:w-9/12 w-5/6 transition-transform origin-left duration-500 hover:animate-pulse  'onClick={()=>setmenu(false)} ><div className='w-full flex justify-between'>Technology<p id='num2'>04</p></div><div className='h-[1.5px] bg-bg' id='ul5'></div></NavLink>
          <NavLink to='/category/general' className='md:w-9/12 w-5/6 transition-transform origin-left duration-500 hover:animate-pulse  'onClick={()=>setmenu(false)}><div className='w-full flex justify-between'>General<p id='num3'>05</p></div><div className='h-[1.5px] bg-bg' id='ul5'></div></NavLink>
          <NavLink to='/category/science' className='md:w-9/12 w-5/6 transition-transform origin-left duration-500 hover:animate-pulse  'onClick={()=>setmenu(false)}><div className='w-full flex justify-between'>Science<p id='num4'>06</p></div><div className='h-[1.5px] bg-bg' id='ul5'></div></NavLink>
          </div>}
          {!home&&!menucategory&&menucountry&&!menulang&&<div className='z-10  text-bg w-full flex flex-col items-center justify-center gap-3' >
          <div className='absolute top-4 left-4 text-2xl text-bg cursor-pointer' onClick={()=>{sethome(true);setmenucountry(false);}}><IoIosArrowBack/></div>
          <Menucountry setmenu={setmenu} setmenucategory={setmenucategory}/>
          </div>}     
      </div>}
      {menu && <div id='circle' ref={circleref}></div>}


    </div>
  )
}

export default Menu;
