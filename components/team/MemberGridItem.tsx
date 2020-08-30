import React from 'react'
import Member from 'models/team/Member'
import MemberPicture from './MemberPicture'
import styles from './MemberGridItem.module.css'
import cn from 'classnames'

type Props = {
  member: Member
}

const MemberGridItem: React.FC<Props> = (props) => {
  const { member } = props
  return (
    <li className={styles.container}>
      <div className="flex flex-col items-center">
        <MemberPicture className={styles.avatar} member={member} />
        <h3 className={styles.name}>{member.name}</h3>
        <p className={styles.role}>{member.role}</p>
        <blockquote className={styles.quote}>{member.quote}</blockquote>
      </div>
      <div className="flex flex-col w-full">
        <div className={styles.divider} />
        <div>
          <a href="#" className={cn('link', styles.connect)}>
            Connect with me
          </a>
        </div>
      </div>
    </li>
  )
}

export default MemberGridItem
