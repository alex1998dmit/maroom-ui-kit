interface ColorsInterface {
  primary: {
    pressed: string
    hover: string
    main: string
    brand: string
    background: string
    light: string
  }
  secondary: {
    main: string
    hover: string
    pressed: string
    medium: string
    light: string
    light1: string
    light2: string
    light3: string
    lightest: string
    border: string
    white: string
  }
  error: {
    light: string
    main: string
  }
}

const colors: ColorsInterface = {
  primary: {
    pressed: '#D76D00',
    hover: '#EA7600',
    main: '#F57C00',
    brand: '#F57C00',
    background: '#FEF7F0',
    light: '#FDEBD9'
  },
  secondary: {
    main: '#191919',
    hover: '#282929',
    pressed: '#303232',
    medium: '#474747',
    light: '#949494',
    light1: '#FBFBFD',
    light2: '#F7F8F9',
    light3: '#F2F3F5',
    lightest: '#BFBFBF',
    border: '#EAECEF',
    white: '#FFFFFF'
  },
  error: {
    light: '#FCE6E6',
    main: '#EB5757'
  }
}

export { ColorsInterface }
export default colors
