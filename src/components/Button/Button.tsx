import * as React from 'react'
import { Button as ButtonMaterial} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import colors from '../../theme/colors'

const useStyles = makeStyles(() => ({
  root: (props: ButtonProps) => ({
    backgroundColor: colors[props.theme].main ?? colors.buttonPrimary.main,
    background: 'white',
    height: '40px',
    fontSize: '14x',
    lineHeight: '14px',
    borderRadius: '66px',
    color: colors[props.theme].contrastText ?? colors.buttonPrimary.contrastText,
    textTransform: 'none',
    boxShadow: 'none',
    '& svg': {
      '& path': {
        fill: colors[props.theme].contrastText ?? colors.buttonPrimary.contrastText,
      }
    },
    '&:hover': {
      backgroundColor: colors[props.theme].contrastText ?? colors.buttonPrimary.contrastText,
      color: colors[props.theme].main ?? colors.buttonPrimary.main,
      '& svg': {
        '& path': {
          fill: colors[props.theme].main ?? colors.buttonPrimary.main,
        }
      },
    },
    '&:active': {
      backgroundColor: colors.brandPrimary.main,
      boxShadow: '0px 5px 16px rgba(0, 0, 0, 0.1)'
    },
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
  gray400 = 'gray400',
  redLight = 'redLight'
}

type ButtonProps = {
  size?: ButtonSizes,
  theme: string,
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?:  React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { size, theme, startIcon, endIcon, disabled, fullWidth, className } = props
  const classes = useStyles(props)
  return (
    <ButtonMaterial
      size={size}
      fullWidth={fullWidth}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      variant={'contained'}
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
  theme: 'brandPrimary'
}

export default Button
