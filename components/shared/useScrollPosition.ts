import { useRef, useEffect, RefObject, DependencyList } from 'react'

const isBrowser = typeof window !== 'undefined'

export type ScrollPosition = { x: number; y: number }

// https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj
const getScrollPosition = ({
  element,
  useWindow,
}: {
  element?: RefObject<HTMLElement>
  useWindow?: boolean
}): ScrollPosition => {
  if (!isBrowser) {
    return { x: 0, y: 0 }
  }
  const target = element?.current || document.body
  const position = target.getBoundingClientRect()
  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

export type ScrollPositionUpdate = {
  prevPos: ScrollPosition
  currPos: ScrollPosition
}

const useScrollPosition = (
  effect: (update: ScrollPositionUpdate) => void,
  deps?: DependencyList,
  element?: RefObject<HTMLElement>,
  useWindow?: boolean,
  debounceInterval?: number,
) => {
  const position = useRef(getScrollPosition({ useWindow }))

  let throttleTimeout: NodeJS.Timeout | null = null
  const callback = () => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  useEffect(() => {
    const handleScroll = () => {
      if (debounceInterval) {
        if (throttleTimeout == null) {
          throttleTimeout = setTimeout(callback, debounceInterval)
        }
      } else {
        callback()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, deps)
}

export default useScrollPosition
