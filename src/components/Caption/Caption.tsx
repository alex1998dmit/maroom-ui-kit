import * as React from 'react'
import {
  Typography,
  TypographyProps as MaterialTypographyProps
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

export enum CaptionSizes {
  xs = 'text_xs',
  s = 'text_s',
  m = 'text_m'
}

export enum CaptionWeights {
  regular = 400,
  medium = 500,
  bold = 600
}

export enum CaptionTransform {
  regular = 'none',
  uppercase = 'uppercase',
  lowercase = 'lowercase'
}

type Props = {
  color?: string
  children?: React.ReactNode
  size?: CaptionSizes
  weight?: CaptionWeights
  textAlign?: string
  transform?: CaptionTransform
} & MaterialTypographyProps

const CaptionSizeStyles = {
  [CaptionSizes.xs]: {
    fontSize: 12,
    lineHeight: 14
  },
  [CaptionSizes.s]: {
    fontSize: 14,
    lineHeight: 18
  },
  [CaptionSizes.m]: {
    fontSize: 16,
    lineHeight: 24
  }
}

const useStyles = makeStyles(() => ({
  root: (props: Props) => ({
    fontSize: `${
      props.size
        ? CaptionSizeStyles[props.size].fontSize
        : CaptionSizeStyles[CaptionSizes.m]
    }px`,
    fontWeight: props.weight,
    textTransform: props.transform || 'none',
    color: 'black'
  })
}))

const Caption = (props: Props) => {
  const {
    children,
    size,
    weight,
    textAlign,
    transform,
    color,
    ...otherProps
  } = props
  const classes = useStyles({ size, weight, textAlign, transform, color })
  return (
    <Typography {...otherProps} classes={{ root: classes.root }}>
      {children}
    </Typography>
  )
}

Caption.defaultProps = {
  size: CaptionSizes.m,
  weight: CaptionWeights.regular,
  textAlign: 'inherit',
  color: 'customBlack',
  transform: CaptionTransform.regular
}

export default Caption
