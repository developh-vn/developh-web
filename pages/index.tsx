import Head from 'next/head'
import Link, { LinkProps } from 'next/link'
import WhatWeDoSection from './home/WhatWeDoSection'
import Hero from './home/Hero'
import NavigationBar from './shared/NavigationBar'
import AboutUsSection from './home/AboutUsSection'
import ContactUsSection from './home/ContactUsSection'
import Footer from './shared/Footer'

export enum HomeSection {
  WhatWeDo = 'what-we-do',
  AboutUs = 'about-us',
  ContactUs = 'contact-us',
}

type SectionLinkProps = Omit<LinkProps, 'href'> & { section: HomeSection }
const SectionLink: React.FC<SectionLinkProps> = ({ section, children, ...props }) => (
  <li>
    <Link href={`#${section}`} {...props}>
      <a>{children}</a>
    </Link>
  </li>
)

export default function Home() {
  return (
    <div>
      <Head>
        <title>Developh Vietnam</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="//db.onlinewebfonts.com/c/860c3ec7bbc5da3e97233ccecafe512e?family=Circular+Std+Book"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="//db.onlinewebfonts.com/c/9475d6a0b79c164f9f605673714e75d9?family=Circular+Std+Medium"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="//db.onlinewebfonts.com/c/f1a22f6f15d272c7aa56da8b2c91f5e5?family=Circular+Std+Black"
          rel="stylesheet"
          type="text/css"
        />
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
