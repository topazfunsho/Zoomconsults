import React from 'react'
import Hero from '../components/Hero'
import Overview from '../components/Overview';
import OurBusinesses from '../components/OurBusinesses';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonial';
function Home() {
  return (
    <div>
        <Hero />
        <Overview />
        <OurBusinesses />
        <WhyChooseUs />
        <Testimonials />
    </div>
  )
}

export default Home