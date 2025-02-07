import React from 'react'
import OverviewCards from './OverviewCards'
import ov1 from '../assets/Images/ovimg1.png';
import ov2 from '../assets/Images/ovimg2.png';
import ov3 from '../assets/Images/ovimg3.png';
import ov4 from '../assets/Images/ovimg4.png';
import ov5 from '../assets/Images/ovimg5.png';
import ov6 from  '../assets/Images/ovimg6.png';

const OverviewSection = () => {
  return (
    <div className='flex flex-col p-4 md:p-10'>
      <OverviewCards
        image={ov1}
        bgColor='bg-primary'
        title='2.22B'
        subtitle='Sum Insured ($)'
        description="We've helped build over 400 amazing projects."
      />
      <OverviewCards
        image={ov2}
        bgColor='bg-overview'
        title='79.6M'
        subtitle='Gross Premiums ($)'
        description='Our customers have reported an average of ~600% ROI.'
      
      />
      <OverviewCards
        image={ov3}
        bgColor='bg-primary'
        title='15.4M'
        subtitle='Farmers Insured'
        description='Our free UI kit has been downloaded over 10k times.'
      
      />
      <OverviewCards
        image={ov4}
        bgColor='bg-overview'
        title='4.91M'
        subtitle='Hectares Insured'
        description="We're proud of our 5-star rating with over 200 reviews."
      />
      <OverviewCards
        image={ov5}
        bgColor='bg-primary'
        title='40.8M'
        subtitle='Payouts ($)'
        description='Our free UI kit has been downloaded over 10k times.'
      />
      <OverviewCards
        image={ov6}
        bgColor='bg-overview'
        title='1M'
        subtitle='Farmers Paid'
        description="We're proud of our 5-star rating with over 200 reviews."
      />
    </div>
  )
}

export default OverviewSection
