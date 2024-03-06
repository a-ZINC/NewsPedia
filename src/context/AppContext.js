import { createContext, useState } from "react";
import { BaseUrl,Sourceurl,Trendurl } from "../BaseUrl";
import { useNavigate,useLocation, useSearchParams } from "react-router-dom";
import axios from 'axios'


export const AppContext=createContext();

export default function AppContextProvider({children}){
    const [loading,setloading]=useState(false);
    const [post,setpost]=useState([]);
    const [page,setpage]=useState(1);
    const [totalpage,settotalpage]=useState(null);
    const [pagesize,setpagesize]=useState(8);
    const [sourcepost,setsourcepost]=useState([]);
    const [trendpost,settrendpost]=useState([]);
    const [menu,setmenu]=useState(false);
    const [country,setcountry]=useState('INDIA');
    const [lang,setlang]=useState('ENGLISH');
    const [form,setform]=useState({search:""});
    const [isVisible,setisVisible]=useState(false);
    const[searchparams,setsearchparams]=useSearchParams(BaseUrl);

    const navigate=useNavigate();
    const location=useLocation();
    console.log(navigate);
    
    async function getpost(page=1,category,country,language){
        setloading(true);
        setisVisible(false);
        console.log(location.pathname.includes('search'));
        if(!location.pathname.includes('search')){
            console.log('--------------->')
            setform({
                    ...form,
                    search: ""
                });
            
        }
        console.log(form);
        let url=`${BaseUrl}&pageSize=${pagesize}&page=${page}`;
       
        if(form.search!==""){
            console.log(form.search);
            url=`${Trendurl}&q=${form.search}&pageSize=${pagesize}&page=${page}`;
        }
        else{
        if(country){
            url+=`&country=${country}`;
        }
        else{
            url+=`&language=${language}`;
        }
        if(category){
            if(language ){
                url+=`&category=${category}&language=${language}`;
            }
            else{
                url+=`&category=${category}`;
            }
        }
    }
        console.log(url);
        try{
            const response=await fetch(url);
            const data=await response.json();
            console.log(data);
            settotalpage(Math.ceil(data.totalResults/pagesize));
            setpost(data.articles);
        }
        catch(error){
            console.log("error in api");
            setpost([]);
            settotalpage(null);
            setpage(1);
        }
        await new Promise((resolve) => setTimeout(resolve, 4000));
        setloading(false);
        

    }
    function handlepage(page){
        navigate( { search: `?page=${page}`});
        setpage(page);
    }
    function date(dt){
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const month=months[dt.getMonth()];
        const day=dt.getDate();
        const year=dt.getFullYear();
        return [month,day,year];
    }
    async function getmultipost(page=1,country){
        const lan='en'
        let url1=`${Sourceurl}&page=${page}&language=${lan}`;
        let url2=`${BaseUrl}&page=${page}&sortBy=${'popularity'}&language=${lan}`;
        if(country){
            url1+=`&country=${country}`;
            url2+=`&country=${country}`
        }
        const response1=axios(url1);
        const response2=axios(url2);
        
        const arr=await Promise.allSettled([response1,response2]);
        
        let d1=arr[0].value.data.sources;
        let d2=arr[1].value.data.articles;
   
        const data1=[];
        const data2=[];
        for(let i=0;i<4;i++){
            data1.push(d1[i]);
            data2.push(d2[i]);
        }
        console.log(data1);
        console.log(data2);
        try{
            setsourcepost(data1);
            settrendpost(data2);
        }
        catch(error){
            console.log('source error')
            setsourcepost([]);
            settrendpost([]);     
        }
    }
const value={
    loading,
    setloading,
    post,
    setpost,
    page,
    totalpage,
    setpage,
    settotalpage,
    getpost,
    handlepage,
    pagesize,
    setpagesize,
    date,
    getmultipost,
    sourcepost,
    trendpost,
    menu,
    setmenu,
    form,
    setform,
    country,
    setcountry,
    lang,
    setlang

};
return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}