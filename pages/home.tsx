import Head from 'next/head'
import WhatWeDoSection from 'components/home/WhatWeDoSection'
import Hero from 'components/home/Hero'
import NavigationBar from 'components/shared/NavigationBar'
import AboutUsSection from 'components/home/AboutUsSection'
import ContactUsSection from 'components/home/ContactUsSection'
import Footer from 'components/shared/Footer'
import SectionLink from 'components/home/SectionLink'
import HomeSection from 'models/home/HomeSection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Developh Vietnam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavigationBar>
          <SectionLink section={HomeSection.WhatWeDo}>What we do</SectionLink>
          <SectionLink section={HomeSection.AboutUs}>About us</SectionLink>
          <SectionLink section={HomeSection.ContactUs}>Contact us</SectionLink>
        </NavigationBar>
        <Hero />
        <WhatWeDoSection />
        <AboutUsSection />
        <ContactUsSection />
      </main>

      <Footer />
    </div>
  )
}
