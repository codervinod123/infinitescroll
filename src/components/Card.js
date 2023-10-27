import React from 'react'

const Card = ({data}) => {
  return (
    <div className='h-[160px] w-[200px] bg-slate-500 rounded'>
        <p className='text-white font-semibold felx justify-center m-4'>{data.title}</p>
    </div>
  )
}

export default Card