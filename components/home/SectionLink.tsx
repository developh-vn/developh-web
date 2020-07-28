import Link, { LinkProps } from 'next/link'
import HomeSection from 'models/home/HomeSection'
import styles from './SectionLink.module.css'

type SectionLinkProps = Omit<LinkProps, 'href'> & { section: HomeSection }
const SectionLink: React.FC<SectionLinkProps> = ({ section, children, ...props }) => (
  <li className={styles['navigation-item']}>
    <Link href={`#${section}`} {...props}>
      <a className={styles['navigation-link']}>{children}</a>
    </Link>
  </li>
)

export default SectionLink
