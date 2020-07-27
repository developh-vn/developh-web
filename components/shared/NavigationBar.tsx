import styles from './NavigationBar.module.css'
import cn from 'classnames'
import Link from 'next/link'

export default function NavigationBar({ children }) {
  return (
    <div className={styles.navbar}>
      <div className={cn(styles['navbar-container'], 'lg:container mx-auto')}>
        {/* Logo */}
        <Link href="/">
          <a>
            <div className={styles.logo}>
              <img src="/developh_logo_white.png" alt="Developh" />
            </div>
          </a>
        </Link>
        {/* Navigation */}
        <nav className={styles.navigation}>
          <ul className={styles['navigation-list']}>{children}</ul>
        </nav>
      </div>
    </div>
  )
}
