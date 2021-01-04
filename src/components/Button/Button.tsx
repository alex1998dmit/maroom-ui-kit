import * as React from 'react'
import { Button as ButtonMaterial } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import colors, { Colors } from '../../theme/colors'
import { ButtonProps as MaterialButtonProps } from '@material-ui/core/Button'

const useStyles = makeStyles(() => ({
  root: (props: ButtonProps) => ({
    backgroundColor: colors[props.theme].main ?? colors.buttonPrimary.main,
    background: 'white',
    height: '40px',
    fontSize: '14x',
    lineHeight: '14px',
    borderRadius: '66px',
    color:
      colors[props.theme].contrastText ?? colors.buttonPrimary.contrastText,
    textTransform: 'none',
    boxShadow: 'none',
    '& svg': {
      '& path': {
        fill:
          colors[props.theme].contrastText ?? colors.buttonPrimary.contrastText
      }
    },
    '&:hover': {
      backgroundColor: colors[props.theme].hover ?? colors.buttonPrimary.hover,
      color:
        colors[props.theme].hoverContrastText ??
        colors.buttonPrimary.hoverContrastText,
      '& svg': {
        '& path': {
          fill:
            colors[props.theme].hoverContrastText ??
            colors.buttonPrimary.hoverContrastText
        }
      }
    },
    '&:active': {
      backgroundColor:
        colors[props.theme].pressed ??
        colors.buttonPrimary.pressed,
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

export enum ButtonThemes {
  brandPrimary = 'brandPrimary',
  brandLight = 'brandLight',
  white = 'customWhite'
}

type ButtonProps = {
  size?: ButtonSizes
  theme: ButtonThemes
  children?: React.ReactNode
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  disabled?: boolean
  fullWidth?: boolean
  className?: string
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
  fullWidth: true,
  theme: Colors.brandPrimary
}

export default Button
