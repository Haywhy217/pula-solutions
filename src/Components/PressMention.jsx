import React from 'react'
import logo1 from '../assets/Images/Presslogo.png'
import logo2 from '../assets/Images/Presslogo1.png'
import logo3 from '../assets/Images/Presslogo2.png'
import logo4 from '../assets/Images/Presslogo3.png'
import logo5 from '../assets/Images/Presslogo4.png'


const PressMention = () => {
  return (
    <div className='w-full h-auto md:h-96 lg:h-96 flex flex-col items-center justify-center bg-primary p-10 space-y-5'>
      <div className=' w-full  px-4 gap-5'>
        <h1 className='text-center  font-livvic leading-10 text-[28px] md:text-[32px] lg:text-[40px] text-[#F3F4F6] font-bold'>Our success and impact has been featured by Global media outlets.</h1>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-8 mt-10 '>
          <img src={logo1} alt='the washington post logo' className='w-28 sm:w-32 lg:w-48 h-auto'/>
          <img src={logo2}  alt='Tech Crunch logo' className='w-28 sm:w-32 lg:w-48 h-auto'/>
          <img src={logo3} alt='Bloomberg logo'className='w-28 sm:w-32 lg:48 h-auto'/>
          <img src={logo4} alt='Gizmodo logo' className='w-28 sm:w-32 lg:w-48 h-auto'/>
          <img src={logo5} alt='Forbes logo' className='w-28 sm:32 lg:w-48 h-auto'/>
        </div>
      </div>
    </div>
  )
}

export default PressMention
