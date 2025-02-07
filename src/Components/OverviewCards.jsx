import React from 'react';

const OverviewCards = ({ image, bgColor, title, subtitle, description }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center md:gap-3 ">
      
      <img 
        src={image} 
        className="w-full md:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] object-cover"
        alt={title}
      />
      
     
      <div className={`w-full md:w-1/2 ${bgColor} flex items-center justify-center h-[300px] md:h-[400px] lg:h-[500px]`}>
        <div className="text-center text-white px-6">
          <h1 className="font-livvic font-semibold text-[20px] md:text-[32px] lg:text-[40px]">{title}</h1>
          <h6 className="font-inter font-normal text-[14px] md:text-[18px] lg:text-[22px]">{subtitle}</h6>
          <p className="font-inter font-normal text-[12px] md:text-[16px] lg:text-[18px]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCards;
