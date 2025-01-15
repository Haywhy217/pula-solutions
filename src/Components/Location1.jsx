import React from 'react'
import map from '../assets/Images/Locationimg.png'
import SAlogo from '../assets/Images/ZA.png'
import KElogo from '../assets/Images/KE.png'
import NGlogo from '../assets/Images/NG.png'
import ZMlogo from '../assets/Images/ZM.png'
import GNlogo from '../assets/Images/GN.png'



const Location1 = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center bg-secondary p-10 space-y-7 pb-20'>
      <h1 className='font-livvic font-bold leading 9 text-center text-lg text-[32px]  mb-4 lg:text-[45px] mt-7'>Our Locations</h1>
      <img src={map} alt="location" className='w-full mx-auto'/>
      <div className='w-full p-4 bg-white' >
        <div className='w-full  max-w-md object-contain h-auto mb-4 '>
        <h1 className='font-livvic text-[20px] lg:text-[32px] leading-10 text-lg font-bold text-headingColor'>From bustling urban hubs to  remote  rural landscapes</h1>
        </div>
        <div className='text-[20px]  font-inter text-[#667085] leading-7 mt-7'>
        <p className='mb-7'>
        At Pula, we're not just a digital presence; we're deeply rooted in communities worldwide, bringing our innovative agricultural solutions directly to the farmers who need them most. With offices strategically located across key agricultural regions, our physical presence underscores our commitment to delivering personalized support and expertise where it matters most.
        </p>
        
        <p className='mb-7'>
         From bustling urban hubs to remote rural landscapes, our dedicated teams work tirelessly to understand local agricultural dynamics, forge meaningful partnerships, and provide on-the-ground assistance to farmers. Whether it's navigating challenging climates, addressing specific crop needs, or tailoring insurance packages, our localized approach ensures that our solutions are as diverse and dynamic as the communities we serve.
         </p>
         <p className='mb-7'>
          Explore our global footprint below to learn more about our operational hubs and the impact we're making in agricultural communities worldwide. Join us as we continue to grow, innovate, and empower farmers on their journey towards a more resilient future.
        </p>
        </div>
      </div>
      <div className=' w-full h-auto flex flex-col  justify-center bg-white p-4 space-y-7'>
        <div className='w-full  p-3 flex flex-wrap  gap-5'>
          <div className='w-[253px] h-auto'>
                <div className='flex flex-row items-center gap-3 mb-2'>
                  <img src={SAlogo} alt='South Africa logo' className='w-10 h-10'/>
                  <span className='text-logoText font-inter text-md leading-4'>South Africa</span>
                </div>
                <p> Oceanview Tower,</p>
                <p> Block B, 3rd Floor </p>
                <p>Intersection of Beach Rd. and Strand St.,</p>
                <p>Sea Point</p>
                <p>PO Box 7895</p>
                <p> Cape Town, Western Cape, South Africa</p>
          </div>
          <div className='w-[253px] h-auto'>
                <div className='flex flex-row items-center gap-3 mb-2'>
                  <img src={NGlogo} alt='Nigeria logo' className='w-10 h-10'/>
                  <span className='text-logoText font-inter text-md leading-4'>Nigeria</span>
                  </div>
                  <p>Sunrise Plaza,</p>
                  <p> Block A, 5th Floor</p>
                  <p>Intersection of Ahmadu Bello Way and Marina St.,</p>
                  <p>Victoria Island</p>
                  <p>PO Box 4567</p>
                  <p>Lagos, Nigeria</p>  
          </div>
          <div className='w-[253px] h-auto'>
                <div className='flex flex-row items-center gap-3 mb-2'>
                  <img src={GNlogo} alt='Ghana logo' className='w-10 h-10'/>
                  <span className='text-logoText font-inter text-md leading-4'>Ghana</span>
                </div>
                <p> Golden Tower,</p>
                <p> Block E, 5th Floor</p>
                <p>Intersection of Liberation Rd. and Independence Ave</p>
                <p>Accra</p>
                <p>PO Box 4567</p>
                <p>Accra, Ghana</p>    
          </div>
          <div>
                <div className='flex flex-row items-center gap-3 mb-2'>
                  <img src={KElogo} alt='Kenya logo' className='w-10 h-10'/>
                  <span className='text-logoText font-inter text-md leading-4'>Kenya</span>
                </div>
                <p>Horizon Center,</p>
                <p>Block D, 6th Floor</p>
                <p>Intersection of Kenyatta Ave. and Moi Ave.,</p>
                <p>Nairobi CBD</p>
                <p>PO Box 9876</p>
                <p>Nairobi, Kenya</p>
          </div>
        </div>
        <div>
          <div className='w-full '>
            <div className='w-[253px] h-auto'>
                  <div className='flex flex-row items-center gap-3 mb-2'>
                    <img src={ZMlogo} alt='Zambia logo' className='w-10 h-10'/>
                    <span className='text-logoText font-inter text-md leading-4'>Zambia</span>
                  </div>
                  <p> Sunshine House,</p>
                  <p> Block F, 8th Floor</p>
                  <p>Intersection of Robert Mugabe Rd. and Julius Nyerere Way,</p>
                  <p>Harare CBD</p>
                  <p>PO Box 2468</p>
                  <p>Harare, Zimbabwe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location1
