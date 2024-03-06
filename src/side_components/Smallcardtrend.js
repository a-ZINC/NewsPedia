import React, { useContext,useRef,useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { NavLink } from 'react-router-dom';
import imgsrc from '../assets/noimg.webp';
import {motion,useInView,useAnimationControls} from 'framer-motion';

const Smallcardtrend = ({posts}) => {
    const d=new Date(posts.publishedAt)
    const {date}=useContext(AppContext);
    const[month,day,year]=date(d);
    const cardref=useRef(null);
    const isInView = useInView(cardref,{amount:'some' , once:true});
    const inViewControl=useAnimationControls();
    const parentVariants={
        visible:{
            y:[200,0],
            opacity:[0,1],
            backgroundColor:['#f5f5f5',"#ffffff"],
            transition:{
                duration:0.7,
                delay:0.2,
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

        <div className='flex flex-row w-full gap-7 max-lg:flex-row' ref={cardref} variants={parentVariants} initial='hidden' animate={inViewControl}>
           <div className='w-1/3 '><img src={posts.urlToImage===null?(imgsrc):(posts.urlToImage)} alt="favicon" className='shadow-[0px_1px_3px_3px_rgba(0,0,0,0.1)] w-full aspect-[4/3] max-xl:aspect-square object-cover hover:scale-110 transition-all duration-300 '/></div> 
            <div className='w-2/3 flex flex-col justify-center gap-2 max-lg:items-start max-lg:justify-start '>
                <NavLink className='text-base  font-extrabold transition-all duration-300 hover:text-red-' id='clamp'>{posts.title}</NavLink>
                <p to={posts.url} className="font-serif text-xs font-medium text-para transition-all duration-300 hover:text-red- ">{month} {day},{year}</p>
                <NavLink className='text-sm font-semibold pt-1 transition-all duration-300 hover:text-red-'>{posts.source.name}</NavLink>
                
            </div>
        </div>

  )
}

export default Smallcardtrend;