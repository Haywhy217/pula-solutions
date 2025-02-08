import React from 'react'
import ProductCard from './ProductCard'
import cardA from '../assets/Images/image19b.png';
import cardB from '../assets/Images/image19.png';
import cardC from '../assets/Images/image18.png';
import cardD from '../assets/Images/image17.png';
import cardE from  '../assets/Images/image16.png';
import cardF from '../assets/Images/image15.png';

const ProductSection = () => {
  return (
    <div  className='w-full p-10 justify-center flex flex-col  space-y-10 xl:space-y-20 bg-primary'> 
      <div className='max-w-[635px] mx-auto'>
        <h1 className=' font-livvic text-[32px] font-bold leading-10 text-center text-[#f3f4f6] object-contain'>Providing High Quality Products and Services</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[920px] w-full justify-center gap-10 mx-auto '>
        <ProductCard
          image={cardA}
          title="AYII"
          description="Safeguard against crop yield volatility at the regional level with our Area Yield Index Insurance, fostering resilience in agricultural communities"
        />
        <ProductCard 
          image={cardB}
          title="HYII"
          description="Protect crops from yield fluctuations with our innovative index insurance, ensuring stability and prosperity for farmers"
        />
        <ProductCard
          image={cardC}
          title="Livestock Insurance"
          description="Shield livestock assets from unforeseen risks and losses, ensuring the well-being and livelihoods of farmers."
        />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[920px] w-full justify-center gap-10 mx-auto mt-14 '>
        <ProductCard 
          image={cardD}
          title="FieldSense"
          description="Empower farmers with real-time data and insights to optimize crop management decisions and maximize yields sustainably"
        />
        <ProductCard
          image={cardE}
          title="Disaster Risk Funding"
          description="Prepare for and mitigate the impact of natural disasters on agricultural communities through accessible and responsive funding solutions"
        />
        <ProductCard
          image={cardF}
          title="Consulting"
          description="Tap into our expertise and tailored solutions to address unique agricultural challenges, driving innovation and sustainable growth."
        />
      </div>
    </div>
  )
}

export default ProductSection
