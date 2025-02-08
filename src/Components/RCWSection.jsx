import React, { useState } from 'react';
import ProjectCard from '../Components/ProjectCard';
import card1 from '../assets/Images/image11.png';
import card2 from '../assets/Images/image12.png';
import card3 from '../assets/Images/image13.png';
import card4 from '../assets/Images/image14.png';
import card5 from '../assets/Images/image14b.png';
import card6 from '../assets/Images/image16.png';
import card7 from '../assets/Images/image17.png';
import card8 from '../assets/Images/image18.png';


const RCWSection = () => {
  const [activeDot , setActiveDot] = useState(0);

  const cards =[
    [card1, card2, card3, card4],
    [card5, card6, card7, card8]
  ];

  const handleDotClick =(index) =>{
    setActiveDot(index);
  };

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center bg-primary p-6 md:p-8 lg:p-12 overflow-x-hidden'>
      <div className='mt-10 space-y-5 text-center'>
        <h4 className='font-inter font-normal text-white text-[16px]  lg:text-[20px] leading-4 text-center'>OUR CASE STUDIES</h4>
        <h1 className='font-livvic font-bold text-white  text-[25px] lg:text-[50px] leading-7 text-center'>Explore Our Projects</h1>
      </div>
      <div className='w-full flex justify-center  '>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16 w-full max-w-6xl px-6 md:px-10 lg:px-12 justify-center xl:gap-12'>
      {cards[activeDot].map((card, index) => (
          <div key={index} className='w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 '>
            <ProjectCard backgroundImage={card} />
          </div>
        ))}
      </div>
      </div>
      <div className='dots flex space-x-2 mt-8'>
      <span className={`dot w-3 h-3 bg-gray-500 rounded-full transition-all duration-300 ${activeDot === 0 ? 'bg-blue-500':''} cursor-pointer`}
        onClick={() => handleDotClick(0)}
      ></span>
      <span className={`dot w-3 h-3 bg-gray-500 rounded-full transition-all duration-300 ${activeDot === 1 ? 'bg-blue-500':''} cursor-pointer`}
          onClick={() => handleDotClick(1)}
      ></span>
      </div>
    </div>
    
  )
}

export default RCWSection
