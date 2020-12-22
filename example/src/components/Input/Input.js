import * as React from 'react'
import { TextField as MaterialInput } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import colors from '../../theme/colors'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'white',
    borderRadius: '12px'
  },
  inputRoot: {
    background: 'white',
    border: `1px solid ${colors.gray400.main}`,
    borderRadius: '12px'
  },
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

const Input = (props) => {
  const { form, validationRules, inputProps, name, label } = props
  const classes = useStyles()
  return (
    <MaterialInput
      classes={{
        root: classes.root
      }}
      variant='filled'
      label={label}
      name={name}
      fullWidth
      InputProps={{
        ...inputProps,
        classes: {
          root: classes.inputRoot,
          underline: classes.underline,
          focused: classes.focusedInput
        },
        ref: form.register(validationRules)
      }}
    />
  )
}

Input.defaultProps = {
  validationRules: null,
  label: null
}

export default Input
