import * as React from 'react'
import { TextField as MaterialInput } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import colors from '../../theme/colors'
import ValidationError from '../ValidationError'

const useStyles = makeStyles(() => ({
  root: (props: InputProps) => ({
    backgroundColor: 'white',
    borderRadius: props.error ? '12px 12px 0 0' : '12px',
    background: 'white',
    '& .MuiFormLabel-root.Mui-focused': {
      border: 'none',
      color: colors.medium.main // or black
    },
    '& .MuiFilledInput-underline': {
      background: 'white'
    },
    '& .Mui-focused': {
      border: `1px solid ${colors.brandPrimary.main}`,
      background: 'white'
    }
  }),
  inputRoot: (props: InputProps) => ({
    background: 'white',
    border: `${props.error ? 1.5 : 1}px solid ${
      props.error ? colors.customRed.main : colors.gray400.main
    }`,
    borderRadius: props.error ? '12px 12px 0 0' : '12px'
  }),
  focusedInput: {
    background: 'white'
  },
  underline: {
    '&::before': {
      display: 'none'
    },
    '&::after': {
      display: 'none'
    }
  }
}))

export enum InputTypes {
  password = 'password',
  email = 'email',
  text = 'text'
}

type InputProps = {
  inputProps?: Object
  error?: boolean
}

const Input = (props: InputProps) => {
  const { inputProps, error } = props
  const classes = useStyles(props)
  return (
    <div>
      <MaterialInput
        {...props}
        classes={{
          root: classes.root
        }}
        variant='filled'
        fullWidth
        error={error}
        InputProps={{
          ...inputProps,
          classes: {
            root: classes.inputRoot,
            underline: classes.underline,
            focused: classes.focusedInput
          },
          autoComplete: 'off'
        }}
      />
      <ValidationError open={error}>Alert Message</ValidationError>
    </div>
  )
}

Input.defaultProps = {
  error: false
}

export default Input
