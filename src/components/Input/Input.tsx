import * as React from 'react'
import { TextField as MaterialInput } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import colors from '../../theme/colors'
import ValidationError from '../ValidationError'
import { RefObject } from 'react'

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

export enum inputTypes {
  password = 'password',
  email = 'email',
  text = 'text'
}

type InputProps = {
  inputProps?: Object
  name?: string
  label: string
  type: inputTypes
  error?: boolean
  inputRef?: RefObject<any>
}

const Input = (props: InputProps) => {
  const { name, label, inputProps, type, error, inputRef } = props
  const classes = useStyles(props)
  return (
    <div>
      <MaterialInput
        inputRef={inputRef}
        classes={{
          root: classes.root
        }}
        variant='filled'
        label={label}
        name={name}
        fullWidth
        type={type}
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
  validationRules: null,
  label: 'default label - please provide',
  type: inputTypes.text,
  error: false
}

export default Input
