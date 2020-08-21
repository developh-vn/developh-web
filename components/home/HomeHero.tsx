import Link from 'next/link'
import styles from './HomeHero.module.css'
import cn from 'classnames'
import Hero from 'components/shared/Hero'

export default function HomeHero() {
  return (
    <Hero className={styles.hero}>
      <h1 className={styles['hero-title']}>A Comprehensive Guide To Technology</h1>
      <p className={styles['hero-body']}>
        We give everyone the technology to make meaningful change to society
      </p>
      <Link href="#">
        <a className={cn('button', styles['hero-cta'])}>Find Out More</a>
      </Link>
    </Hero>
  )
}
