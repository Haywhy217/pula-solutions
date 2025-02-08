
import React from 'react'
import CTAimg1 from '../assets/Images/image2.png'
import CTAimg2 from '../assets/Images/image3.png'
import CTAimg3 from '../assets/Images/image4.png'
import CTAimg4 from '../assets/Images/image5.png'
import CTAimg5 from  '../assets/Images/image6.png'

const CTASection = () => {
  return (
    <div className='w-full h-auto bg-[#f9fafb] overflow-hidden p-10'>
      <div className='w-full flex flex-col md:flex-row'>
        <div className='flex flex-col  flex-wrap pt-10 space-y-7 md:mx-2 w-full  '>
          <h1 className=' object-contain font-livvic font-bold text-headingColor leading-tight md:text-[52px] text-[28px] md:max-w-xl'>Empowering Farmers, Securing Futures</h1>
          <p className='font-inter text-[#667085]'>Join us in shaping a resilient and prosperous future for all</p>
          <div className='flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 cursor-pointer items-center'>
            <button className='bg-white text-black w-[150px] md:w-[200px] h-[64px] rounded-[8px] hover:bg-[#0ba5ec] hover:text-white'>Learn More</button>
            <button className='bg-[#0ba5ec] text-white w-[150px] md:w-[200px] h-[64px] rounded-[8px] hover:bg-white hover:text-black'>Get In Touch</button>
          </div>
        </div>
        <div className='md:w-[568px] md:h-[496px] flex flex-col lg:flex-row flex-wrap space-y-5 md:mr-64 mt-10 md:space-y-2   '>
          <div className='w-full flex  md:flex-row sm:flex-row lg:flex-row lg:gap-4 md:gap-4  md:justify-center gap-3 justify-center lg:ml-24' >
            <img src={CTAimg1} alt="Image 1" className='w-[80px] h-[80px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] lg:mt-20 object-contain mt-10  '/>
            <img src={CTAimg2} alt="Image2 " className='w-[80px] h-[120px] md:w-[120px] md:h-[180px] lg:w-[160px] lg:h-[240px] object-contain '/>
            </div>
            
          <div className=' w-full flex  sm:flex-row lg:flex-row gap-2 mx-auto'>
            <img src={CTAimg3} alt="Image 3" className=' w-[96px] h-[64px] md:w-[144px] md:h-[96px] lg:w-[170px] lg:h-[128px] object-contain '/> 
            <img src={CTAimg4} alt="Image 4" className='w-[80px] h-[120px] md:w-[120px] md:h-[180px] lg:w-[160px] lg:h-[240px] object-contain  '/>
            <img src={CTAimg5} alt="Image5" className=' w-[96px] h-[64px] md:w-[144px] md:h-[96px] lg:w-[170px] lg:h-[128px] object-contain ' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default CTASection
