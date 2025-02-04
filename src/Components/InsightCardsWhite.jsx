import React from 'react'

const InsightCardsWhite = ({image, title, description}) => {
  return (
    <div className='h-auto p-10'>
      <div className='w-[280px] h-[308px] space-y-6'>
        <img src={image} className='w-[64px] h-[64px]'/>
          <h3 className='font-semibold text-[20px] font-inter leading-7 text-[#1f2937]'>{title}</h3>
        <p className='font-normal text-[16px] font-inter leading-6 text-[#667085]'>{description}</p>
      </div>
    </div>
  )
}

export default InsightCardsWhite
