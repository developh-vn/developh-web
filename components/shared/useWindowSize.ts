import { useLayoutEffect, useState } from 'react'

const isBrowser = typeof window !== 'undefined'

type WindowSize = {
  width: number
  height: number
}
const getWindowSize = (): WindowSize => {
  if (!isBrowser) {
    return { width: 0, height: 0 }
  }
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize())
  useLayoutEffect(() => {
    const resizeObserver = () => {
      setWindowSize(getWindowSize())
    }
    window.addEventListener('resize', resizeObserver)
    return () => window.removeEventListener('resize', resizeObserver)
  })
  return windowSize
}

export default useWindowSize
