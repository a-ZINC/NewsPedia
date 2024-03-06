import React, { useEffect, useRef } from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import imgurl from '../assets/noimg.webp';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaShareAlt } from "react-icons/fa";
import { FaInstagram,FaTwitter,FaFacebook} from "react-icons/fa";
import {motion,useInView,useAnimationControls} from 'framer-motion'
const Card = ({card,ind}) => {
    const dt=new Date();
    const {date}=useContext(AppContext);
    const [month,day,year]=date(dt);
    const location =useLocation();
    const cardref=useRef(null);
    const isInView = useInView(cardref,{amount:'some' , once:true});
    const inViewControl=useAnimationControls();
    const parentVariants={
        visible:{
            y:[200,0],
            opacity:[0,1],
            backgroundColor:['#f5f5f5',"#ffffff"],
            transition:{
                delay:0.2,
                duration:0.7,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    }
    useEffect(()=>{
        if(isInView){
            inViewControl.start('visible')
        }
    },[isInView,inViewControl])
  return (
    <motion.NavLink className='w-full flex items-center justify-center gap-6 flex-wrap md:flex-nowrap' to={`${location.pathname}post/${card.source.name}-${card.title.substr(0,13)}-${ind}`} ref={cardref} variants={parentVariants} initial='hidden' animate={inViewControl}>
        <div className='md:w-1/3 lg:w-2/5 max-md:w-full h-[230px] relative group'>
            <div className='h-full w-full relative overflow-hidden z-0 before:bg-transparent before:grayscale before:absolute before:inset-0  before:z-0 before:hover:z-[-1]' id='filter'><img src={card.urlToImage===null?(imgurl):card.urlToImage} alt="notAvailable" onError={(e)=>{e.target.src=imgurl}} loading='lazy' className='object-cover w-full h-full z-0 hover:scale-105 ease-[cubic-bezier(0.19, 1, 0.22, 1)] transition-all duration-300 hue-rotate-15' /></div>
            <div className='flex group/dom'>
                <p className='absolute bottom-5 left-4 text-bg text-[0.80rem] font-serif font-black group-hover/dom:text-red-'>. </p>
                <p className='absolute bottom-4 left-6 w-m text-bg text-[0.80rem] font-serif font-medium text-wrap group-hover/dom:text-red-'>{card.source.name}</p>
            </div>
            <div className='group/hi hidden group-hover:block'>
            <button className='absolute scale-100  group/color -translate-y-7 group-hover:-translate-y-10 right-4 rounded-full bg-bg p-2  group-hover/hi:scale-0 group-hover/hi:-translate-y-10 transition-all duration-300 origin-bottom justify-center items-center'><FaShareAlt className='text-xs group-hover/color:text-red-'></FaShareAlt></button>
            <Link to="" className='absolute scale-0 group/color  -translate-y-7 right-4 rounded-full bg-bg p-2  group-hover/hi:scale-100 group-hover/hi:-translate-y-10 transition-all duration-300 origin-bottom justify-center items-center'><FaFacebook className='text-xs group-hover/color:text-red-'/></Link>
            <Link to="" className='absolute scale-0 group/color  -translate-y-11 right-4 rounded-full bg-bg p-2  group-hover/hi:scale-100 group-hover/hi:-translate-y-[4.5rem] transition-all duration-300 origin-bottom justify-center items-center'><FaTwitter className='text-xs group-hover/color:text-red-'/></Link>
            <Link to="" className='absolute scale-0  group/color  -translate-y-16 right-4 rounded-full bg-bg p-2  group-hover/hi:scale-100 group-hover/hi:-translate-y-[6.5rem] transition-all duration-300 origin-bottom justify-center items-center'><FaInstagram className='text-xs group-hover/color:text-red-'/></Link>
            </div>
            
        </div>
        <div className='md:w-2/3 lg:3/5 max-md:w-full '>
            <div id='clamp' className='max-sm:text-[1.3rem] max-[500px]:text-[1rem] min-[500px]:leading-[2.1rem]  sm:text-[1.4rem] transition-all duration-300 hover:text-red-'>{card.title}</div>
            <div className='flex gap-2 my-4 font-serif text-[0.75rem] max-sm:text-[0.65rem] text-date font-medium items-baseline'>
            <Link className='text-red- font-semibold text-sm max-sm:text-xs transition-all duration-300 hover:text-heading'>{card.source.name}</Link>
            <p className='text-[#a8a29e] font-black'>.</p>
            <p>{month} {day},{year}</p>
            <p className=' text-[#a8a29e] font-black'>.</p>
            <p>
                {
                    card.content===null?(`1 mins read`): (card.content.length<210?(`2 mins read`):(
                        card.content.length<250?(`3 mins read`):(
                            card.content.length<300?(`4 mins read`):(`5 mins read`)
                        )
                    )
                    )
                }
            </p>
            </div>
            
        <p className=' font-serif text-base max-sm:text-sm max-[500px]:text-[0.85rem] font-normal leading-7' id='descclamp'>{card.description}</p>
        <p className='font-serif text-[0.75rem] max-sm:text-[0.65rem] text-date font-medium mt-4'>By <span className=' text-red- font-light text-[0.85rem] max-sm:text-[0.75rem]'>{card.author==null?(card.source.name):(card.author)}</span></p>
        </div>
    </motion.NavLink>
  )
}

export default Card