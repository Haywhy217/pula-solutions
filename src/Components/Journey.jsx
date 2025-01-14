import React from 'react'
import LocImg from '../assets/Images/Location.png';

const Journey = () => {
  return (
    <div className='w-full flex flex-col h-auto items-center justify-center bg-secondary space-y-5 p-10'>
      <h1 className='font-livvic leading-9 font-bold text-center text-lg'>Our Journey</h1>
      <img src={LocImg} alt='journey img' className='w-full mx-auto' />
     <div>
      <h1 className='font-livvic text-[16px] lg:leading-9 font-bold text-headingColor text-lg mb-2'>Empowering Farmers, Transforming Agriculture</h1>
      <div className='text-md  font-inter text-[#667085] leading-4 '>
      <p className='mb-4'>Since our inception, Pula has been on a mission to revolutionize the agricultural landscape, one innovation at a time. Our story is one of passion, perseverance, and unwavering dedication to empowering farmers around the globe.</p>
      <p className='mb-4'>
      Founded with a vision to provide accessible and comprehensive agricultural insurance solutions to smallholder farmers, Pula has rapidly evolved into a pioneering force in the insurtech industry. Our journey began with a deep understanding of the challenges facing farmers - from unpredictable weather patterns to market volatility - and a commitment to developing innovative solutions that mitigate risk and promote resilience.
      </p>
    
      <p className='mb-4'>
      Over the years, we've relentlessly pursued excellence, leveraging cutting-edge technology and data-driven insights to design tailor-made insurance products that meet the unique needs of farmers in diverse environments. Our journey has been marked by milestones - from expanding our reach to new regions and forging strategic partnerships with leading organizations to continuously enhancing our product offerings and delivering impactful results on the ground.
      </p>
      
      <p className='mb-4'>
      As we reflect on our history, we take pride in the countless farmers whose lives we've touched, the communities we've empowered, and the transformative impact we've made on the agricultural sector. Yet, our journey is far from over. With each passing day, we remain committed to pushing boundaries, driving innovation, and reimagining the future of agriculture.
      </p>

       <p className='mb-4'>
        Join us as we continue to write the next chapter of our story - a story of resilience, growth, and sustainable impact. Together, let's shape a brighter, more prosperous future for farmers worldwide.
        </p>
        </div>

     </div>

    </div>
  )
}

export default Journey
