import styles from './NavigationBar.module.css'

export default function NavigationBar({ children }) {
  return (
    <div className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src="/developh_logo_white.png" alt="Developh" />
      </div>
      {/* Navigation */}
      <nav className={styles.navigation}>
        <ul>{children}</ul>
      </nav>
    </div>
  )
}
