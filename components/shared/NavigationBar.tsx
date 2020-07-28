import styles from './NavigationBar.module.css'
import cn from 'classnames'
import Link from 'next/link'
import { useEffect, useRef, useState, useContext } from 'react'
import useScrollPosition from './useScrollPosition'
import { interpolateLab, interpolateNumber } from 'd3-interpolate'
import Theme from 'theme'
import SectionLink from 'components/home/SectionLink'
import HomeSection from 'models/home/HomeSection'

const MIN_OPACITY_Y_OFFSET = -128
const MAX_NAV_BAR_OPACITY = 1

export default function NavigationBar() {
  const navBar = useRef<HTMLDivElement>(null)
  const [navTransitionValue, setNavTransitionValue] = useState(0)

  const navBarOpacity = interpolateNumber(0, MAX_NAV_BAR_OPACITY)(navTransitionValue)
  const whiteLogoOpacity = interpolateNumber(1, 0)(navTransitionValue)
  const blueLogoOpacity = interpolateNumber(0, 1)(navTransitionValue)
  const linkColor = interpolateLab('white', Theme.color.primary)(navTransitionValue)
  const shadowColor = interpolateLab('transparent', 'rgba(8, 8, 90, 0.1)')(navTransitionValue)

  useEffect(() => {
    // Use JavaScript to add
    navBar.current?.classList.add(styles['navbar-float'])
  })
  useScrollPosition(({ currPos }) => {
    const clampedYOffset = clamp(currPos.y, MIN_OPACITY_Y_OFFSET, 0)
    const targetValue = interpolate(clampedYOffset, 0, MIN_OPACITY_Y_OFFSET, 0, 1)
    if (targetValue === navTransitionValue) {
      return
    }
    setNavTransitionValue(targetValue)
  })

  return (
    <div
      className={styles.navbar}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${navBarOpacity})`,
        boxShadow: `0 20px 25px -5px ${shadowColor}`,
      }}
      ref={navBar}
    >
      <div className={cn(styles['navbar-container'], 'lg:container mx-auto')}>
        {/* Logo */}
        <Link href="/">
          <a className="flex flex-1 relative">
            <div className={styles['blue-logo']} style={{ opacity: blueLogoOpacity }} />
            <div className={styles.logo}>
              <img
                src="/developh_logo_white.png"
                alt="Developh"
                style={{ opacity: whiteLogoOpacity }}
              />
            </div>
          </a>
        </Link>
        {/* Navigation */}
        <nav className={styles.navigation} tabIndex={1}>
          <div className={styles['navigation-button']} />
          <ul className={styles['navigation-list']}>
            <SectionLink textColor={linkColor} section={HomeSection.WhatWeDo}>
              What we do
            </SectionLink>
            <SectionLink textColor={linkColor} section={HomeSection.AboutUs}>
              About us
            </SectionLink>
            <SectionLink textColor={linkColor} section={HomeSection.ContactUs}>
              Contact us
            </SectionLink>
          </ul>
        </nav>
      </div>
    </div>
  )
}

const interpolate = (
  value: number,
  min: number,
  max: number,
  outMin: number,
  outMax: number,
): number => {
  if (min === outMin && max === outMax) {
    return value
  }
  let percentage = (value - min) / (max - min)
  return outMin + (outMax - outMin) * percentage
}

// prettier-ignore
const clamp = (value: number, min: number, max: number) => {
  if (value < min) { return min }
  if (value > max) { return max }
  return value
}
