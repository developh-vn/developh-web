import Link, { LinkProps } from 'next/link'
import HomeSection from 'models/home/HomeSection'

type SectionLinkProps = Omit<LinkProps, 'href'> & { section: HomeSection }
const SectionLink: React.FC<SectionLinkProps> = ({ section, children, ...props }) => (
  <li>
    <Link href={`#${section}`} {...props}>
      <a>{children}</a>
    </Link>
  </li>
)

export default SectionLink
