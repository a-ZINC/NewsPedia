import React from 'react'
import Main from "../generallaycomponent/Main"
import Side from "../generallaycomponent/Side";
import Pagination from './Pagination';


const Generallayout = () => {
  return (
    <div className='w-full flex lg:gap-11 lg:flex-nowrap flex-wrap gap-6'>
      <div className='flex flex-col lg:w-3/4 w-full mt-6 '>
      <Main></Main>
      <Pagination></Pagination>
      </div>
        
        <Side></Side>
    </div>
  )
}

export default Generallayout