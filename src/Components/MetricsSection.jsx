import React from 'react'
import metricImg  from '../assets/Images/MSI.png';

const MetricsSection = () => {
  return (
    <div className='w-full h-auto bg-white space-y-3 p-6 md:p-10'> 
      <div className='w-full h-auto  object-contain  p-10'>
        <h1 className='font-livvic  font-bold text-28px md:text-40px leading-7 text-[#1F2937] text-2xl mb-5'>Measuring Impact</h1>
        <p className='font-["Helvetica Neue"] font-normal text-16px md:text-20px leading-5 text-[#4B5563]  lg:max-w-lg'>At Pula, we are dedicated to quantifying our impact to ensure that our efforts translate into tangible benefits for farmers and communities. Our metrics section provides transparent insights into key performance indicators, including the number of farmers reached, crop yield improvements, reduction in financial losses due to risk, and overall economic upliftment. By tracking these metrics, we demonstrate our commitment to accountability, effectiveness, and driving positive change in the agricultural sector.</p>
      </div>
      <div className='flex  flex-col lg:flex-row justify-between'>
        <div  className=' flex flex-col space-y-8 lg:space-y-16'>
          <div className=' flex flex-row space-x-8'>
            <div className='w-full md:w-1/2 lg:w-260px lg:h-156px space-y-3 object-contain'>
              <h1 className='font-livvic font-semibold text-[28px] md:text-[48px] text-center leading-10 tracking-[-2] text-[#3B6D3E]'>2.22B</h1>
              <h6 className='font-inter font-normal text-[16px] md:text-[18px] text-center leading-5 text-[#3b6d3e]'> Sum Insured ($)</h6>
              <p className='font-inter font-normal  text-[14px] md:text-[16px] text-center leading-6 text-[#4B5563] '>We've helped build over 400 amazing projects. </p>
            </div>
            <div className='w-full md:w-1/2 lg:w-260px lg:h-156px space-y-3 object-contain'>
              <h1 className='font-livvic font-semibold text-[28px] md:text-[48px] text-center leading-10 tracking-[-2] text-[#3B6D3E]' >79.6M</h1>
              <h6 className='font-inter font-normal text-[16px] md:text-[18px] text-center leading-5 text-[#3b6d3e]'>Gross Premiums ($)</h6>
              <p  className='font-inter font-normal  text-[14px] md:text-[16px] text-center leading-6 text-[#4B5563]'>Our customers have reported an average of ~600% ROI.</p>
            </div>
          </div>
          <div className='flex flex-row space-x-8'>
            <div  className='w-full md:w-1/2 lg:w-260px lg:h-156px space-y-3 object-contain'>
              <h1 className='font-livvic font-semibold text-[28px] md:text-[48px] text-center leading-10 tracking-[-2] text-[#3B6D3E]' >15.4M</h1>
              <h6 className='font-inter font-normal text-[16px] md:text-[18px] text-center leading-5 text-[#3b6d3e]'>Farmers Insured</h6>
              <p className='font-inter font-normal text-[14px] md:text-[16px] text-center leading-6 text-[#4B5563]'>Our free UI kit has been downloaded over 10k times.</p>
            </div>
            <div className='w-full md:w-1/2 lg:w-260px lg:h-156px space-y-3 object-contain'>
              <h1 className='font-livvic font-semibold text-[28px] md:text-[48px] text-center leading-10 tracking-[-2] text-[#3B6D3E]' >4.91M</h1>
              <h6 className='font-inter font-normal text-[16px] md:text-[18px] text-center leading-5 text-[#3b6d3e]' >Hectares Insured</h6>
              <p className='font-inter font-normal text-[14px] md:text-[16px] text-center leading-6 text-[#4B5563] '>We're proud of our 5-star rating with over 200 reviews.</p>
            </div>
          </div>
          <div className='flex flex-row space-x-8'>
            <div className='w-full md:w-1/2 lg:w-260px lg:h-156px space-y-3 object-contain'>
              <h1 className='font-livvic font-semibold text-[28px] md:text-[48px] text-center leading-10 tracking-[-2] text-[#3B6D3E]' >40.8M</h1>
              <h6 className='font-inter font-normal text-[16px] md:text-[18px] text-center leading-5 text-[#3b6d3e]' >Payouts ($)</h6>
              <p className='font-inter font-normal  text-[14px] md:text-[16px] text-center leading-6 text-[#4B5563] '>Our free UI kit has been downloaded over 10k times.</p>
            </div>
            <div  className='w-full md:w-1/2 lg:w-260px lg:h-156px space-y-3 object-contain'>
              <h1 className='font-livvic font-semibold  text-[28px] md:text-[48px] text-center leading-10 tracking-[-2] text-[#3B6D3E]' >1M</h1>
              <h6 className='font-inter font-normal text-[16px] md:text-[18px] text-center leading-5 text-[#3b6d3e]'>Farmers Paid</h6>
              <p className='font-inter font-normal  text-[14px] md:text-[16px] text-center leading-6 text-[#4B5563] '>We're proud of our 5-star rating with over 200 reviews.</p>
            </div>
          </div>
        </div>
        <div className=' w-full h-auto mt-8 lg:w-[552px] lg:h-[596px] lg:mt-0'>
          <img src={metricImg} alt='metric section image' className='object-contain'/>
        </div>
      </div>
    </div>
  )
}

export default MetricsSection
