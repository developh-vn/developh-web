import React from 'react'
import Member from 'models/team/Member'
import MemberGridItem from './MemberGridItem'

type Props = {
  members: Member[]
}

const MemberGrid: React.FC<Props> = (props) => {
  const { members } = props
  return (
    <ul>
      {members.map((member) => (
        <MemberGridItem key={member.order} member={member} />
      ))}
    </ul>
  )
}

export default MemberGrid
