import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
    const {page,totalpage,handlepage}=useContext(AppContext);
  return (
    <div className=' mt-9 mb-7 flex gap-4 items-center'>
        <div>
            {
                page>1?(<button onClick={()=>handlepage(page-1)} className='rounded-full p-[6px] bg-heading shadow-[0px_1px_3px_3px_rgba(0,0,0,0.2)] group hover:bg-[#e1e1e1] hover:scale-110 active:scale-90 scale-100 transition-all duration-100 hover:shadow-[0px_1px_2px_1px_rgba(0,0,0,0.1)]  text-bg text-base  hover:text-red- font-medium'>{`<`}</button>):(<div></div>)
            }    
        </div>
        <div className='text-all-text text-base font-semibold'>{page}</div>
        <div>
            {
                page<totalpage?(<button onClick={()=>handlepage(page+1)} className='rounded-full p-[6px] bg-heading font-medium shadow-[0px_1px_3px_3px_rgba(0,0,0,0.2)] group hover:bg-[#e1e1e1] hover:scale-110 active:scale-90 scale-100 transition-all duration-100 hover:shadow-[0px_1px_2px_1px_rgba(0,0,0,0.1)]  text-bg text-base  hover:text-red-'>{`>`}</button>):(<div></div>)
            }    
        </div>
    </div>
  )
}

export default Pagination