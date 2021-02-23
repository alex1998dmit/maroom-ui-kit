import { ColorsInterface } from '../theme/colors'

interface Heading {
  fontSize: string
  lineHeight?: string
}

export interface Typography {
  fontFamily: string
  [prop: string]: Heading | string
}

export interface ThemeInterface {
  palette: ColorsInterface
  typography: Typography
}
