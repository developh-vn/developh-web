import React, { useContext } from 'react'
import styles from './NavigationButton.module.css'

type NavigationButtonProps = {
  color: string
  borderColor: string
  backgroundColor: string
}

const ColorContext = React.createContext<string>('white')

const NavigationButton = React.forwardRef<HTMLDivElement, NavigationButtonProps>((props, ref) => {
  const { color, borderColor, backgroundColor } = props
  return (
    <ColorContext.Provider value={color}>
      <div className={styles.button} style={{ backgroundColor, borderColor }} ref={ref}>
        <div className={styles.icon}>
          <IconDash />
          <IconDash />
          <IconDash />
        </div>
      </div>
    </ColorContext.Provider>
  )
})
export default NavigationButton

type IconDashProps = {}
const IconDash: React.FC<IconDashProps> = () => {
  const color = useContext(ColorContext)
  return <div className={styles['icon-dash']} style={{ backgroundColor: color }} />
}
