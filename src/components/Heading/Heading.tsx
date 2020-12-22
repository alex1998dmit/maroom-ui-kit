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
  medium = 400,
}

type Props1 = {
  color?: string | undefined,
  children: React.ReactNode | undefined,
  size?: HeadingSizes,
  weight?: HeadingWeights,
  textAlign?: string | undefined
}

const useStyles = makeStyles({
  root: (props: Props1) => ({
    fontWeight: props.weight
  })
})

const Heading = (props: Props1) => {
  const { size, children } = props;
  const classes = useStyles(props)
  return (
    <Typography variant={size} className={classes.root} >
      {children}
    </Typography>
  )
}

export default Heading
