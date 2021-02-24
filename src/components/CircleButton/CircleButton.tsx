import * as React from 'react'
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/styles'
import colors from '../../theme/colors'
import { ButtonThemes } from 'maroom-ui-kit/core/Button'

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
  sizes?: CircleButtonSizes
} & IconButtonProps

const useStyles = makeStyles(() => ({
  // props: CircleButtonProps
  root: (props: CircleButtonProps) => ({
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
    }
  })
}))

const CircleButton = (props: CircleButtonProps) => {
  const { theme, size } = props
  const classes = useStyles({ theme, size })
  return (
    <IconButton
      {...props}
      classes={{
        root: classes.root
      }}
    >
      {props.children}
    </IconButton>
  )
}

CircleButton.defaultProps = {
  theme: 'brandPrimary'
}

export default CircleButton
