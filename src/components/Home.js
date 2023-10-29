import React, { useEffect, useState } from 'react'
import Cards from './Cards';


const Home = () => {
    
    const [data,setData]=useState([]);
    const [pageNo,setPageNo]=useState(1);
    const getData=async()=>{
       const data=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${pageNo}`);
       const json=await data.json();
       setData((prev)=>[...prev,...json]);
    }
    
    useEffect(()=>{
        getData();
    },[pageNo])

    const handleScroll=async()=>{
       const total=document.documentElement.scrollHeight;
       const actualHeight=window.innerHeight;
       const scrolled=document.documentElement.scrollTop;
       try {
           if(actualHeight+scrolled+1>total){
              setPageNo((prev)=>prev+1);
           }
       } catch (error) {
          console.log(error);
       }
    }
    
    useEffect(()=>{
       window.addEventListener('scroll',handleScroll);
    },[])
    

  return (
    <div>
        <Cards data={data}/>
    </div>
  )
}

export default Home;