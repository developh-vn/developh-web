import React, { useEffect } from 'react'
import styles from './MemberPicture.module.css'
import firebase from 'db/firebase'

type Props = {
  memberName: string
  storagePath: string
}

const DynamicMemberPicture: React.FC<Props> = (props) => {
  const { storagePath, memberName } = props
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
    <div className={styles['picture-container']}>
      {imageSource && <img src={imageSource} alt={memberName} />}
    </div>
  )
}

export default DynamicMemberPicture
