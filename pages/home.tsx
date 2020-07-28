import React from 'react'
import Head from 'next/head'
import WhatWeDoSection from 'components/home/WhatWeDoSection'
import Hero from 'components/home/Hero'
import NavigationBar from 'components/shared/NavigationBar'
import AboutUsSection from 'components/home/AboutUsSection'
import ContactUsSection from 'components/home/ContactUsSection'
import Footer from 'components/shared/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Developh Vietnam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavigationBar />
        <Hero />
        <WhatWeDoSection />
        <AboutUsSection />
        <ContactUsSection />
      </main>

      <Footer />
    </div>
  )
}
