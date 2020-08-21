import Layout from './_layout'
import ContactUsSection from 'components/home/ContactUsSection'
import StaticNavigationBar from 'components/shared/StaticNavigationBar'
import TeamHero from 'components/team/TeamHero'

export default function Team() {
  return (
    <Layout>
      <StaticNavigationBar />
      <TeamHero />
      <ContactUsSection />
    </Layout>
  )
}
