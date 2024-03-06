import "./App.css";
import {Routes,Route, useSearchParams, useLocation} from "react-router-dom";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Support from "./Pages/Support";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Category from "./Pages/Category";
import { useEffect,useContext,useState } from "react";
import { AppContext } from "./context/AppContext";
import { ThreeCircles } from "react-loader-spinner";
import Mainheader from "./Components/Mainheader";
import Country from "./Pages/Country";
import Countryheader from "./Components/Countryheader";
import Menu from "./Components/Menu";
import Search from "./Pages/Search";
import Post from './Pages/Post';
import Loader from "./Components/Loader";
import {AnimatePresence} from 'framer-motion';
import Lenis from '@studio-freight/lenis'


function App() {
  const {getpost,loading,menu,lang,setlang,setcountry,setform,setloading,setisVisible,setmenu}=useContext(AppContext);
   const[params]=useSearchParams();
  const location=useLocation();
  useEffect(()=>{
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  },[])
  useEffect(()=>{
    const page=params.get('page') ?? 1;
      
      if(location.pathname.includes('country')){
        const loc=location.pathname.split('/');
        const country=loc.at(loc.indexOf('country')+1)
        console.log(country);
        setlang('UNDEFINED')
        if(location.pathname.includes('category')){
          const category=loc.at(loc.indexOf('category')+1)
          getpost(Number(page),category,country)
        }
        else{
          getpost(Number(page),null,country)
        }
      }
      else{
        let language='en';
        setcountry('LOCAL');
        
        if(location.pathname.includes('language')){
          const l=location.pathname.split('/');
          language=l.at(l.indexOf('language')+1);
        }
        else{
          setlang('ENGLISH')
        }
        if(location.pathname.includes('category')){
          const l=location.pathname.split('/');
          const category=l.at(l.indexOf('category')+1)
          getpost(Number(page),category,null,language);
        }
        else{
          console.log('hello')
          getpost(Number(page),null,null,language);
        }
      }

  },[location.pathname,location.search])

  return (
    <>
  <div className=" flex justify-center items-center w-screen">
      
    
    {!loading && !menu &&
    (<div className="w-full flex flex-col justify-center items-center bg-parent-bg" id="app">
      <div className="lg:w-[93%] w-full lg:mt-[2.5rem] relative  lg:px-[4rem] md:px-[3rem] sm:px-[5rem] lg:pt-[2rem] max-sm:px-[2rem] bg-bg flex flex-col items-center">
       <Navbar/>
       <div className="w-full">
        <Routes>
            
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/support' element={<Support/>}/>
            <Route path="/" element={<Mainheader/>}>
                <Route index element={<Home/>}/>
                <Route path="post/:postid" element={<Post/>}/>
                <Route path="search/:searchId/" element={<Mainheader/>}>
                  <Route index element={<Search/>}/>
                  <Route path="post/:postid" element={<Post/>}></Route>
                </Route>
                <Route path="category/:cateId/" element={<Mainheader/>}>
                  <Route index element={<Category/>}/>
                  <Route path="post/:postid" element={<Post/>}></Route>
                </Route>
            </Route>
            <Route path="/language/:langId/" element={<Mainheader/>}>
                <Route index element={<Home/>}/>
                <Route path="category/:cateId/" element={<Mainheader/>}>
                  <Route index element={<Category/>}/>
                  <Route path="post/:postid" element={<Post/>}></Route>
                </Route>
                <Route path="post/:postid" element={<Post/>}></Route>
            </Route>
            <Route path="/country/:countryid/" element={<Countryheader/>}>
                <Route index element={<Country/>}/>
                <Route path="category/:cateId/" element={<Mainheader/>}>
                  <Route index element={<Category/>}/>
                  <Route path="post/:postid" element={<Post/>}></Route>
                </Route>
                <Route path="post/:postid" element={<Post/>}></Route>
            </Route>     
      </Routes>
      </div>
        
        <Footer/>
      </div>
      
    </div>
    )}</div>
    <AnimatePresence mode="wait" initial={false}>
            {loading && (
              <Loader key="loader" onExitComplete={() => setloading(false)} />
            )}
    </AnimatePresence>
    <AnimatePresence mode="wait" initial={false}>
            {menu && (
              <Menu key="menu" onExitComplete={() => setmenu(false)} />
            )}
    </AnimatePresence>
   
  </>
  );
}

export default App;
