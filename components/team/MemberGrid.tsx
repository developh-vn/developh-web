import React from 'react'
import Member from 'models/team/Member'
import MemberGridItem from './MemberGridItem'
import styles from './MemberGrid.module.css'

type Props = {
  members: Member[]
}

const MemberGrid: React.FC<Props> = (props) => {
  const { members } = props
  return (
    <div className={'lg:container mx-auto'}>
      <ul className={styles['grid-container']}>
        {members.map((member) => (
          <MemberGridItem key={member.order} member={member} />
        ))}
      </ul>
    </div>
  )
}

export default MemberGrid
