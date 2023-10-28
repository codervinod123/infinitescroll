import React from 'react'
import Card from './Card';

const Cards = ({data}) => {
  
  return (
    <div className='flex flex-wrap justify-center items-center m-8 gap-10 mx-auto w-[700px]'>
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