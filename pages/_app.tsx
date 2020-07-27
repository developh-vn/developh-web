import { AppProps } from 'next/app'
import '../node_modules/normalize.css/normalize.css'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
