import * as React from 'react'
import { TextField as MaterialInput } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ValidationError from '../ValidationError'
import { TextFieldProps } from '@material-ui/core/TextField'
import colors from '../../theme/colors'

const useStyles: any = makeStyles(() => ({
  root: (props: InputProps) => ({
    width: props.fullWidth ? '100%' : 'inherit',
    backgroundColor: 'white',
    borderRadius: props.error ? '12px 12px 0 0' : '12px',
    background: 'white',
    '& .MuiFormLabel-root.Mui-focused': {
      border: 'none',
      color: colors.primary.main // or black
    },
    '& .MuiFilledInput-underline': {
      background: 'white'
    },
    '& .Mui-focused': {
      border: `1px solid ${colors.primary.main}`,
      background: 'white'
    }
  }),
  inputRoot: (props: InputProps) => ({
    background: 'white',
    border: `${props.error ? 1.5 : 1}px solid ${
      props.error ? colors.error.main : colors.secondary.border
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

type CustomInputProps = {
  error?: boolean
  errorMsg?: string
  inputProps?: any
  name?: string
  label?: string
  fullWidth?: boolean
}

export type InputProps = TextFieldProps & CustomInputProps

const Input = (props: InputProps) => {
  const { error, errorMsg, inputProps } = props
  const classes = useStyles(props)
  return (
    <div>
      <MaterialInput
        {...props}
        classes={{
          root: classes.root
        }}
        variant='filled'
        fullWidth={false}
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
      <ValidationError open={error}>{errorMsg}</ValidationError>
    </div>
  )
}

Input.defaultProps = {
  error: false,
  fullWidth: false
}

export default Input
