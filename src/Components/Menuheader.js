import React, { useRef } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { MdKeyboardVoice,MdOutlineSearch } from "react-icons/md";
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

const Menuheader = () => {
    const {form,setform,setmenu,getpost}=useContext(AppContext);
    const navigate=useNavigate();
    const ref=useRef(null);
    function submithandler(e){
        e.preventDefault();
        const searchdata=form.search;
        navigate(`/search/${searchdata}`);
     
        setmenu(false);
        
        

    }
    function changehandler(e){
        console.log(form.search)
        setform((prev)=>{
            return{
           ...prev,
            [e.target.name]:e.target.value,
            }
        });
    }
    function clickhandler(){
        setmenu(false);
    }
  return (
    <div className='w-screen  bg-heading flex flex-col items-center' id='menuheader'>
        <button onClick={clickhandler} className='text-2xl z-10' ><IoCloseOutline className='text-menulight font-extrabold text-2xl absolute top-4 right-5'/></button>
        <div className='w-full pt-[4rem] pb-[3rem] px-[2rem] justify-between items-center flex lg:flex-row flex-col max-lg:gap-5  bg-heading'>
        
        <div className=' text-2xl font-bold text-menulight z-10'>News Pedia</div>
        <form onSubmit={submithandler} className='lg:w-2/5 md:w-3/4 sm:w-5/6 w-full'>
            <div className='w-full flex justify-center items-center  relative before:absolute before:w-full before:h-full before:rounded-[3rem] before:top-[0.2rem] before:left-[0.1rem] before:bg-menuheader before:shadow-[2px_2px_15px_0px_rgba(255,255,255,0.4)] before:z-0  rounded-[3rem] peer pointer-events-auto '><input ref={ref} type="text" onChange={changehandler}  name='search'className='w-full caret-pink-500 focus:outline-0 py-3 px-12 focus:px-4 bg-menulight z-10 relative peer rounded-[3rem] focus:bg-bg' placeholder='Search NewsPedia'/>
            <button className='absolute left-2 peer-focus:scale-0 p-[0.4rem] rounded-full bg-menuheaderd transition-all duration-75 z-10'><MdOutlineSearch className='text-xl font-bold text-bg'/></button>
            <button className='absolute right-2 peer-focus:scale-0 p-[0.4rem] rounded-full bg-menuheaderd transition-all duration-75 z-10'><MdKeyboardVoice className='text-xl font-bold text-bg'/></button>
            <button className='absolute right-2 peer-focus:scale-100 scale-0 p-[0.4rem] rounded-full bg-menuheaderd transition-all duration-75 z-10'><IoCloseOutline className='text-xl font-bold text-bg'/></button>
            </div>
        </form>
        <div className='flex gap-4 z-10 '>
            <div>
            <button className='bg-menuheaderd text-menulight px-3 py-2 shadow-[2px_2px_5px_0px_rgba(255,255,255,0.4)] hover:shadow-[3px_3px_9px_0px_rgba(20,20,20,0.4)] font-bold hover:bg-menulight hover:text-menuheaderd active:scale-90'>Log in</button>
            <button className='hidden bg-menuheaderd text-menulight px- py-2 shadow-[2px_2px_5px_0px_rgba(255,255,255,0.4)] hover:shadow-[3px_3px_9px_0px_rgba(20,20,20,0.4)] font-bold hover:bg-menulight hover:text-menuheaderd active:scale-90'>Log out</button>
            </div>
            <div>
                <button className='bg-menuheaderd text-menulight px-3 py-2 shadow-[2px_2px_5px_0px_rgba(255,255,255,0.4)] hover:shadow-[3px_3px_9px_0px_rgba(20,20,20,0.4)] font-bold hover:bg-menulight hover:text-menuheaderd active:scale-90'>Sign up</button>
                <button className='hidden bg-menuheaderd text-menulight px-3 py-2 shadow-[2px_2px_5px_0px_rgba(255,255,255,0.4)] hover:shadow-[3px_3px_9px_0px_rgba(20,20,20,0.4)] font-bold hover:bg-menulight hover:text-menuheaderd active:scale-90'><CgProfile /></button>
            </div>
            
        </div>
        </div>
        </div>
  )
}

export default Menuheader;