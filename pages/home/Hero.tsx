import Link from 'next/link'

export default function Hero() {
  return (
    <header className="hero">
      <h1>A Comprehensive Guide To Technology</h1>
      <p>We give everyone the technology to make meaningful change to society</p>
      <Link href="#">
        <a>Find out more</a>
      </Link>
    </header>
  )
}
