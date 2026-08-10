import React from 'react'
import AboutHero from '../components/aboutComponents/AboutHero'
import WhyChooseUs from '../components/WhyChooseUs'
import OurApproach from '../components/aboutComponents/OurApproach'
import OurImpact from '../components/aboutComponents/OurImpact'
import AboutCTA from '../components/aboutComponents/AboutCTA'
import WhatWeDo from '../components/aboutComponents/WhatWeDo'
import Overview from '../components/Overview'

function About() {
  return (
    <div>
      <AboutHero />
      <Overview />
      <WhyChooseUs />
      <WhatWeDo />
      <OurImpact />
      <OurApproach />
      <AboutCTA />
    </div>
  )
}

export default About