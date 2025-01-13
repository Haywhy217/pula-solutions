import React from 'react'
import image1 from '../assets/Images/pressa.png'
import image2 from '../assets/Images/pressb.png'
import image3 from '../assets/Images/pressc.png'


const PressSection = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center bg-pressColor p-10'>
      <div className='w-3/4 px-4 gap-5'>
          <h1 className='text-center font-livvic leading-4 text-[28px] md:text-[32px] lg:text-[40px] font-bold md:leading-6 lg:leading-10'>We have won prestigious awards for our innovative products and impact</h1>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-8'>
          <img src={image1} alt="award" className='w-32 sm:w-48 lg:w-56 h-auto' />
          <img src={image2} alt="award" className='w-32 sm:w-48 lg:w-56 h-auto'/>
          <img src={image3} alt="award" className='w-32 sm:w-48 lg:w-56 h-auto'/>
        </div>
      </div>

    </div>
  )
}

export default PressSection
