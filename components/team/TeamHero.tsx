import React from 'react'
import styles from './TeamHero.module.css'
import cn from 'classnames'
import Hero from 'components/shared/Hero'

const TeamHero: React.FC<{}> = () => (
  <Hero>
    <h1 className={styles['hero-title']}>Individuals Who Do Miracles</h1>
    <p className={styles['hero-body']}>
      We bring together folks from all walks of life to bring innovation into technology
    </p>
  </Hero>
)

export default TeamHero
