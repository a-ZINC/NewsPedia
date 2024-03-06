import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Smallcard from './Smallcard';

const Sidesource = () => {
  const {sourcepost}=useContext(AppContext);
  const len=sourcepost.length;
  console.log(len);
  return (
    <div className='w-full flex flex-col parentsticky'>
      <h1 className='text-2xl text-heading font-black childsticky'>Source</h1>
      <div className='h-[0.15rem] w-[3rem] bg-dot-line mb-6'></div>
    <div className='flex flex-col gap-7 max-lg:flex-row max-lg:gap-0 max-md:flex-wrap max-md:gap-8 max-md:justify-between'>
      {
        sourcepost.filter((post,index)=>{return post!==undefined && index<4}).map((posts,index)=>{ return <Smallcard posts={posts} key={index}/>})
      }
    </div>
    <button className=' text-bg py-[0.3rem] px-[0.5rem] mt-7 bg-heading font-bold shadow-[0px_1px_3px_3px_rgba(0,0,0,0.2)] mb-6 group hover:bg-[#e1e1e1] hover:scale-110 active:scale-90 scale-100 transition-all duration-100 hover:shadow-[0px_1px_2px_1px_rgba(0,0,0,0.1)] hover:text-heading text-sm '>View All</button>
    </div>
  )
}

export default Sidesource