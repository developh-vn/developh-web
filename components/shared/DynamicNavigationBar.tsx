import dynamic from 'next/dynamic'

const DynamicNavigationBar = dynamic(() => import('./NavigationBar'), { ssr: false })

export default () => <DynamicNavigationBar />
