import React, { CSSProperties, RefObject } from 'react'
import styles from './StaticNavigationBar.module.css'
import cn from 'classnames'
import Link from 'next/link'
import NavigationButton from './NavigationButton'
import SectionLink from 'components/home/SectionLink'
import HomeSection from 'models/home/HomeSection'

type Props = {
  style?: CSSProperties
  linkColor?: string
  linkScrollOffset?: number
  originalLogoOpacity?: number
  borderColor?: string
  navButtonColor?: string
  navButtonBackgroundColor?: string
  listStyle?: CSSProperties
  navButtonRef?: RefObject<any>
  navListRef?: RefObject<HTMLUListElement>
}

export default React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    style,
    linkColor,
    linkScrollOffset,
    originalLogoOpacity = 1,
    borderColor,
    navButtonColor,
    navButtonBackgroundColor,
    listStyle,
    navButtonRef,
    navListRef,
  } = props

  return (
    <div className={styles.navbar} style={style} ref={ref}>
      <div className={cn(styles['navbar-container'], 'lg:container mx-auto')}>
        {/* Logo */}
        <Link href="/">
          <a className="flex flex-1 relative">
            <div className={styles['blue-logo']} style={{ opacity: 1 - originalLogoOpacity }} />
            <div className={styles.logo}>
              <img
                src="/developh_logo_white.png"
                alt="Developh"
                style={{ opacity: originalLogoOpacity }}
              />
            </div>
          </a>
        </Link>
        {/* Navigation */}
        <nav className={styles.navigation} tabIndex={1}>
          {/* Navigation button colors are swapped */}
          <NavigationButton
            color={navButtonColor}
            borderColor={borderColor}
            backgroundColor={navButtonBackgroundColor}
            ref={navButtonRef}
          />
          <ul className={styles['navigation-list']} style={listStyle} ref={navListRef}>
            <SectionLink
              textColor={linkColor}
              section={HomeSection.WhatWeDo}
              scrollOffset={linkScrollOffset}
            >
              What we do
            </SectionLink>
            <SectionLink
              textColor={linkColor}
              section={HomeSection.AboutUs}
              scrollOffset={linkScrollOffset}
            >
              About us
            </SectionLink>
            <SectionLink
              textColor={linkColor}
              section={HomeSection.ContactUs}
              scrollOffset={linkScrollOffset}
            >
              Contact us
            </SectionLink>
          </ul>
        </nav>
      </div>
    </div>
  )
})
