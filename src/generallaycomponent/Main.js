import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Card from './Card';

const Main = () => {
    const {post}=useContext(AppContext);
    console.log(post);
    const filtered=post.filter((val)=>{return val.publishedAt!==new Date(0).toISOString().split('.')[0].concat('Z')})
  return (
    <div className='w-full '>
      <h1 className='text-2xl text-heading font-black'>Latest News</h1>
      <div className='h-[0.15rem] w-[3rem] bg-dot-line mb-6'></div>
    <div className='space-y-16'>
        {   
            filtered.map((card,index)=>{
              return <Card key={index} ind={index} card={card}/>
             } )
        }
    </div>
    </div>
  )
}

export default Main