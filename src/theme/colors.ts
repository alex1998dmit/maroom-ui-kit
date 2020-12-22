interface Color {
  main: string
}

interface Colors {
  [value: string]: Color
}

const colors: Colors = {
  brandPrimary: {
    main: '#F57C00'
  },
  gray400: {
    main: '#EAECEF'
  },
  gray300: {
    main: '#F1F2F4'
  },
  gray200: {
    main: '#FBFBFD'
  },
  customBlack: {
    main: '#191919'
  },
  medium: {
    main: '#7F8285'
  },
  redLight: {
    main: '#FCE6E6'
  },
  customRed: {
    main: '#EB5757'
  }
}

export default colors
