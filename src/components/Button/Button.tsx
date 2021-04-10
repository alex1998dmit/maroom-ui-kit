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

export enum ButtonSizes {
  sm = 'small',
  md = 'medium',
  lg = 'large'
}

const ButtonSizesParams = {
  [ButtonSizes.lg]: { height: '48px', fontSize: '14px' },
  [ButtonSizes.md]: { height: '40px', fontSize: '14px' },
  [ButtonSizes.sm]: { height: '32px', fontSize: '12px' }
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
    height: ButtonSizesParams[props.size || ButtonSizes.lg].height,
    fontSize: ButtonSizesParams[props.size || ButtonSizes.lg].fontSize,
    lineHeight: '14px',
    borderRadius: '66px',
    border: `1px solid ${
      ColorsAndContrasts[props.theme || ButtonThemes.brandPrimary].border
    }`,
    // padding: '0 16px',
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
  startIcon: {
    // padding: '10px'
  }
}))

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
  const { startIcon, endIcon, disabled, fullWidth, className } = props
  const classes = useStyles(props)
  return (
    <ButtonMaterial
      {...props}
      fullWidth={fullWidth}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      variant='contained'
      classes={{
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
  fullWidth: false,
  size: ButtonSizes.lg
}

export default Button
