import React from 'react'
import Card from './Card';

const Cards = ({data}) => {
    console.log(data);
  return (
    <div className='flex flex-wrap justify-center items-center m-8 gap-8 w-[700px]'>
        {
            data.map((data)=>{
                return(
                    <>
                     <Card data={data}/>
                    </>
                )
            })
        }
    </div>
  )
}

export default Cards