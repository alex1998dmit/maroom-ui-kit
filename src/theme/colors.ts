interface Color {
  main: string
  contrastText?: string
}

interface Colors {
  [value: string]: Color
}

const colors: Colors = {
  brandPrimary: {
    main: '#F57C00',
    contrastText: 'white'
  },
  gray400: {
    main: '#EAECEF',
    contrastText: '#7F8285'
  },
  gray300: {
    main: '#F1F2F4',
    contrastText: '#7F8285'
  },
  gray200: {
    main: '#FBFBFD',
    contrastText: '#7F8285'
  },
  customBlack: {
    main: '#191919'
  },
  medium: {
    main: '#7F8285'
  },
  redLight: {
    main: '#FCE6E6',
    contrastText: '#F57C00'
  },
  customRed: {
    main: '#EB5757',
  }
}

export default colors
