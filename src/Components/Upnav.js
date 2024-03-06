import React, { useContext, useEffect, useRef, useState } from 'react';
import { IoCalendarOutline } from "react-icons/io5";
import {Link,NavLink} from "react-router-dom";
import { FaInstagram,FaTwitter,FaFacebook,FaDiscord } from "react-icons/fa";
import { AppContext } from '../context/AppContext';
import { RiArrowDropDownLine } from "react-icons/ri";

const Upnav = () => {
    const dt=new Date();
    const {date,lang,setlang}=useContext(AppContext);
    const [month,day,year]=date(dt);
    const [showlanguage,setshowlanguage]=useState(false);
    const ref=useRef(null);
    useEffect(()=>{
        function close(e){
            if(ref.current && !ref.current.contains(e.target)){
            setshowlanguage(false);
            }
        };
        document.addEventListener('click', close);

        return ()=>{
            document.removeEventListener('click', close);
        };
    },[]);
    let about='ABOUT';
    let newabout;
    function shuffletext(para){
        console.log(para);
        console.log(para.length);
        
        const charArray = para.split('');

    for (let i = 1; i < charArray.length; i++) {
        const randIndex = Math.floor(Math.random() * charArray.length);
        let randChar = charArray[randIndex];

        charArray[randIndex] = charArray[i];
        charArray[i] = randChar;

        console.log(charArray[i]);
    }

        const shuffledString = charArray.join('');
        return shuffledString;
    }
  return (
    <div className='hidden lg:relative lg:flex flex-row justify-between items-center p-[1rem] border-b-[1px] border-b-[#777777] text-[1rem] font-bold leading-4'>
        <div className='flex justify-between items-center gap-2'>
            <IoCalendarOutline/>
            <p>{month} {day},{year}</p>
        </div>
        <div className='flex justify-between items-center gap-6'>
            <div className='flex items-center cursor-pointer' >
                <div className="flex items-center"onClick={()=>setshowlanguage(true)} ref={ref}>{lang}<RiArrowDropDownLine className='text-lg'/></div>
                <div className={`h-[4rem] overflow-y-scroll p-2 text-base shadow-xl font-medium gap-2 flex-col absolute top-[100%] border-t-[1px] border-t-red- scrollbar ${showlanguage?'flex':'hidden'} `}  >
                    <NavLink to='/language/ar' onClick={(e)=>{setlang(e.target.innerText.toUpperCase())}}>ARABIC</NavLink>
                    <NavLink to='/language/de' onClick={(e)=>{setlang(e.target.innerText.toUpperCase())}}>GERMAN</NavLink>
                    <NavLink to='/language/en' onClick={(e)=>{setlang(e.target.innerText.toUpperCase())}}>ENGLISH</NavLink>
                    <NavLink to='/language/es' onClick={(e)=>{setlang(e.target.innerText.toUpperCase())}}>SPANISH</NavLink>
                    <NavLink to='/language/fr' onClick={(e)=>{setlang(e.target.innerText.toUpperCase())}}>FRENCH</NavLink>
                    <NavLink to='/language/he' onClick={(e)=>{setlang(e.target.innerText.toUpperCase())}}>HEBREW</NavLink>
                    <NavLink to='/language/it' onClick={(e)=>{setlang(e.target.innerText.toUpperCase())}}>ITALIAN</NavLink>
                    <NavLink to='/language/nl' onClick={(e)=>{setlang(e.target.innerText.toUpperCase())}}>DUTCH</NavLink>
                    <NavLink to='/language/no' onClick={(e)=>{setlang(e.target.innerText.toUpperCase())}}>NORWEGIAN</NavLink>
                    <NavLink to='/language/pt' onClick={(e)=>{setlang(e.target.innerText.toUpperCase())}}>PORTUGUESE</NavLink>
                    <NavLink to='/language/ru' onClick={(e)=>{setlang(e.target.innerText.toUpperCase())}}>RUSSIAN</NavLink>
                    <NavLink to='/language/sv' onClick={(e)=>{setlang(e.target.innerText.toUpperCase())}}>SWEDISH</NavLink>
                    <NavLink to='/language/ud' onClick={(e)=>{setlang(e.target.innerText.toUpperCase())}}>UNDEFINED</NavLink>
                    <NavLink to='/language/zh' onClick={(e)=>{setlang(e.target.innerText.toUpperCase())}}>CHINESE</NavLink>
                </div>
            </div>
            <NavLink to={"/about"} onMouseOver={()=>{newabout=shuffletext(about);console.log(newabout); about=newabout}}><div>{about}</div></NavLink>
            <NavLink to={"/contact"}><div>CONTACT</div></NavLink>
            <NavLink to={"/support"}><div>SUPPORT</div></NavLink>
        </div>
        <div className='flex justify-between items-center gap-3 text-sm'>
            <Link to=""><FaInstagram/></Link>
            <Link to=""><FaTwitter/></Link>
            <Link to=""><FaFacebook/></Link>
            <Link to=""><FaDiscord/></Link>
        </div>
    </div>
  )
}

export default Upnav