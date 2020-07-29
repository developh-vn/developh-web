import { RefObject, useState, useLayoutEffect } from 'react'

const useHoveredStatus = <Component extends HTMLElement>(componentRef: RefObject<Component>) => {
  const [hovered, setHovered] = useState(false)
  useLayoutEffect(() => {
    const component = componentRef.current
    if (component === null) {
      return
    }
    const onMouseEnter = () => setHovered(true)
    const onMouseLeave = () => setHovered(false)
    component.addEventListener('mouseenter', onMouseEnter)
    component.addEventListener('mouseleave', onMouseLeave)
    return () => {
      component.removeEventListener('mouseenter', onMouseEnter)
      component.removeEventListener('mouseleave', onMouseLeave)
    }
  })
  return hovered
}

export default useHoveredStatus
