import React from 'react'
import styles from './TeamHero.module.css'
import Hero from 'components/shared/Hero'

const TeamHero: React.FC<{}> = () => (
  <Hero className={styles.hero}>
    <h1 className={styles['hero-title']}>Miracle Workers</h1>
    <p className={styles['hero-body']}>
      At Developh Vietnam, our team bonds as both teammates and friends in a supportive environment.
      We work hard and play hard to bring about changes through technology and education.
    </p>
  </Hero>
)

export default TeamHero
