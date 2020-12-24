import * as React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import colors from '../../theme/colors'

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

type Props1 = {
  color?: string
  children?: React.ReactNode
  size?: HeadingSizes
  weight?: HeadingWeights
  textAlign?: string
}

const useStyles = makeStyles({
  root: (props: Props1) => ({
    fontWeight: props.weight,
    color: props.color ? colors[props.color].main : 'black'
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
  color: 'customBlack'
}

export default Heading
