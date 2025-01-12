import React from 'react'
import subscribepic from '../assets/Images/subscribe.png'
import Logo from '../assets/Images/pimage_a.png'

const Footer = () => {
  return (
    <div className='bg-primary h-full'>
      <div className='px-4 pt-8 mx-auto lg:px-16 '>
        <img src={subscribepic} alt='subscribe image' className='w-full  max-w-[80%]  '/>
      </div>
      <div className='h-96 bg-primary flex justify-between items-center px-2 lg:px-16 '>
        <div className='w-full sm:w-1/2 md:w-1/4 lg:w-auto mb-4'> 
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
        <div className='w-full sm:w-1/2 md:w-1/4 lg:w-auto mb-4'>
          <p className='font-inter text-footColor'>Company</p>
            <ul className='text-white'>
              <li>About us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>News</li>
              <li>Contact</li>
            </ul>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/4 lg:w-auto mb-4'>
          <p className='font-inter text-footColor'>Resources</p>
            <ul className='text-white'>
              <li>Blog</li>
              <li>Newsletter</li>
              <li>Publications</li>
              <li>Casestudies</li>
              <li>Support</li>
              </ul>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/4 lg:w-auto mb-4'>
          <p className='font-inter text-footColor'>Follow us</p>
            <ul className='text-white'> 
              <li>Twitter</li>
              <li>Linkedin</li>
              <li>Facebook</li>
              <li>AngeList</li>
            </ul>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/4 lg:w-auto mb-4'>
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
           <div className='text-white mt-7 flex justify-between items-center flex-row px-8  lg:px-16 pb-8'>
            <img src={Logo} alt='logo image'className='w-32 h-auto'/>
              <p className='mr-56'>© 2024 Pula. All rights reserved.</p>
           </div>
    </div>
  )
}

export default Footer

