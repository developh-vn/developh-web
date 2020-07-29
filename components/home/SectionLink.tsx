import HomeSection from 'models/home/HomeSection'
import styles from './SectionLink.module.css'
import { DetailedHTMLProps, LiHTMLAttributes } from 'react'
import cn from 'classnames'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type SectionLinkProps = DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> & {
  section: HomeSection
  textColor?: string
}
const SectionLink: React.FC<SectionLinkProps> = (props) => {
  const { section, textColor, children, className, ...liProps } = props

  return (
    <li className={cn(styles['navigation-item'], className)} {...liProps}>
      <AnchorLink
        href={`#${section}`}
        offset={80}
        className={cn(styles['navigation-link'])}
        style={textColor ? { color: textColor } : {}}
      >
        {children}
      </AnchorLink>
    </li>
  )
}

export default SectionLink
