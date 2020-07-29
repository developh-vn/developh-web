import dynamic from 'next/dynamic'
import StaticNavigationBar from './StaticNavigationBar'

const DynamicNavigationBar = dynamic(() => import('./NavigationBar'), {
  ssr: false,
  loading: () => <StaticNavigationBar />,
})

export default () => <DynamicNavigationBar />
