declare module 'react-anchor-link-smooth-scroll' {
  type NumberFunction = () => number
  export type AnchorLinkProps = {
    href?: string
    offset?: number | NumberFunction | string
  }
  const AnchorLink: React.FC<AnchorLinkProps>
  export = AnchorLink
}
