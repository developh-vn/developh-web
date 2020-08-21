import dynamic from 'next/dynamic'
import StaticMemberPicture from './StaticMemberPicture'
import Member from 'models/team/Member'

const MemberPicture = dynamic(() => import('./DynamicMemberPicture'), {
  ssr: false,
  loading: () => <StaticMemberPicture />,
})

export default ({ member }: { member: Member }) => (
  <MemberPicture memberName={member.name} storagePath={member.avatar} />
)
