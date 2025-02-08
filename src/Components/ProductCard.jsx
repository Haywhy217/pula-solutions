import React from 'react'
import arrowright from '../assets/Images/bluearrow.png';
const ProductCard = ({image, title , description}) => {
  return (
    <div className='w-full max-w-[300px] sm:max-w-[280px] space-y-3 flex flex-col'>
      <div className='w-full h-[296px]'> 
        <img src={image} alt='product image' className='w-full h-full object-cover'/>
      </div>
      <div className=' space-y-3'> 
        <h1 className='font-inter font-semibold text-[20px] leading-7 text-[#f3f4f6]'>{title}</h1>
        <p className='font-inter font-normal text-[14px] xl:text-[16px] leading-5 text-[#E4E7EC] w-[248px] h-[120px] object-contain'>{description}</p>
      </div>
      <div className='flex items-center gap-2 '>
        <h3 className='text-[#0BA5EC] font-normal leading-6 text-[16px]'>LEARN MORE</h3>
        <img src={arrowright} alt='arrow right'/>
      </div>
    </div>
  )
}

export default ProductCard
