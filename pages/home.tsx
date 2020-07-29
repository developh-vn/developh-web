import React from 'react'
import WhatWeDoSection from 'components/home/WhatWeDoSection'
import Hero from 'components/home/Hero'
import AboutUsSection from 'components/home/AboutUsSection'
import ContactUsSection from 'components/home/ContactUsSection'
import Layout from './_layout'
import DynamicNavigationBar from 'components/shared/DynamicNavigationBar'

export default function Home() {
  return (
    <Layout>
      <DynamicNavigationBar />
      <Hero />
      <WhatWeDoSection />
      <AboutUsSection />
      <ContactUsSection />
    </Layout>
  )
}
