import Head from 'next/head'
import Footer from 'components/shared/Footer'

type Props = {
  title?: string
}

const Layout: React.FC<Props> = (props) => {
  const { title = 'Developh Vietnam', children } = props
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
