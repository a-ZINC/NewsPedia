import React, { useContext, useEffect, useRef, useState } from 'react';
import { NavLink,Link,useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";
import {useLocation} from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { RiArrowDropDownLine } from "react-icons/ri";
import {motion,useAnimationControls} from 'framer-motion';

const variant={
 
  visible:{
    y:[-100,0],
    transition:{
      type:'spring',
      mass:0.5,
      duration:'300ms',
    }
  }
}
const Downnav = ({headingref}) => {
  const loc=useLocation();
  let countryid='';
  let languageid='';
  const flagcountry=loc.pathname.includes('country');
  const flaglanguage=loc.pathname.includes('language');
  if(flagcountry){
    const l=loc.pathname.split('/');
    countryid=l[l.indexOf('country')+1];
  }
  if(flaglanguage){
    const l=loc.pathname.split('/');
    languageid=l[l.indexOf('language')+1];
  }
  
  
  const {setmenu,country,setcountry}=useContext(AppContext);
  const[drop,setdrop]=useState(false);
  const navigate=useNavigate();
  function clickhand(){
    setmenu(true);
  }
  
 
  function countryhandler(e){
      setcountry(e.target.innerText.toUpperCase());
  }
  const ref=useRef(null);
  useEffect(()=>{
    function remove(e){
      if(ref.current && !ref.current.contains(e.target)){
        setdrop(false);
      }
    };
      document.addEventListener('click', remove)
      return () => {
        document.removeEventListener('click', remove);
        
      };
},[]);
const refsticky=useRef(null);
const navtop=useRef(null);
const lastscrollpos=useRef(null);
const visanimate=useRef(1);
const menuref=useRef(null);
const searchref=useRef(null);
useEffect(()=>{
    function handlescroll(e){
      const navstickytop=navtop.current;
      
      if(refsticky.current){
        if(window.pageYOffset > navstickytop && window.pageYOffset > lastscrollpos.current){
          refsticky.current.classList.add('fixed');
          
          headingref.current.classList.add('headingdropsticky');
          if(visanimate.current){
            navanimate.start('visible');
            visanimate.current=0;
          }
        }
        else if(window.pageYOffset <= lastscrollpos.current && window.pageYOffset > navstickytop){
          visanimate.current=1;
          refsticky.current.classList.remove('fixed');
        
          headingref.current.classList.remove('headingdropsticky');
        }
        else{
          refsticky.current.classList.remove('fixed');
          
          headingref.current.classList.remove('headingdropsticky');
        }
        lastscrollpos.current=window.pageYOffset;
      }
    }
    function setintialpos(){
      if(refsticky.current){
        navtop.current=refsticky.current.getBoundingClientRect().top;
      }
    }

    window.addEventListener('scroll', handlescroll);
    setintialpos();

    return()=>{
      window.removeEventListener('scroll', handlescroll);
    }
},[]);
const navanimate=useAnimationControls();

  return (

    <motion.div ref={refsticky} id='downnav-sticky' className='flex justify-between items-center bg-amber-200 text-[1.2rem] h-[4.4rem]  lg:border-b-heading lg:border-b-2 '
      variants={variant}
      animate={navanimate}>
        
        <button className='w-1/12 md:px-[1rem] lg:px-[1rem] sm:px-[1rem]  text-[2.3rem] scale-100 lg:static absolute top-3 max-sm:text-2xl max-sm:top-3' ref={menuref}><TfiMenu className=' active:scale-90 '  onClick={clickhand}/></button>
        
        <div id="link" className='h-full w-5/6 hidden lg:justify-center lg:items-center lg:flex lg:flex-wrap font-bold space-x-5 '>
        <NavLink to={"/"} className=' group relative flex flex-col items-center '> <div className=' transition-all ease-in duration-300 group-hover:text-red-'>HOME</div><div className='w-[1.4rem] max-xl:hidden h-[2.5px] rounded-2xl bg-all-text justify-self-center absolute top-[-1.25rem] scale-0 transition-all ease-in duration-300  group-hover:scale-100'></div></NavLink>
        <div className='relative cursor-pointer group flex flex-col' onClick={()=>{setdrop(!drop);}} ref={ref}>
        <div className={`flex items-center transition-all ease-in duration-300 group-hover:text-red- ${flagcountry?'text-red-':'text-heading'} `}>{country} <RiArrowDropDownLine/></div><div className='w-[1.4rem] h-[2.5px] max-xl:hidden rounded-2xl bg-all-text justify-self-center absolute top-[-1.25rem] scale-0 transition-all ease-in duration-300  group-hover:scale-100 self-center'></div>
          <ul className={`absolute xl:top-[172%] top-[230%] w-[12rem] drop-shadow-xl z-10 bg-bg border-t-red- border-t-[1px] text-base font-semibold ${drop?'block':'hidden'}`} >
            <li className='hover:bg-[#eeeeee] relative group/sub1 w-full'>
              <p className='px-2 pt-2 pb-1 flex justify-between items-center'>AFRICA <RiArrowDropDownLine/></p>
              <ul className='w-full absolute left-full top-0  drop-shadow-xl bg-bg border-t-red- border-t-[1px] text-base font-medium group-hover/sub1:block hidden'>
                <NavLink to='/country/eg' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]' onClick={countryhandler}>Egypt</li></NavLink>
                <NavLink to='/country/ma' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]' onClick={countryhandler}>Morocco</li></NavLink>
                <NavLink to='/country/ng' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]' onClick={countryhandler}>Nigeria</li></NavLink>
                <NavLink to='/country/za' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee] ' onClick={countryhandler}>South Africa</li></NavLink>
              </ul>
            </li>
            <li className='hover:bg-[#eeeeee] relative group/sub1 w-full '>
              <p className='px-2 pt-2 pb-1 flex justify-between items-center'>ASIA <RiArrowDropDownLine/></p>
              <ul className='w-full max-h-[9.25rem] overflow-y-scroll scrollbar absolute left-full top-0  drop-shadow-xl bg-bg border-t-red- border-t-[1px] text-base font-medium group-hover/sub1:block hidden'>
                <NavLink to='/country/ae' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>UAE</li></NavLink>
                <NavLink to='/country/cn' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>China</li></NavLink>
                <NavLink to='/country/hk' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>Hong Kong</li></NavLink>
                <NavLink to='/country/id' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>Indonesia</li></NavLink>
                <NavLink to='/country/il' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>Israel</li></NavLink>
                <NavLink to='/country/in' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>India</li></NavLink>
                <NavLink to='/country/jp' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>Japan</li></NavLink>
                <NavLink to='/country/kr' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>South Korea</li></NavLink>
                <NavLink to='/country/my' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>Malaysia</li></NavLink>
                <NavLink to='/country/ph' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>Philippines</li></NavLink>
                <NavLink to='/country/sa' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>Saudi Arabia</li></NavLink>
                <NavLink to='/country/sg' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>Singapore</li></NavLink>
                <NavLink to='/country/th' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>Thailand</li></NavLink>
                <NavLink to='/country/tr' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>Turkey</li></NavLink>
                <NavLink to='/country/tw' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>Taiwan</li></NavLink>
              </ul>
            </li>
            <li className='hover:bg-[#eeeeee] relative group/sub1 w-full'>
              <p className='px-2 pt-2 pb-1 flex justify-between items-center'>EUROPE<RiArrowDropDownLine/></p>
              <ul className='w-full absolute max-h-[9.25rem] overflow-y-scroll scrollbar left-full top-0  drop-shadow-xl bg-bg border-t-red- border-t-[1px] text-base font-medium group-hover/sub1:block hidden'>
                <NavLink to='/country/at' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>Austria</li></NavLink>
                <NavLink to='/country/be' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>Belgium</li></NavLink>
                <NavLink to='/country/bg' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>Bulgaria</li></NavLink>
                <NavLink to='/country/ch' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>Switzerland</li></NavLink>
                <NavLink to='/country/cz' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>Czech Republic</li></NavLink>
                <NavLink to='/country/de' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>Germany</li></NavLink>
                <NavLink to='/country/fr' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>France</li></NavLink>
                <NavLink to='/country/gb' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>UK</li></NavLink>
                <NavLink to='/country/gr' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>Greece</li></NavLink>
                <NavLink to='/country/hu' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>Hungary</li></NavLink>
                <NavLink to='/country/ie' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>Ireland</li></NavLink>
                <NavLink to='/country/it' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>Italy</li></NavLink>
                <NavLink to='/country/lt' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>Lithuania</li></NavLink>
                <NavLink to='/country/lv' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]'onClick={countryhandler}>Latvia</li></NavLink>
                <NavLink to='/country/nl' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]' onClick={countryhandler}>Netherlands</li></NavLink>
                <NavLink to='/country/no' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]' onClick={countryhandler}>Norway</li></NavLink>
                <NavLink to='/country/pl' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]' onClick={countryhandler}>Poland</li></NavLink>
                <NavLink to='/country/pt' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]' onClick={countryhandler}>Portugal</li></NavLink>
                <NavLink to='/country/ro' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]' onClick={countryhandler}>Romania</li></NavLink>
                <NavLink to='/country/rs' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]' onClick={countryhandler}>Serbia</li></NavLink>
                <NavLink to='/country/ru' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]' onClick={countryhandler}>Russia</li></NavLink>
                <NavLink to='/country/se' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]' onClick={countryhandler}>Sweden</li></NavLink>
                <NavLink to='/country/si' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]' onClick={countryhandler}>Slovenia</li></NavLink>
                <NavLink to='/country/sk' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]' onClick={countryhandler}>Slovakia</li></NavLink>
                <NavLink to='/country/ua' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]' onClick={countryhandler}>Ukraine</li></NavLink>

              </ul>
            </li>
            <li className='hover:bg-[#eeeeee] relative group/sub1 w-full'>
              <p className='px-2 pt-2 pb-1 flex justify-between items-center'>NORTH AMERICA<RiArrowDropDownLine/></p>
              <ul className='w-full absolute left-full top-0  drop-shadow-xl bg-bg border-t-red- border-t-[1px] text-base font-medium group-hover/sub1:block hidden'>
                <NavLink to='/country/ca' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]' onClick={countryhandler}>Canada</li></NavLink>
                <NavLink to='/country/cu' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]' onClick={countryhandler}>Cuba</li></NavLink>
                <NavLink to='/country/mx' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]' onClick={countryhandler}>Mexico</li></NavLink>
                <NavLink to='/country/us' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee] ' onClick={countryhandler}>United States</li></NavLink>
              </ul>
            </li>
            <li className='hover:bg-[#eeeeee] relative group/sub1 w-full'>
              <p className='px-2 pt-2 pb-1 flex justify-between items-center'>SOUTH AMERICA<RiArrowDropDownLine/></p>
              <ul className='w-full absolute left-full top-0  drop-shadow-xl bg-bg border-t-red- border-t-[1px] text-base font-medium group-hover/sub1:block hidden'>
                <NavLink to='/country/ar' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]' onClick={countryhandler}>Argentina</li></NavLink>
                <NavLink to='/country/br' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]' onClick={countryhandler}>Brazil</li></NavLink>
                <NavLink to='/country/co' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]' onClick={countryhandler}>Colombia</li></NavLink>
                <NavLink to='/country/ve' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee] ' onClick={countryhandler}>Venezuela</li></NavLink>
              </ul>
            </li>
            <li className='hover:bg-[#eeeeee] relative group/sub1 w-full'>
              <p className='px-2 pt-2 pb-1 flex justify-between items-center'>OCEANIA<RiArrowDropDownLine/></p>
              <ul className='w-full absolute left-full top-0  drop-shadow-xl bg-bg border-t-red- border-t-[1px] text-base font-medium group-hover/sub1:block hidden'>
                <NavLink to='/country/au' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]' onClick={countryhandler}>Australia</li></NavLink>
                <NavLink to='/country/nz' className='w-full'><li className='px-2 pt-2 w-full pb-1 hover:bg-[#eeeeee]' onClick={countryhandler}>New Zealand</li></NavLink>
              </ul>
            </li>
          </ul>
        </div>
         <div className='text-[1rem] flex gap-4'><NavLink to={flagcountry?(`/country/${countryid}/category/buisness`):("/category/business")} className='group relative flex flex-col items-center text-[1rem]'><div className='transition-all ease-in duration-300 group-hover:text-red-'>BUISNESS</div><div className='transition-all ease-in duration-300 w-[1.4rem] h-[2.5px]  max-xl:hidden rounded-2xl bg-all-text justify-self-center absolute top-[-1.4rem] scale-0 group-hover:scale-100'></div></NavLink>
          <NavLink to={flagcountry?(`/country/${countryid}/category/sports`):("/category/sports")} className='group relative flex flex-col items-center text-[1rem]'><div className='transition-all ease-in duration-300 group-hover:text-red-'>SPORT</div><div className='transition-all ease-in duration-300 w-[1.4rem] h-[2.5px] rounded-2xl bg-all-text absolute top-[-1.4rem] max-xl:hidden scale-0 group-hover:scale-100'></div></NavLink>
          <NavLink to={flagcountry?(`/country/${countryid}/category/health`):("/category/health")} className='group relative flex flex-col items-center text-[1rem]'><div className='transition-all ease-in duration-300 group-hover:text-red-'>HEALTH</div><div className='transition-all ease-in duration-300 w-[1.4rem] h-[2.5px] rounded-2xl bg-all-text absolute top-[-1.4rem]  max-xl:hidden scale-0 group-hover:scale-100'></div></NavLink>
          <NavLink to={flagcountry?(`/country/${countryid}/category/entertainment`):("/category/entertainment")} className='group relative flex flex-col items-center text-[1rem]'><div className='transition-all ease-in duration-300 group-hover:text-red-'>ENTERTAINMENT</div><div className='transition-all ease-in duration-300 w-[1.4rem] h-[2.5px] max-xl:hidden rounded-2xl bg-all-text absolute top-[-1.4rem] scale-0 group-hover:scale-100'></div></NavLink>
          <NavLink to={flagcountry?(`/country/${countryid}/category/technology`):("/category/technology")} className='group relative flex flex-col items-center text-[1rem]'><div className='transition-all ease-in duration-300 group-hover:text-red-'>TECHNOLOGY</div><div className='transition-all ease-in duration-300 w-[1.4rem] h-[2.5px] max-xl:hidden rounded-2xl bg-all-text absolute top-[-1.4rem] scale-0 group-hover:scale-100'></div></NavLink>
          <NavLink to={flagcountry?(`/country/${countryid}/category/general`):("/category/general")} className='group relative flex flex-col items-center text-[1rem]'><div className='transition-all ease-in duration-300 group-hover:text-red-'>GENERAL</div><div className='transition-all ease-in duration-300 w-[1.4rem] h-[2.5px] max-xl:hidden rounded-2xl bg-all-text absolute top-[-1.4rem] scale-0 group-hover:scale-100'></div></NavLink>
          <NavLink to={flagcountry?(`/country/${countryid}/category/science`):("/category/science")} className='group relative flex flex-col items-center text-[1rem]'><div className='transition-all ease-in duration-300 group-hover:text-red-'>SCIENCE</div><div className='transition-all ease-in duration-300 w-[1.4rem] h-[2.5px] max-xl:hidden rounded-2xl bg-all-text absolute top-[-1.4rem] scale-0 group-hover:scale-100'></div></NavLink>
        </div></div>
        
        <div className='w-1/12 flex justify-between items-center lg:static lg:top-0 absolute top-3 right-0 max-sm:top-2 md:px-[4rem] lg:px-[3rem] sm:px-[3rem] max-sm:px-[1.5rem]' ref={searchref} onClick={clickhand}>
            <button className='rounded-full p-[10px] bg-heading font-bold shadow-[0px_1px_3px_3px_rgba(0,0,0,0.2)] group hover:bg-[#e1e1e1] hover:scale-110 active:scale-90 scale-100 transition-all duration-100 hover:shadow-[0px_1px_2px_1px_rgba(0,0,0,0.1)] '><FaSearch className=' text-bg text-base max-sm:text-[0.6rem] group-hover:text-heading'/></button>
        </div>

    </motion.div>
  )
}

export default Downnav