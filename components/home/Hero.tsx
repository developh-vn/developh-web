import Link from 'next/link'
import styles from './Hero.module.css'
import cn from 'classnames'

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={cn(styles['hero-container'], 'lg:container mx-auto')}>
        <h1 className={styles['hero-title']}>A Comprehensive Guide To Technology</h1>
        <p className={styles['hero-body']}>
          We give everyone the technology to make meaningful change to society
        </p>
        <Link href="#">
          <a className={cn('button', styles['hero-cta'])}>Find Out More</a>
        </Link>
      </div>
    </header>
  )
}
