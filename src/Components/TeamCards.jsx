import React from 'react'
import img1 from '../assets/Images/TC1.png'
import icon1 from '../assets/Images/linkicon.png';
import icon2 from '../assets/Images/xicon.png';
const TeamCards = ({image, name , title, description}) => {
  return (
    <div className='p-10 w-[279px] h-[494px]  '>
      <div className='w-[296px] h-[296px] '>
        <img src={image} alt={name} className='object-contain'/>
      </div>
      <div className='space-y-4 mt-10 w-[276px] h-[126px]'>
        <h1 className='font-inter font-medium leading-7 text-[20px] text-[#101828]'>{name}</h1>
        <h2 className='font-inter font-normal leading-7 text-[18px] text-[#3b6d3e]'>{title} </h2>
        <p className='font-inter font-normal leading-6 text-[16px]'>{description}</p>
        <div className='flex flex-row gap-3 w-[24px] h-[24px]'>
          <img src={icon1} alt='linkedin icon'/>
          <img src={icon2} alt='x icon'/>
        </div>
      </div>
    </div>
  )
}

export default TeamCards
