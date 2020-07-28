import React, { useContext } from 'react'
import Head from 'next/head'
import WhatWeDoSection from 'components/home/WhatWeDoSection'
import Hero from 'components/home/Hero'
import NavigationBar from 'components/shared/NavigationBar'
import AboutUsSection from 'components/home/AboutUsSection'
import ContactUsSection from 'components/home/ContactUsSection'
import Footer from 'components/shared/Footer'
import HomeSection from 'models/home/HomeSection'
import { Waypoint } from 'react-waypoint'

export const HomeSectionContext = React.createContext<HomeSection | null>(null)

export default function Home() {
  const [currentSection, setCurrentSection] = React.useState<HomeSection | null>(null)

  return (
    <div>
      <Head>
        <title>Developh Vietnam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeSectionContext.Provider value={currentSection}>
          <NavigationBar />
          <Hero />

          <HomeSectionWaypoint section={HomeSection.WhatWeDo} setCurrentSection={setCurrentSection}>
            <WhatWeDoSection />
          </HomeSectionWaypoint>

          <HomeSectionWaypoint section={HomeSection.AboutUs} setCurrentSection={setCurrentSection}>
            <AboutUsSection />
          </HomeSectionWaypoint>

          <HomeSectionWaypoint
            section={HomeSection.ContactUs}
            setCurrentSection={setCurrentSection}
          >
            <ContactUsSection />
          </HomeSectionWaypoint>
        </HomeSectionContext.Provider>
      </main>

      <Footer />
    </div>
  )
}

type HomeSectionWaypointProps = Waypoint.WaypointProps & {
  section: HomeSection
  setCurrentSection: (section: HomeSection | null) => void
}
const HomeSectionWaypoint: React.FC<HomeSectionWaypointProps> = (props) => {
  const currentSection = useContext(HomeSectionContext)
  const { section, setCurrentSection, ...waypointProps } = props

  return (
    <Waypoint
      onEnter={() => setCurrentSection(section)}
      onLeave={() => {
        if (currentSection === section) {
          setCurrentSection(null)
        }
      }}
      {...waypointProps}
    />
  )
}
