import React, { useContext } from 'react';
import { useLocation,Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Side from '../generallaycomponent/Side';
import imgurl from '../assets/noimg.webp';

const Post = () => {
  const location=useLocation();
  const {post}=useContext(AppContext);
  const id=location.pathname.split('-').at(-1);
  const news=post[Number(id)];
  const dt=new Date();
  const {date}=useContext(AppContext);
  const [month,day,year]=date(dt);
  const content=news.content.split('[').at(0);
  return (
    <div className='w-full flex lg:gap-16 lg:flex-nowrap flex-wrap gap-6'>
      <div className='flex flex-col lg:w-3/4 w-full lg:mt-12 gap-6 '>
      
        <h1 className='text-[2.6rem] font-bold leading-[3.3rem] '>{news.title}</h1>
        <div className='flex pl-1 gap-2 font-serif text-[0.75rem] max-sm:text-[0.65rem] text-date font-medium items-baseline'>
            <Link className='text-red- font-semibold text-sm max-sm:text-xs transition-all duration-300 hover:text-heading'>{news.source.name}</Link>
            <p className='text-[#a8a29e] font-black'>.</p>
            <p>{month} {day},{year}</p>
            <p className=' text-[#a8a29e] font-black'>.</p>
            <p>
                {
                    news.content===null?(`1 mins read`): (news.content.length<210?(`2 mins read`):(
                        news.content.length<250?(`3 mins read`):(
                            news.content.length<300?(`4 mins read`):(`5 mins read`)
                        )
                    )
                    )
                }
            </p>
            </div>
            <div className='w-full aspect-video relative overflow-hidden z-0 before:bg-transparent before:absolute before:inset-0  before:z-0 before:hover:z-[-1]' id='filter'><img src={news.urlToImage===null?(imgurl):news.urlToImage} alt="notAvailable" onError={(e)=>{e.target.src=imgurl}} loading='lazy' className='object-cover w-full h-full z-0 hover:scale-105 transition-all ease-[cubic-bezier(0.19, 1, 0.22, 1)] duration-[2s] hue-rotate-15' /></div>
            <p className='text-[1.4rem] font-semibold tracking-tight leading-7'>{news.description}</p>
            <div className='flex items-center justify-center my-2'>
              <div className='flex gap-5 text-[1.6rem] text-para'>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
              </div>
            </div>
            <div className='mt-2 flex flex-col gap-6 font-medium '>
              <p className='text-lg text-para'>{news.description}</p>
              <p className='text-lg text-para'>{content}</p>
              
            </div>
            
      </div>
        
        <Side></Side>
    </div>
  )
}

export default Post