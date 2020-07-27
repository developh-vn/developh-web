import Head from 'next/head'
import Link, { LinkProps } from 'next/link'
import WhatWeDoSection from './home/WhatWeDoSection'
import HomeSection from './home/HomeSection'
import Hero from './home/Hero'
import NavigationBar from './shared/NavigationBar'
import AboutUsSection from './home/AboutUsSection'
import ContactUsSection from './home/ContactUsSection'
import Footer from './shared/Footer'

type SectionLinkProps = Omit<LinkProps, 'href'> & { section: HomeSection }
const SectionLink: React.FC<SectionLinkProps> = ({ section, ...props }) => (
  <li>
    <Link href={`#${section}`} {...props} />
  </li>
)

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
