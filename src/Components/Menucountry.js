import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Menucountry = ({setmenu,setmenucategory}) => {
  const {country,setcountry}=useContext(AppContext);
  function clickhandler(e){
    setmenu(false);
    setmenucategory(false);
    
    console.log(country);
    console.log(e.target.innerText.toUpperCase());
    setcountry(e.target.innerText.toUpperCase());
  }
  return (
    <div className=' xl:w-[80%] w-full h-[calc(100vh-280px)]' >
        <div className='flex flex-col items-center  flex-wrap h-full w-full  lg:text-base text-xs'>
             <h1 className='lg:text-4xl md:text-2xl text-xl font-black pb-4'>Europe</h1>
                <NavLink to='/country/at' onClick={()=>clickhandler()}>Austria</NavLink>
                <NavLink to='/country/be' onClick={()=>clickhandler()}>Belgium</NavLink>
                <NavLink to='/country/bg'onClick={()=>{setmenu(false);setmenucategory(false)}}>Bulgaria</NavLink>
                <NavLink to='/country/ch'onClick={()=>{setmenu(false);setmenucategory(false)}}>Switzerland</NavLink>
                <NavLink to='/country/cz'onClick={()=>{setmenu(false);setmenucategory(false)}}>Czech Republic</NavLink>
                <NavLink to='/country/de'onClick={()=>{setmenu(false);setmenucategory(false)}}>Germany</NavLink>
                <NavLink to='/country/fr'onClick={()=>{setmenu(false);setmenucategory(false)}}>France</NavLink>
                <NavLink to='/country/gb'onClick={()=>{setmenu(false);setmenucategory(false)}}>UK</NavLink>
                <NavLink to='/country/gr'onClick={()=>{setmenu(false);setmenucategory(false)}}>Greece</NavLink>
                <NavLink to='/country/hu'onClick={()=>{setmenu(false);setmenucategory(false)}}>Hungary</NavLink>
                <NavLink to='/country/ie'onClick={()=>{setmenu(false);setmenucategory(false)}}>Ireland</NavLink>
                <NavLink to='/country/it'onClick={()=>{setmenu(false);setmenucategory(false)}}>Italy</NavLink>
                <NavLink to='/country/lt'onClick={()=>{setmenu(false);setmenucategory(false)}}>Lithuania</NavLink>
                <NavLink to='/country/lv'onClick={()=>{setmenu(false);setmenucategory(false)}}>Latvia</NavLink>
                <NavLink to='/country/nl'onClick={()=>{setmenu(false);setmenucategory(false)}} >Netherlands</NavLink>
                <NavLink to='/country/no'onClick={()=>{setmenu(false);setmenucategory(false)}} >Norway</NavLink>
                <NavLink to='/country/pl'onClick={()=>{setmenu(false);setmenucategory(false)}} >Poland</NavLink>
                <NavLink to='/country/pt'onClick={()=>{setmenu(false);setmenucategory(false)}} >Portugal</NavLink>
                <NavLink to='/country/ro'onClick={()=>{setmenu(false);setmenucategory(false)}} >Romania</NavLink>
                <NavLink to='/country/rs'onClick={()=>{setmenu(false);setmenucategory(false)}} >Serbia</NavLink>
                <NavLink to='/country/ru'onClick={()=>{setmenu(false);setmenucategory(false)}} >Russia</NavLink>
                <NavLink to='/country/se'onClick={()=>{setmenu(false);setmenucategory(false)}} >Sweden</NavLink>
                <NavLink to='/country/si'onClick={()=>{setmenu(false);setmenucategory(false)}} >Slovenia</NavLink>
                <NavLink to='/country/sk'onClick={()=>{setmenu(false);setmenucategory(false)}} >Slovakia</NavLink>
                <NavLink to='/country/ua'onClick={()=>{setmenu(false);setmenucategory(false)}} >Ukraine</NavLink>
        
                
                <h1 className='lg:text-4xl md:text-2xl text-xl  font-black pb-4'>Asia</h1>
                
                <NavLink to='/country/ae' onClick={()=>{setmenu(false);setmenucategory(false)}}>UAE</NavLink>
                <NavLink to='/country/cn' onClick={()=>{setmenu(false);setmenucategory(false)}}>China</NavLink>
                <NavLink to='/country/hk' onClick={()=>{setmenu(false);setmenucategory(false)}}>Hong Kong</NavLink>
                <NavLink to='/country/id' onClick={()=>{setmenu(false);setmenucategory(false)}}>Indonesia</NavLink>
                <NavLink to='/country/il' onClick={()=>{setmenu(false);setmenucategory(false)}}>Israel</NavLink>
                <NavLink to='/country/in' onClick={()=>{setmenu(false);setmenucategory(false)}}>India</NavLink>
                <NavLink to='/country/jp' onClick={()=>{setmenu(false);setmenucategory(false)}}>Japan</NavLink>
                <NavLink to='/country/kr' onClick={()=>{setmenu(false);setmenucategory(false)}}>South Korea</NavLink>
                <NavLink to='/country/my' onClick={()=>{setmenu(false);setmenucategory(false)}}>Malaysia</NavLink>
                <NavLink to='/country/ph' onClick={()=>{setmenu(false);setmenucategory(false)}}>Philippines</NavLink>
                <NavLink to='/country/sa' onClick={()=>{setmenu(false);setmenucategory(false)}}>Saudi Arabia</NavLink>
                <NavLink to='/country/sg' onClick={()=>{setmenu(false);setmenucategory(false)}}>Singapore</NavLink>
                <NavLink to='/country/th' onClick={()=>{setmenu(false);setmenucategory(false)}}>Thailand</NavLink>
                <NavLink to='/country/tr' onClick={()=>{setmenu(false);setmenucategory(false)}}>Turkey</NavLink>
                <NavLink to='/country/tw' onClick={()=>{setmenu(false);setmenucategory(false)}}>Taiwan</NavLink>
        
          
                <h1 className='lg:text-4xl md:text-2xl text-xl  font-black pb-4'>N. America</h1>
                <NavLink to='/country/ca' onClick={()=>{setmenu(false);setmenucategory(false)}}>Canada</NavLink>
                <NavLink to='/country/cu' onClick={()=>{setmenu(false);setmenucategory(false)}}>Cuba</NavLink>
                <NavLink to='/country/mx' onClick={()=>{setmenu(false);setmenucategory(false)}}>Mexico</NavLink>
                <NavLink to='/country/us' onClick={()=>{setmenu(false);setmenucategory(false)}} >United States</NavLink>
               
         
            
                <h1 className='lg:text-4xl md:text-2xl text-xl  font-black pb-4'>S. America</h1>
               
                <NavLink to='/country/ar' onClick={()=>{setmenu(false);setmenucategory(false)}}>Argentina</NavLink>
                <NavLink to='/country/br' onClick={()=>{setmenu(false);setmenucategory(false)}}>Brazil</NavLink>
                <NavLink to='/country/co' onClick={()=>{setmenu(false);setmenucategory(false)}}>Colombia</NavLink>
                <NavLink to='/country/ve' onClick={()=>{setmenu(false);setmenucategory(false)}} >Venezuela</NavLink>
                
            
           
                <h1 className='lg:text-4xl md:text-2xl text-xl  font-black pb-4'>Africa</h1>
           
                <NavLink to='/country/eg' onClick={()=>{setmenu(false);setmenucategory(false)}}>Egypt</NavLink>
                <NavLink to='/country/ma' onClick={()=>{setmenu(false);setmenucategory(false)}}>Morocco</NavLink>
                <NavLink to='/country/ng' onClick={()=>{setmenu(false);setmenucategory(false)}}>Nigeria</NavLink>
                <NavLink to='/country/za' onClick={()=>{setmenu(false);setmenucategory(false)}} >South Africa</NavLink>
             
            
                <h1 className='lg:text-4xl md:text-2xl text-xl  font-black pb-4' >Oceania</h1>
               
                <NavLink to='/country/au' onClick={()=>{setmenu(false);setmenucategory(false)}}>Australia</NavLink>
                <NavLink to='/country/nz' onClick={()=>{setmenu(false);setmenucategory(false)}}>New Zealand</NavLink>
             
          </div>  
    </div>
  )
}

export default Menucountry