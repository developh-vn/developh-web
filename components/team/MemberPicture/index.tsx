import dynamic from 'next/dynamic'
import StaticMemberPicture from './StaticMemberPicture'
import Member from 'models/team/Member'
import { DynamicMemberPictureProps } from './DynamicMemberPicture'

const MemberPicture = dynamic<DynamicMemberPictureProps>(() => import('./DynamicMemberPicture'), {
  ssr: false,
  loading: () => <StaticMemberPicture />,
})

type ContainerProps = Omit<DynamicMemberPictureProps, 'memberName' | 'storagePath'> & {
  member: Member
}

const MemberPictureContainer: React.FC<ContainerProps> = ({ member, ...rest }) => (
  <MemberPicture memberName={member.name} storagePath={member.avatar} {...rest} />
)

export default MemberPictureContainer
