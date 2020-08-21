import React from 'react'
import Member from 'models/team/Member'

type Props = {
  member: Member
}

const MemberGridItem: React.FC<Props> = (props) => {
  const { member } = props

  return <li></li>
}

export default MemberGridItem
