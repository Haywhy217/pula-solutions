import React from 'react'
import plantimg from '../assets/Images/plant.png'
import weatherimg from '../assets/Images/weather.png'

const TechSection1 = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center p-5 md:p-10 space-y-5 mx-auto bg-[#f3f4f6]'>
      <div className='w-full h-auto px-3 md:px-5'>
        <div className='text-center flex-wrap justify-center items-center mb-4 mt-4'>
          <h1 className='text-[#1f2937] font-bold font-livvic text-[20px] md:text-[24px] leading-6 md:leading-7 mb-5'>What exactly is Index Insurance?</h1>
          <p className='font-inter text-[14px] md:text-[16px] text-center leading-5 md:leading-6 w-full  h-auto mx-auto object-contain text-[#667085]'>Index insurance is a type of insurance that pays out benefits based on a predetermined index of loss, such as weather data or crop yield estimates, rather than individual loss assessments. This allows for faster payouts and reduced administrative costs, making insurance more accessible to smallholder farmers.</p>
        </div>
        <div className='w-full items-stretch flex flex-col md:flex-row justify-center  md:space-x-5 space-y-5 md:space-y-0 p-5 md:p-10'>
          <div className='flex flex-col bg-white p-5 md:p-8 rounded-[8px] h-auto'>
            <img src={plantimg} alt='plant logo' className='w-[60px] md:w-[80px] h-[60px] md:h-[80px] object-contain mb-3' />
            <h1 className='font-livvic font-bold text-[20px] md:text-[24px] leading-5 text-[#0ba5ec] mb-3'>Area Yield Index Insurance</h1>
            <p className='font-inter font-normal text-[14px] md:text-[16px] leading-5 md:leading-6 mb-4'>Pula's Yield Index Insurance (YII) covers all risks that affect yield. YII cover insures the value of the purchased inputs against low yield, and would replace the purchase to registered farmers at the end of the season. Under this cover, the country is divided into agro-ecological zones (AEZs) based on historical rainfall, temperatures, prior yields etc, and average historical yield data is determined for each zone based on past data. At the end of the season, trained enumerators measure yield levels for each agro-ecological zone. With this information, farmers will receive compensation if yields in a specific agro-ecological zone are below a determined trigger level.</p>
          </div>
          <div className='flex flex-col  bg-white p-5 md:p-8 rounded-[8px] h-auto'>
            <img src={weatherimg} alt='weather logo' className='w-[60px] md:w-[80px] h-[60px] md:h-[80px] object-contain mb-3' />
            <h1 className='font-livvic font-bold text-[20px] md:text-[24px] leading-5 text-[#0ba5ec] mb-3'>Hybrid Yield Index Insurance</h1>
            <p className='font-inter font-normal text-[14px] md:text-[16px] leading-5 md:leading-6 mb-4'>Hybrid index insurance is a combination of Weather Index Insurance (WII) and Area Yield Index Insurance (YII). It offers comprehensive coverage for farmers as it maximizes on the advantages of both insurance products. Based on its structure, farmers can receive quick payout under weather index. This would provide farmers with a means of replanting or possibly use funds for other immediate in-season household needs. This scheme also ensures that farmers receive comprehensive insurance that covers against all major perils, both drought as well as flood, pests, and diseases.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechSection1























