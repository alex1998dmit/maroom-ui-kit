interface Color {
  main: string
}

export interface Colors {
  [value: string]: Color
}

interface Heading {
  fontSize: string
  lineHeight?: string
}

export interface Typography {
  fontFamily: string
  [prop: string]: Heading | string
}

export interface ThemeInterface {
  colors: Colors
  typography: Typography
}
