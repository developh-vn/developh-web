import React from 'react'
import WhatWeDoSection from 'components/home/WhatWeDoSection'
import HomeHero from 'components/home/HomeHero'
import AboutUsSection from 'components/home/AboutUsSection'
import ContactUsSection from 'components/home/ContactUsSection'
import Layout from './_layout'
import DynamicNavigationBar from 'components/shared/DynamicNavigationBar'

export default function Home() {
  return (
    <Layout>
      <DynamicNavigationBar />
      <HomeHero />
      <WhatWeDoSection />
      <AboutUsSection />
      <ContactUsSection />
    </Layout>
  )
}
