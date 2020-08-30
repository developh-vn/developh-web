import React, { useEffect } from 'react'
import styles from './MemberPicture.module.css'
import firebase from 'db/firebase'
import cn from 'classnames'

export type DynamicMemberPictureProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  memberName: string
  storagePath: string
}

const DynamicMemberPicture: React.FC<DynamicMemberPictureProps> = (props) => {
  const { storagePath, memberName, className, ...rest } = props
  const [imageSource, setImageSource] = React.useState<string | null>(null)
  useEffect(() => {
    if (imageSource !== null) {
      return
    }
    firebase
      .storage()
      .ref(storagePath)
      .getDownloadURL()
      .then(setImageSource)
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className={cn(styles['picture-container'], className)} {...rest}>
      {imageSource && <img src={imageSource} alt={memberName} />}
    </div>
  )
}

export default DynamicMemberPicture
