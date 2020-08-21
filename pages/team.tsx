import Layout from './_layout'
import ContactUsSection from 'components/home/ContactUsSection'
import StaticNavigationBar from 'components/shared/StaticNavigationBar'
import TeamHero from 'components/team/TeamHero'
import Member from 'models/team/Member'
import MemberGrid from 'components/team/MemberGrid'
import firebase from 'db/firebase'

type Props = {
  members: Member[]
}

const Team: React.FC<Props> = (props) => {
  const { members } = props
  return (
    <Layout>
      <StaticNavigationBar />
      <TeamHero />
      <MemberGrid members={members} />
      <ContactUsSection />
    </Layout>
  )
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const db = firebase.firestore()

  const membersSnapshot = await db
    .collection('team-members')
    .where('isFeatured', '==', true)
    .orderBy('order', 'asc')
    .get()
  const members = membersSnapshot.docs.map((doc) => doc.data() as Member)
  return {
    props: {
      members,
    },
  }
}

export default Team
