import * as React from 'react'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/styles'
import colors from '../../theme/colors'
import { ButtonThemes } from 'maroom-ui-kit/core/Button'
import cn from 'classnames'

export enum CircleButtonThemes {
  brandPrimary = 'brandPrimary',
  brandLight = 'brandLight',
  white = 'customWhite',
  light = 'light'
}

export enum CircleButtonSizes {
  lg = 'lg',
  md = 'sm'
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

const ButtonSizes = {
  [CircleButtonSizes.lg]: {
    width: '48px',
    height: '48px'
  },
  [CircleButtonSizes.md]: {
    width: '32px',
    height: '32px'
  }
}

type CircleButtonProps = {
  theme?: string
  children?: React.ReactNode
  size?: CircleButtonSizes
  onClick?: () => void
  className?: string
}

type stylesProps = {
  theme?: string
  size?: CircleButtonSizes
}

const useStyles = makeStyles(() => ({
  // props: CircleButtonProps
  root: (props: stylesProps) => ({
    padding: 0,
    backgroundColor:
      ColorsAndContrasts[props.theme || ButtonThemes.brandPrimary].main,
    width: ButtonSizes[props.size || CircleButtonSizes.md].width,
    height: ButtonSizes[props.size || CircleButtonSizes.md].height,
    border: `1px solid ${
      ColorsAndContrasts[props.theme || ButtonThemes.brandPrimary].border
    }`,
    color:
      ColorsAndContrasts[props.theme || ButtonThemes.brandPrimary].contrast,
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
      backgroundColor:
        ColorsAndContrasts[props.theme || ButtonThemes.brandPrimary].main,
      boxShadow: '0px 5px 16px rgba(0, 0, 0, 0.1)'
    }
  })
}))

const CircleButton = (props: CircleButtonProps) => {
  const { theme, size, onClick, className } = props
  const classes = useStyles({ theme, size })
  return (
    <IconButton onClick={onClick} className={cn(classes.root, className)}>
      {props.children}
    </IconButton>
  )
}

CircleButton.defaultProps = {
  theme: CircleButtonThemes.brandPrimary
}

export default CircleButton
