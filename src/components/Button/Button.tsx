import * as React from 'react'
import { Button as ButtonMaterial } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { ButtonProps as MaterialButtonProps } from '@material-ui/core/Button'
import colors from '../../theme/colors'

export enum ButtonThemes {
  brandPrimary = 'brandPrimary',
  brandLight = 'brandLight',
  white = 'customWhite',
  light = 'light'
}

const ColorsAndContrasts = {
  [ButtonThemes.brandPrimary]: {
    main: colors.primary.main,
    border: 'transparent',
    contrast: colors.secondary.white,
    pressed: colors.primary.pressed
  },
  [ButtonThemes.brandLight]: {
    main: colors.primary.light,
    border: 'transparent',
    contrast: colors.primary.brand,
    pressed: colors.primary.light
  },
  [ButtonThemes.white]: {
    main: '#FFFFFF',
    border: colors.secondary.border,
    contrast: '#DADADA',
    pressed: '#FFFFFF'
  },
  [ButtonThemes.light]: {
    main: colors.secondary.light3,
    border: 'transparent',
    contrast: colors.secondary.medium,
    pressed: colors.secondary.light3
  }
}

const useStyles = makeStyles(() => ({
  // props: ButtonProps
  root: (props: ButtonProps) => ({
    backgroundColor:
      ColorsAndContrasts[props.theme || ButtonThemes.brandPrimary].main,
    height: '40px',
    fontSize: '14x',
    lineHeight: '14px',
    borderRadius: '66px',
    border: `1px solid ${
      ColorsAndContrasts[props.theme || ButtonThemes.brandPrimary].border
    }`,
    color:
      ColorsAndContrasts[props.theme || ButtonThemes.brandPrimary].contrast,
    textTransform: 'none',
    boxShadow: 'none',
    '& svg': {
      '& path': {
        fill:
          ColorsAndContrasts[props.theme || ButtonThemes.brandPrimary].contrast
      }
    },
    '&:hover': {
      backgroundColor:
        ColorsAndContrasts[props.theme || ButtonThemes.brandPrimary].main,
      color:
        ColorsAndContrasts[props.theme || ButtonThemes.brandPrimary].contrast,
      boxShadow: 'none',
      '& svg': {
        '& path': {
          fill:
            ColorsAndContrasts[props.theme || ButtonThemes.brandPrimary]
              .contrast
        }
      }
    },
    '&:active': {
      backgroundColor: ColorsAndContrasts[props.theme || ButtonThemes.brandPrimary].main,
      boxShadow: '0px 5px 16px rgba(0, 0, 0, 0.1)'
    }
  }),
  sizeSmall: {
    height: '32px !important',
    fontSize: '12px !important',
    lineHeight: '14px !important'
  },
  sizeLarge: {
    height: '48px !important',
    fontSize: '12px !important',
    lineHeight: '14px !important'
  },
  startIcon: {
    // padding: '10px'
  }
}))

export enum ButtonSizes {
  sm = 'small',
  lg = 'large'
}

type ButtonProps = {
  size?: ButtonSizes
  children?: React.ReactNode
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  disabled?: boolean
  fullWidth?: boolean
  className?: string
  theme?: ButtonThemes
} & MaterialButtonProps

const Button = (props: ButtonProps) => {
  const { size, startIcon, endIcon, disabled, fullWidth, className } = props
  const classes = useStyles(props)
  return (
    <ButtonMaterial
      {...props}
      size={size}
      fullWidth={fullWidth}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      variant='contained'
      classes={{
        sizeSmall: classes.sizeSmall,
        sizeLarge: classes.sizeLarge,
        root: classes.root,
        startIcon: classes.startIcon
      }}
      className={className}
    >
      {props.children}
    </ButtonMaterial>
  )
}

Button.defaultProps = {
  disabled: false,
  fullWidth: true
}

export default Button
