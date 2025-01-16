import React from 'react'


const Hero2 = () => {
  console.log("Image path:", "/assets/Images/image.png");
  return (
    <div className='w-full h-96 bg-hero-pattern bg-cover bg-no-repeat bg-center '> 
      <div className='w-2/3 flex flex-col items-center justify-center flex-wrap pt-10 space-y-5 mx-auto '>
        <h1 className='font-livvic text-[20px]  text-center lg:text-[32px] leading-9 font-bold text-[#f9fafb] text-lg  max-w-lg h-auto object-contain'> Harnessing Technology for Agricultural Resilience</h1>
        <p className=' leading-5 font-inter text-[16px] text-center lg:leading-7 md:leading-7  text-[#f9fafb] md:p-5
        lg:p-5 text-sm pb-10 '>At Pula, we have refined the index insurance model to address the specific needs and challenges faced by smallholder farmers in emerging markets. Our approach integrates innovative technology and data-driven insights to deliver accessible, affordable, and effective insurance solutions.</p>
      </div>
    </div>
  )
}

export default Hero2
