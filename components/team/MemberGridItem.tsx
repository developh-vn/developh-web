import React from 'react'
import Member from 'models/team/Member'
import MemberPicture from './MemberPicture'

type Props = {
  member: Member
}

const MemberGridItem: React.FC<Props> = (props) => {
  const { member } = props
  return (
    <li>
      <MemberPicture member={member} />
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <p>{member.quote}</p>
      <div />
      <div>
        <a href="#">Connect with me</a>
      </div>
    </li>
  )
}

export default MemberGridItem
