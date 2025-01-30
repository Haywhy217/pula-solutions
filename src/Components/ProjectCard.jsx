import React from 'react'
import arrow from '../assets/Images/vector.png';

const ProjectCard = ({backgroundImage}) => {
  return (
    <div className='relative w-[265px] h-[291px] bg-cover bg-center' style={{ backgroundImage:` linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${backgroundImage})` }}>
      <div className='absolute top-[223px] left-[21px] flex justify-between items-center '>
        <p className='w-[194px] h-[57px] font-livvic font-normal text-[15px] leading-4 text-[#ffffff] object-contain'>Can Blockchain Help Farmers get Climate Insurance?</p>
        <img src={arrow} className='w-[20px] h-[20px] ml-2 ' />
      </div>
    </div>
  );
};

export default ProjectCard
