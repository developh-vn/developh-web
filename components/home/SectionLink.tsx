import HomeSection from 'models/home/HomeSection'
import styles from './SectionLink.module.css'
import { DetailedHTMLProps, LiHTMLAttributes, CSSProperties, AnchorHTMLAttributes } from 'react'
import cn from 'classnames'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
type AnchorProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

type SectionLinkProps = DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> & {
  section: HomeSection
  textColor?: string
  scrollOffset?: number
}
const SectionLink: React.FC<SectionLinkProps> = (props) => {
  const { section, textColor, children, className, scrollOffset, ...liProps } = props
  const isHomePage = useRouter().pathname === '/'
  const commonLinkProps: Partial<AnchorProps> = {
    className: styles['navigation-link'],
    style: textColor ? { color: textColor } : undefined,
  }

  return (
    <li className={cn(styles['navigation-item'], className)} {...liProps}>
      {isHomePage ? (
        <AnchorLink href={`#${section}`} offset={scrollOffset} {...commonLinkProps}>
          {children}
        </AnchorLink>
      ) : (
        <Link href={`/#${section}`}>
          <a {...commonLinkProps}>{children}</a>
        </Link>
      )}
    </li>
  )
}

export default SectionLink
