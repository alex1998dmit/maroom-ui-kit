import * as React from 'react'
import { makeStyles } from '@material-ui/styles'
import { ThemeInterface } from '../../'

export enum AdormentPositions {
  top = 'flex-start',
  center = 'center',
  bottom = 'flex-end'
}

type StyleProps = {
  position: AdormentPositions
}

const useStyles = makeStyles((theme: ThemeInterface) => ({
  root: (props: StyleProps) => ({
    height: '53px',
    display: 'flex',
    alignItems: props.position,
    padding: '12px 0',
    color: theme.colors.secondary.medium,
    '& p': {
      color: theme.colors.secondary.medium
    }
  })
}))

type Props = {
  children: React.ReactNode
  position?: AdormentPositions
}

const EndAdornment = (props: Props) => {
  const classes = useStyles({
    position: props.position || AdormentPositions.bottom
  })
  return <div className={classes.root}>{props.children}</div>
}

export default EndAdornment
