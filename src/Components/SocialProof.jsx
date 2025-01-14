import React from 'react'
import proof1 from '../assets/Images/proofimg.png'
import proof2 from '../assets/Images/proofimg1.png'
import proof3 from '../assets/Images/proofimg2.png'
import proof4 from '../assets/Images/proofimg3.png'

const SocialProof = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center bg-pressColor p-16 space-y-5'>
      < div className='w-full px-4 gap-5'>
      <div className='w-full flex items-center justify-center'>
        <h1 className='text-center font-livvic leading-10 text-[28px] md:text-[40px] lg:[52px] text-[#1f2937] font-bold lg:w-1/2 lg:object-contain '>Backed by top tier investors and partners </h1>
        </div>
        <div className='flex flex-col items-center justify-center gap-6 mt-10 md:mt-14 lg:mt-20 '>
          <img src={proof1} alt='social proof logos' className='w-auto h-auto'/>
          <img src={proof2} alt='social proof logos' className='w-auto h-auto'/>
          <img src={proof3} alt='social proof logos' className='w-auto h-auto'/>
          <img src={proof4} alt='social proof logos' className='w-auto h-auto ' />
        </div>
      </div>
    </div>
  )
}

export default SocialProof
