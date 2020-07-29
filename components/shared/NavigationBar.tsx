import styles from './NavigationBar.module.css'
import cn from 'classnames'
import Link from 'next/link'
import { useEffect, useRef, useState, RefObject, useLayoutEffect } from 'react'
import useScrollPosition from './useScrollPosition'
import { interpolateLab, interpolateNumber } from 'd3-interpolate'
import Theme from 'theme'
import SectionLink from 'components/home/SectionLink'
import HomeSection from 'models/home/HomeSection'
import useLayoutBreakpoint, { compareBreakpoints } from './useBreakpoint'
import NavigationButton from './NavigationButton'
import useHoveredStatus from './useHoveredStatus'

const MIN_OPACITY_Y_OFFSET = -128
const MAX_NAV_BAR_OPACITY = 1

const calculateTransitionValue = (yOffset: number) => {
  const clampedYOffset = clamp(yOffset, MIN_OPACITY_Y_OFFSET, 0)
  return interpolate(clampedYOffset, 0, MIN_OPACITY_Y_OFFSET, 0, 1)
}

const NavigationBar: React.FC<{}> = () => {
  const navBar = useRef<HTMLDivElement>(null)
  const [navTransitionValue, setNavTransitionValue] = useState(
    calculateTransitionValue(window.scrollY),
  )
  // We also use JavaScript to monitor `hovered` status (on top of CSS) to handle
  // the navigation bar transition
  const navButton = useRef(null)
  const buttonHovered = useHoveredStatus(navButton as RefObject<HTMLElement>)
  const navList = useRef<HTMLUListElement>(null)
  const navListHovered = useHoveredStatus(navList)
  // Knowledge of the breakpoint will help us determine the right color for links,
  // whose transitioning colors rely on screen size as well
  const breakpoint = useLayoutBreakpoint()

  const navBarOpacity = interpolateNumber(0, MAX_NAV_BAR_OPACITY)(navTransitionValue)
  const whiteLogoOpacity = interpolateNumber(1, 0)(navTransitionValue)
  const blueLogoOpacity = interpolateNumber(0, 1)(navTransitionValue)

  // Switch link color based on user's screen size
  const linkColor =
    compareBreakpoints(breakpoint, 'lg') >= 0
      ? interpolateLab('white', Theme.color.primary)(navTransitionValue)
      : undefined

  // Switch border color for active state based on hover statuses
  const navBorderColor =
    compareBreakpoints(breakpoint, 'lg') < 0 && (buttonHovered || navListHovered)
      ? interpolateLab('transparent', Theme.color.primary)(navTransitionValue)
      : 'transparent'

  // Calculate nav button color based on hover statuses
  const navButtonColor =
    buttonHovered || navListHovered
      ? Theme.color.primary
      : interpolateLab('white', Theme.color.primary)(navTransitionValue)
  const navButtonBackgroundColor = buttonHovered || navListHovered ? 'white' : 'transparent'

  // Calculate nav list button color based on hover statuses
  const navListBackgroundColor =
    compareBreakpoints(breakpoint, 'lg') < 0
      ? interpolateLab('rgba(8, 8, 90, 0.1)', Theme.color.primary)(navTransitionValue)
      : 'transparent'

  const shadowColor = interpolateLab('transparent', 'rgba(8, 8, 90, 0.1)')(navTransitionValue)

  useEffect(() => {
    // Use JavaScript to add `fixed` position, since we only want to handle fixed
    // positioning header on JavaScript enabled clients.
    navBar.current?.classList.add(styles['navbar-float'])
  })

  useScrollPosition(({ currPos }) => {
    const targetValue = calculateTransitionValue(currPos.y)
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
          {/* Navigation button colors are swapped */}
          <NavigationButton
            color={navButtonColor}
            borderColor={navBorderColor}
            backgroundColor={navButtonBackgroundColor}
            ref={navButton}
          />
          <ul
            className={styles['navigation-list']}
            style={{
              backgroundColor: navListBackgroundColor,
              borderColor: navBorderColor,
              transform: `translate(${1 - navTransitionValue}px, ${-navTransitionValue}px)`,
            }}
            ref={navList}
          >
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

export default NavigationBar

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
