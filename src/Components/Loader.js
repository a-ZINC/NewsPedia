import React, { useContext, useEffect,useState } from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import { AppContext } from '../context/AppContext';

const parentVariants={
    hidden:{
        opacity:0
    },
    visible:{
        scale:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1],
        opacity:1,
        transition:{
            staggerChildren: 0.1,
            when: 'beforeChildren',
            ease:'easeInOut',
            duration:0.5
        }
    },
    exit:{
        opacity:0,
        transition:{
            staggerChildren: 0.1,
            when: 'afterChildren',
        }
    }
}
const childVariants={
    hidden:{
        x:'-100vw',
        opacity:0
    },
    visible:{
        x:0,
        opacity:1,
        transition:{
            duration:0.1,
            type:'spring',
            mass:0.1,
            ease:'easeInOut'
        }
    },
    exit:{
        x:'100vw',
        opacity:0,
        transition:{
            duration:0.1,
            type:'spring',
            mass:0.1,
            ease:'easeInOut'
        }

    }
}
const countVariants={
    hidden:{
        opacity:0,
    },
    visible:{
        opacity:1,
        transition:{
            duration:0.05,
        }
    },
    exit:{
        x:'400%',
        transition:{
            duration:0.1
        }
    }
}

const Loader = () => {
    const [count,setcount]=useState(0);
    function inc(){
        
        if(count===100){
            return;
        }
        
        const zerotoninerange=Math.floor(Math.random()*10)+1;  // count mein agar zero add karunga toh same no. rahega therfore might stuck because useefect wont be able to read
        if(zerotoninerange+count>100){
            setcount(100);
        }
        else{
            setcount((cnt) => cnt+zerotoninerange);
        }
        
        
    }
    useEffect(()=>{
        let id;
        if(count===0){
            id=setTimeout(() => {
                inc();
            }, 2000);
        }
        else{
        id=setTimeout(() => {
            inc();
        }, Math.floor(Math.random()*300));
    }
    

        return ()=>{
            clearTimeout(id);
        }
    },[count]);

    const {loading,setloading,setisVisible}=useContext(AppContext);
    const numofdiv=5;
  return (
    <>
        <motion.div className='h-screen w-screen absolute z-[151] top-0 left-0 flex flex-col bg-[#f5f5f5] ' id="loader"
            variants={parentVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
        {
            [...Array(numofdiv)].map((_,i)=>{
                return <motion.div className='h-full  w-full bg-heading origin-left' variants={childVariants} key={i}></motion.div>
            })
        }
        <motion.div className='text-bg absolute text-9xl bottom-10 right-[5rem] w-max h-max ' id='family'
             variants={countVariants}
             initial='hidden'
            animate='visible'
            exit='exit'
        >
        {count}
        </motion.div>
        

        </motion.div>
</>)
}

export default Loader;