import React from 'react'
import { NavLink } from 'react-router-dom';
import {motion,useInView,useAnimationControls} from 'framer-motion';
import { useRef,useEffect } from 'react';
const Smallcard = ({posts}) => {
    let imgurl=posts.url;
    if(imgurl.includes('http://www.')){
         imgurl=posts.url.replace('http://www.', '');
    }
    else{
        imgurl=posts.url.replace('https://', '');
    }
    
    const size='large';
    const url=`https://icon.horse/icon/${imgurl}?size=${size}`;
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
    
        <motion.div className='flex flex-row w-full gap-7 max-lg:flex-col max-lg:items-center max-lg:gap-4 max-md:w-2/5' ref={cardref} variants={parentVariants} initial='hidden' animate={inViewControl}>
            <img src={url} alt="favicon" className=' h-full object-contain hue-rotate-30 contrast-150 shadow-[0px_1px_3px_3px_rgba(0,0,0,0.1)] w-[7rem] lg:w-[5rem] max-md:w-[4rem] max-xl:w-[6rem] hover:scale-110 transition-all duration-300 '/>
            <div className='w-1/2 max-lg:w-full flex flex-col justify-center gap-2 max-lg:items-center '>
                <NavLink className='text-base  font-extrabold transition-all duration-300 hover:text-red-'>{posts.name}</NavLink>
                <NavLink to={posts.url} className="font-serif text-xs font-medium text-para transition-all duration-300 hover:text-red- ">Visit</NavLink>
                <p className='text-sm font-semibold pt-1'>{posts.category.toUpperCase()}</p>
                
            </div>
        </motion.div>
  )
}

export default Smallcard