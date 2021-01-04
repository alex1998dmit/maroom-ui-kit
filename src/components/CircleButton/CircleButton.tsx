import * as React from 'react'
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/styles'
import colors from '../../theme/colors'

type CircleButtonProps = {
  theme: string
  children?: React.ReactNode
} & IconButtonProps

const useStyles = makeStyles(() => ({
  root: (props: CircleButtonProps) => ({
    backgroundColor: colors[props.theme].main ?? colors.buttonPrimary.main,
    width: '64px',
    height: '64px'
  })
}))

const CircleButton = (props: CircleButtonProps) => {
  const { theme } = props
  const classes = useStyles({ theme })
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
