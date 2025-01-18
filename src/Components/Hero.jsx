import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-hero-image bg-cover bg-no-repeat bg-center flex items-center justify-center'>
      <div className='w-full flex flex-col items-center justify-center flex-wrap pt-10 space-y-10 mx-auto text-center text-white '>
        <h1 className='font-livvic text-[35px] md:text-[40px]  font-extrabold text-center leading-normal text-lg max-w-xl object-contain md:p-0 p-5'>Cutting-edge agricultural insurance and technology solutions</h1>
        <p className=' font-raleway text-[18px] font-normal md:leading-7 max-w-2xl object-contain p-7 md:p-0'>We specialize in crafting and delivering innovative products tailored to smallholder farmers worldwide, empowering them to navigate yield risks, enhance farming techniques, and steadily boost their incomes.</p>

        <button className='rounded-[8px] bg-[#44a8df] w-[150px] md:w-[200px] h-[64px]'>LEARN MORE</button>
      </div>
      
    </div>
  )
}

export default Hero
