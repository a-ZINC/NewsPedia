import React, { useContext, useEffect, useRef, useState } from 'react'
import Sidetrend from '../side_components/Sidetrend'
import Sidesource from '../side_components/Sidesource'
import { AppContext } from '../context/AppContext'
import {useLocation} from 'react-router-dom';
import {motion,useScroll,useTransform} from 'framer-motion';


const Side = () => {
  const {getmultipost}=useContext(AppContext);
  const location=useLocation();
  const ref = useRef(null)

  
  useEffect(()=>{
    const page=1;
    if(location.pathname.includes('country')){
      const loc=location.pathname.split('/');
      console.log(loc);
      const country=loc[loc.indexOf('country')+1];
      console.log(country);
      getmultipost(page,country);
    }
    else{
      getmultipost(page)
    }
  },[location.pathname,location.search]);

  const {scrollYProgress}=useScroll();
  let y=useTransform(scrollYProgress,[0.5,1],['0%','85%']);
  const [screen,setscreen]=useState(window.innerWidth>1024);
  useEffect(()=>{
    function handleresize(e){
      if(e.target.innerWidth>1024){
        setscreen(true);
      }
      else{
        setscreen(false);
      }
    }
    window.addEventListener('resize', handleresize);
    return()=>{
      window.removeEventListener('resize', handleresize)
    }
  },[]);
  
  return (
 
      <div className={`lg:w-1/4 lg:pl-1 w-full relative mt-6`} >
        <motion.div className='' style={screen?{y}:{}}>
        <Sidetrend/>
        <Sidesource/>
        </motion.div>
            
      </div>
  )
}

export default Side