import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <header className={styles['hero-container']}>
      <h1 className={styles['hero-title']}>A Comprehensive Guide To Technology</h1>
      <p className={styles['hero-body']}>
        We give everyone the technology to make meaningful change to society
      </p>
      <Link href="#">
        <a className={styles['hero-cta']}>Find Out More</a>
      </Link>
    </header>
  )
}
