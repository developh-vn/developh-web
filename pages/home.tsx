import React from 'react'
import Head from 'next/head'
import WhatWeDoSection from 'components/home/WhatWeDoSection'
import Hero from 'components/home/Hero'
import AboutUsSection from 'components/home/AboutUsSection'
import ContactUsSection from 'components/home/ContactUsSection'
import Footer from 'components/shared/Footer'
import DynamicNavigationBar from 'components/shared/DynamicNavigationBar'
import StaticNavigationBar from 'components/shared/StaticNavigationBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Developh Vietnam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <DynamicNavigationBar />
        <Hero />
        <WhatWeDoSection />
        <AboutUsSection />
        <ContactUsSection />
      </main>

      <Footer />
    </div>
  )
}
