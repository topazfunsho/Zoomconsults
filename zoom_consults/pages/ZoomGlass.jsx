import React from 'react'
import ZoomGlassHero from '../components/glassComponents/ZoomGlassHero'
import GlassAbout from '../components/glassComponents/GlassAbout'
import GlassSolutions from '../components/glassComponents/GlassSolutions'
import GlassWhyChooseUs from '../components/glassComponents/GlassWhyChooseUs'
import GlassApplications from '../components/glassComponents/GlassApplications'
import GlassProcess from '../components/glassComponents/GlassProcess'
import GlassProjects from '../components/glassComponents/GlassProjects'
import GlassQuote from '../components/glassComponents/GlassQuote'

function ZoomGlass() {
  return (
    <div>
      <ZoomGlassHero />
      <GlassAbout />
      <GlassSolutions />
      <GlassWhyChooseUs />
      <GlassApplications />
      <GlassProcess />
      <GlassProjects />
      <GlassQuote />
    </div>
  )
}

export default ZoomGlass