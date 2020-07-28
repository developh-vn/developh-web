import HomeSection from 'models/home/HomeSection'
import styles from './SectionLink.module.css'
import { useContext, DetailedHTMLProps, LiHTMLAttributes } from 'react'
import { HomeSectionContext } from 'pages/home'
import cn from 'classnames'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type SectionLinkProps = DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> & {
  section: HomeSection
  textColor?: string
}
const SectionLink: React.FC<SectionLinkProps> = (props) => {
  const { section, textColor, children, className, ...liProps } = props
  const activeSection = useContext(HomeSectionContext)

  return (
    <li
      className={cn(
        styles['navigation-item'],
        { [styles.active]: activeSection === section },
        className,
      )}
      {...liProps}
    >
      <AnchorLink
        href={`#${section}`}
        offset={80}
        className={styles['navigation-link']}
        style={textColor ? { color: textColor } : undefined}
      >
        {children}
      </AnchorLink>
    </li>
  )
}

export default SectionLink
