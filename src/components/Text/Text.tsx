import * as React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

export enum TextSizes {
  textSm = 'text_small',
  textMd = 'text_md',
  textLg = 'text_lg'
}

export enum TextWeights {
  bold = 600,
  normal = 500,
  medium = 400
}

type Props = {
  color?: string | undefined,
  children: React.ReactNode | undefined,
  size?: TextSizes | undefined,
  weight?: TextWeights,
  textAlign?: string | undefined
}

const fontSizes = {
  [TextSizes.textLg]: {
    fontSize: 18,
    lineHeight: 28
  },
  [TextSizes.textMd]: {
    fontSize: 14,
    lineHeight: 22
  },
  [TextSizes.textSm]: {
    fontSize: 13,
    lineHeight: 20
  },
}

const useStyles = makeStyles({
  root: (props: Props) => ({
    fontSize: `${props.size ?
      fontSizes[props.size].fontSize :
      fontSizes[TextSizes.textMd]}px`,
  })
})

const Text = (props: Props) => {
  const { children } = props
  const classes = useStyles(props)
  return (
    <Typography className={classes.root} >
      {children}
    </Typography>
  )
}

Text.defaultProps = {
  size: TextSizes.textMd
}

export default Text
