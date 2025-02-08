import React from 'react'
import subscribepic from '../assets/Images/subscribe.png'
import Logo from '../assets/Images/pimage_a.png'

const Footer = () => {
  return (
    <div className='bg-primary h-full p-6 lg:p-10'>
      <div className='px-4 pt-8  lg:px-16 '>
        <img src={subscribepic} alt='subscribe image' className='w-full mx-auto   '/>
      </div>
      <div className=' bg-primary flex flex-col mx-auto items-center px-8 lg:flex-row flex-wrap justify-between  lg:px-16 pt-10 md:flex-row md:flex-wrap md:px-8'> 
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-auto mb-4 space-y-1'> 
          <p className='font-inter text-footColor'>Products and Service</p>
            <ul className='text-white'>
              <li>AYII</li>
              <li>HYII</li>
              <li>Livestock Insurance</li>
              <li>Field Sense</li>
              <li>Disaster Risk Funding</li>
              <li>Consultation</li>
            </ul>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-auto mb-4 space-y-1'>
          <p className='font-inter text-footColor'>Company</p>
            <ul className='text-white'>
              <li>About us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>News</li>
              <li>Contact</li>
            </ul>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-auto mb-4 space-y-1'>
          <p className='font-inter text-footColor'>Resources</p>
            <ul className='text-white'>
              <li>Blog</li>
              <li>Newsletter</li>
              <li>Publications</li>
              <li>Casestudies</li>
              <li>Support</li>
              </ul>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-auto mb-4 space-y-1'>
          <p className='font-inter text-footColor'>Follow us</p>
            <ul className='text-white'> 
              <li>Twitter</li>
              <li>Linkedin</li>
              <li>Facebook</li>
              <li>AngeList</li>
            </ul>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-auto mb-4 space-y-2'>
          <p className='font-inter text-footColor'>Legal</p>
          <ul className='text-white'>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookie</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <hr className='w-[90%]  mx-auto' />   
           <div className='text-white space-y-3 mt-7 flex flex-col  lg:flex-row px-8 justify-between items-center lg:px-16 pb-8 md:flex-row ' >
            <img src={Logo} alt='logo image'className='w-24 h-auto'/>
              <p className='w-full lg:w-auto text-center lg:text-left md:w-auto md:text-center md:mr-6'>© 2024 Pula. All rights reserved.</p>
           </div>
    </div>
  )
}

export default Footer

