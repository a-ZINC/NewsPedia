import React, { useRef, useState, useEffect, useContext } from 'react';
import {useScroll , useTransform, motion} from 'framer-motion'
import { AppContext } from '../context/AppContext';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Slide = () => {
  const hscrollref=useRef(null);
    const {scrollYProgress}=useScroll({
        target: hscrollref,
        offset:['start start','end end']
    });
    const dt=new Date();
    const {date}=useContext(AppContext);
    const [month,day,year]=date(dt);
    const {trendpost,post}=useContext(AppContext);
    const x=useTransform(scrollYProgress,[0.3,1],["0%","-70%"]);
    const initialtop=useRef(0);
    const initialbottom=useRef(0);
    const [pos,setpos]=useState(false);
    useEffect(()=>{
      function scrolllistener(e){
        console.log(initialbottom.current,"   ",initialtop.current," ",window.scrollY)
        if(hscrollref.current){
          if(window.scrollY>initialtop.current && window.scrollY<initialbottom.current){
            setpos(true);
          }
          else{
            setpos(false);
          }
         
        }

      }
      function initialtopbottom(){
        if(hscrollref.current){
        initialbottom.current=hscrollref.current.getBoundingClientRect().bottom;
        initialtop.current=hscrollref.current.getBoundingClientRect().top;
        }
      }
      window.addEventListener('scroll', scrolllistener);
      initialtopbottom();
      return()=>{
        window.removeEventListener('scroll', scrolllistener);
      }
    },[]);

  return (
    <div className={`h-[200vh]  ${pos?'fixed':'relative'} ${pos?'w-screen':'w-full'} ${pos?'bg-heading':'bg-bg'}`} ref={hscrollref}>
        <div className={`h-screen ${pos?'bg-heading':'bg-bg'} sticky top-0 left-0 flex items-center overflow-hidden mb-10 `}>
            <motion.div className='flex gap-[10vw]' style={{ x, translateX: pos ? 0 : 0 }}>
            {
              trendpost?.filter((posts,i)=>(i<=2))?.map((card,ind)=>{
                console.log(post);
                return <div key={ind} className='bg-bg aspect-video w-[40vw] shadow-[0px_1px_2px_1px_rgba(255,255,255,0.5)]'><img alt='empty' src={`${card.urlToImage}`} className='grayscale h-full w-full bg-cover'></img>
                  
                </div>
              })
            }

            {
              post?.filter((posts,i)=>(i<=2))?.map((ipost,ind)=>{
                console.log(ipost);
                return <div key={ind} className='bg-bg aspect-video w-[40vw] shadow-[0px_1px_2px_1px_rgba(255,255,255,0.5)]'><img alt='empty' src={`${ipost.urlToImage}`} className='grayscale h-full w-full bg-cover'></img></div>
              })
            }
            
            </motion.div>
            

        </div>
    </div>
  )
}

export default Slide