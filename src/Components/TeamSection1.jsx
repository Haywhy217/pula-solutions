import React, { useState } from 'react';
import TeamCards from './TeamCards';
import img1 from '../assets/Images/TC1.png';
import img2 from '../assets/Images/TC2.png';
import img3 from '../assets/Images/TC3.png';
import img4 from '../assets/Images/TC4.png';
import img5 from '../assets/Images/TC5.png';
import img6 from '../assets/Images/TC6.png';
import img7 from '../assets/Images/TC3.png';
import img8 from '../assets/Images/TC8.png';
import img9 from '../assets/Images/TC9.png';
import img10 from '../assets/Images/TC10.png';
import img11 from '../assets/Images/TC11.png';

const TeamSection1 = () => {
  const [active, setActive] = useState(null);

  return (
    <div className='p-6 md:p-10 lg:p-14 '>
      <div className='text-center space-y-3 '>
        <h1 className='font-livvic text-[20px] md:text-[30px] lg:text-[40px] leading-8 font-semibold'>Meet The Team</h1>
        <div className='w-full max-w-[560px] sm:w-[80%] md:w-[70%] lg:w-[560px] h-[44px]p-2 rounded-[6px] bg-[#f3f4f6] mx-auto flex flex-wrap justify-center gap-4 md:gap-6'>
          {["Management", "Board and Advisors", "Case studies"].map((item, index) => (
            <span
              key={index}
              className={`cursor-pointer px-3 py-1 rounded-[4px] transition-all ${
                active === index ? 'bg-white text-blue-500' : 'text-black'
              }`}
              onClick={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className='  items-center  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10 lg:gap-5 mt-14'>
        <TeamCards
          image={img1}
          name='Thomas  Njeru'
          title='CEO & Co-Founder '
          description='Former co-founder of Opendoor. Early staff at Spotify and Clearbit.'
        
        />
        <TeamCards
          image={img2}
          name='Rose Goslinga'
          title='President & Co-Founder'
          description='Lead engineering teams at Figma, Pitch, and Protocol Labs.'
        />
        <TeamCards
          image={img3}
          name='Sarfraz Shah'
          title='Chief Insurance Officer'
          description='Former PM for Linear, Lambda School, and On Deck.'
        />
        <TeamCards
          image={img4}
          name='Nabil JanMohamed'
          title='Leader, Global Field Operations'
          description='Former frontend dev for Linear, Coinbase, and Postscript.'
       />
      </div>
      <div className='items-center  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-5 mt-14'>
        <TeamCards
          image={img5}
          name='Olivia Rhye'
          title='Founder & CEO'
          description='Former co-founder of Opendoor. Early staff at Spotify and Clearbit.'
        />
        <TeamCards
          image={img6}
          name='Phoenix Baker'
          title='Engineering Manager'
          description='Lead engineering teams at Figma, Pitch, and Protocol Labs.'
        />
        <TeamCards
          image={img7}
          name='Lana Steiner'
          title='Product Manager'
          description='Former PM for Linear, Lambda School, and On Deck.'
        />
        <TeamCards
          image={img8}
          name='Demi Wilkinson'
          title='Frontend Developer'
          description='Former frontend dev for Linear, Coinbase, and Postscript.'
        />
      </div>
      <div className='items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-5 mt-14 pb-20'>
        <TeamCards
          image={img9}
          name='Candice Wu'
          title='Backend Developer'
          description='Lead backend dev at Clearbit. Former Clearbit and Loom.'
        />
        <TeamCards
          image={img10}
          name='Natali Craig'
          title='Product Designer'
          description='Founding design team at Figma. Former Pleo, Stripe, and Tile.'
          />
        <TeamCards
          image={img11}
          name='Orlando Diggs'
          title='Customer Success'
          description='Lead CX at Wealthsimple. Former PagerDuty and Sqreen.'
        />
      </div>
    </div>
  );
};

export default TeamSection1;
