import React from 'react'
const InsightCards = ({image, title, description}) => {
  return (
    <div className='bg-primary h-auto p-10' >  
      <div className='w-[280px] h-[308px] space-y-6'>
        <img src={image} className='w-[64px] h-[64px]'/>
          <h3 className='font-semibold text-[20px] font-inter leading-7 text-[#f3f4f6]'>{title}</h3>
        <p className='font-normal text-[16px] font-inter leading-6 text-[#98a2b3]'>{description}</p>
      </div>
    </div>
  )
}

export default InsightCards
