import tailwindConfig, { ScreenSize } from 'tailwind.config.js'
import useWindowSize from './useWindowSize'
import { useState, useLayoutEffect } from 'react'

export type LayoutBreakpoint = ScreenSize

type BreakpointConfig = { screenSize: ScreenSize; position: number }
const BREAKPOINT_CONFIGS = Object.entries(tailwindConfig.theme.screens)
  .map(
    ([key, value]): BreakpointConfig => ({
      screenSize: key as ScreenSize,
      position: parseInt(value.replace(/px$/g, '')),
    }),
  )
  .sort((a, b) => a.position - b.position)

export const compareBreakpoints = (a: LayoutBreakpoint, b: LayoutBreakpoint) => {
  let aIndex = -1
  let bIndex = -1
  for (let index = 0; index < BREAKPOINT_CONFIGS.length; ++index) {
    if (BREAKPOINT_CONFIGS[index].screenSize === a) {
      aIndex = index
    }
    if (BREAKPOINT_CONFIGS[index].screenSize === b) {
      bIndex = index
    }
    if (aIndex > -1 && bIndex > -1) {
      break
    }
  }
  return aIndex - bIndex
}

const inferBreakpoint = (windowWidth: number): LayoutBreakpoint => {
  const result =
    BREAKPOINT_CONFIGS.find(({ position }, index, configs) => {
      const lowerBound = index === 0 ? 0 : configs[index - 1].position
      const upperBound = index + 1 >= configs.length ? Infinity : position
      return windowWidth > lowerBound && windowWidth <= upperBound
    })?.screenSize || BREAKPOINT_CONFIGS[0].screenSize
  return result
}

const useLayoutBreakpoint = () => {
  const { width } = useWindowSize()
  const [breakpoint, setBreakpoint] = useState(inferBreakpoint(width))
  useLayoutEffect(() => {
    const inferredBreakpoint = inferBreakpoint(width)
    if (inferredBreakpoint !== breakpoint) {
      setBreakpoint(inferredBreakpoint)
    }
  }, [width])
  return breakpoint
}

export default useLayoutBreakpoint
