import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import ProductSection from '../Components/ProductSection';
import InsightSection from '../Components/InsightSection';
import SocialProof from '../Components/SocialProof';
import PressMention from '../Components/PressMention';
import MetricsSection from '../Components/MetricsSection'
import PressSection from '../Components/PressSection';
import RCWSection from '../Components/RCWSection';
import CTASection from '../Components/CTASection';
import Footer from '../Components/Footer';


const LandingPage = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ProductSection/>
      <InsightSection/>
      <SocialProof/>
      <PressMention/>
      <MetricsSection/>
      <PressSection/>
      <RCWSection/>
      <CTASection/>
      <Footer/>
    </>
  )
}

export default LandingPage
