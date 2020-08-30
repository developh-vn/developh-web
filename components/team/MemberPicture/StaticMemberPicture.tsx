import React from 'react'
import styles from './MemberPicture.module.css'
import cn from 'classnames'

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const StaticMemberPicture: React.FC<Props> = ({ className, ...rest }) => {
  return <div className={cn(styles['picture-container'], className)} {...rest} />
}

export default StaticMemberPicture
