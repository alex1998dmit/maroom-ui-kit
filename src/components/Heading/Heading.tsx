import * as React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

export enum HeadingSizes {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5'
}

export enum HeadingWeights {
  bold = 600,
  normal = 500,
  medium = 400
}

export enum HeadingTransforms {
  regular= 'none',
  uppercase = 'uppercase',
  lowercase = 'lowercase'
}

type Props1 = {
  color?: string
  children?: React.ReactNode
  size?: HeadingSizes
  weight?: HeadingWeights
  textAlign?: string
  transform?: HeadingTransforms
}

const useStyles = makeStyles({
  root: (props: Props1) => ({
    fontWeight: props.weight,
    color: 'black',
    textTransform: props.transform || 'none'
  })
})

const Heading = (props: Props1) => {
  const { size, children } = props
  const classes = useStyles(props)
  return (
    <Typography variant={size} className={classes.root}>
      {children}
    </Typography>
  )
}

Heading.defaultProps = {
  size: HeadingSizes.h2,
  color: 'customBlack',
  transform: HeadingTransforms.regular
}

export default Heading
