export default function NavigationBar({ children }) {
  return (
    <div className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src="/developh_logo_white.png" alt="Developh" />
      </div>
      {/* Navigation */}
      <nav>
        <ul>{children}</ul>
      </nav>
    </div>
  )
}
