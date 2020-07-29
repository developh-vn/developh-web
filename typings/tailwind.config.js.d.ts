declare module 'tailwind.config.js' {
  export type ScreenSize = 'sm' | 'md' | 'lg' | 'xl'
  export type ScreenSizeConfig = Record<ScreenSize, string>
  export type TailwindTheme = {
    screens: ScreenSizeConfig
  }
  export type TailwindConfig = {
    theme: TailwindTheme
  }

  const TailwindConfigObject: TailwindConfig
  export = TailwindConfigObject
}
