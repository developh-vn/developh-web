import React from 'react'
import cn from 'classnames'
import styles from './Hero.module.css'

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

const Hero: React.FC<Props> = ({ children, className, ...props }) => (
  <header className={cn(styles.hero, className)} {...props}>
    <div className={cn(styles['hero-container'], 'lg:container mx-auto')}>{children}</div>
  </header>
)

export default Hero
