import * as React from 'react'
import { makeStyles } from '@material-ui/styles'
import colors from '../../theme/colors'
import CloseInCircleIcon from '../../icons/CloseInCircleIcon'
import { Typography } from '@material-ui/core'

type Props = {
  children: React.ReactNode
  open: boolean
}

const useStyles = makeStyles(() => ({
  root: (props: Props) => ({
    height: '32px',
    display: props.open ? 'flex' : 'none',
    alignItems: 'center',
    background: colors.error.light,
    borderRadius: '0 0 12px 12px',
    boxShadow:
      '0px 0px 1px rgba(10, 31, 68, 0.08), 0px 3px 4px rgba(10, 31, 68, 0.1)',
    paddingLeft: '18px'
  }),
  content: {
    fontSize: '12px',
    lineHeight: '14px',
    color: colors.error.main,
    paddingLeft: '10px'
  }
}))

const ValidationError = (props: Props) => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <div>
        <CloseInCircleIcon />
      </div>
      <div>
        <Typography className={classes.content}>
          {props.children}
        </Typography>
      </div>
    </div>
  )
}

ValidationError.defaultProps = {
  open: false
}

export default ValidationError
