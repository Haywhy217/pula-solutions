import React from 'react'
import vecA from '../assets/Images/vector1.png';
import vecB from '../assets/Images/vector2.png';
import vecC from '../assets/Images/vector3.png';
import vecD from '../assets/Images/vector4.png';
import vecE from '../assets/Images/vector5.png';
import InsightCardsWhite from './InsightCardsWhite';

const InsightSectionWhite = () => {
  return (
    <div className='w-full bg-white p-10 space-y-10 pb-20'>
       <div className='space-y-5 text-center'>
        <h3 className='font-livvic text-[32px] md:text-[40px] font-bold text-center leading-10 text-[#0ba5ec]'>Our Approach</h3>
        <h3 className='font-livvic text-[28px] md:text-[32px]  font-bold text-center leading-10 text-[#1f2937] max-w-2xl mx-auto'> Integrating innovative technology and data-driven insights</h3>
        <p className='font-inter text-[14px] md:text-[16px] font-normal leading-5 text-[#667085] max-w-4xl mx-auto text-left'>At Pula, we have refined the index insurance model to address the specific needs and challenges faced by smallholder farmers in emerging markets. Our approach integrates innovative technology and data-driven insights to deliver accessible, affordable, and effective insurance solutions. Here's how we implement index insurance through our platform:</p>
      </div>
      <div className='space-y-7'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
       <InsightCardsWhite
          image={vecA}
          title="1. Farmer Registration"
          description="We conduct assessment and mapping of laboratory infrastructure relative to population in low-resource regions to determine optimal diagnostics volume re-distribution."
       />
        <InsightCardsWhite
            image={vecB}
            title="2. Yield Measurement and Data Collection"
            description="Through satellite imagery, remote sensing technologies, and ground-based observations, we collect and analyze data on key index parameters, such as weather patterns and crop health, to assess risk and determine payouts"
        />
       <InsightCardsWhite
          image={vecC}
          title="3. Dashboard for Aggregators"
          description="Our user-friendly dashboard provides aggregators, such as governments, financial institutions, and NGOs, with real-time insights into the agricultural landscape, enabling informed decision-making and risk management."
       />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center '>
        <InsightCardsWhite
        image={vecD}
        title="4. Agronomic Advisory for Farmers"
        description="We offer agronomic advisory services to farmers through our platform, providing timely guidance on crop management practices, weather forecasts, and risk mitigation strategies to optimize yields and enhance resilience."
        />
        <InsightCardsWhite
            image={vecE}
            title="5. Index Monitoring and Payment Process"
            description="Our team continuously monitors selected index parameters to trigger payouts when predetermined thresholds are exceeded. Eligible farmers receive automatic payments directly into their accounts, providing crucial financial support in times of need."
        />
      </div>
      </div>
    </div>
  )
}

export default InsightSectionWhite
