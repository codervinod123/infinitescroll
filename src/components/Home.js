import React, { useEffect, useState } from 'react'
import Cards from './Cards';


const Home = () => {
    
    const [data,setData]=useState([]);
    const [pageNo,setPageNo]=useState(1);
    const getData=async()=>{
       const data=await fetch("https://jsonplaceholder.typicode.com/posts?_limit=9&_page="+pageNo);
       const json=await data.json();
       setData(json);
    }
    
    useEffect(()=>{
        getData();
    },[])
    

    

  return (
    <div>
        <Cards data={data}/>
    </div>
  )
}

export default Home;