import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Smallcardtrend from './Smallcardtrend';

const Sidetrend = () => {
  const {trendpost}=useContext(AppContext);
  const filtered=trendpost.filter((val)=>{return val.publishedAt!==new Date(0).toISOString().split('.')[0].concat('Z')})

  
  return (
    <div className='w-full flex flex-col'>
      <h1 className='text-2xl text-heading font-black'>Trending</h1>
      <div className='h-[0.15rem] w-[3rem] bg-dot-line mb-6'></div>
    <div className='flex flex-col gap-7 max-md:justify-between'>
      {
        filtered.filter((post,index)=>{return index<4}).map((posts,index)=>{ return <Smallcardtrend posts={posts} key={index}/>})
      }
    </div>
    <button className=' text-bg py-[0.3rem] px-[0.5rem] mt-7 bg-heading font-bold shadow-[0px_1px_3px_3px_rgba(0,0,0,0.2)] mb-6 group hover:bg-[#e1e1e1] hover:scale-110 active:scale-90 scale-100 transition-all duration-100 hover:shadow-[0px_1px_2px_1px_rgba(0,0,0,0.1)] hover:text-heading text-sm '>View All</button>
    </div>
  )
}

export default Sidetrend