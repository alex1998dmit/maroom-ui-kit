import * as React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Input } from '../../'
import { useAutocomplete } from '@material-ui/lab'
import colors from '../../theme/colors'

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    width: '100%'
  },
  options: {
    background: 'white',
    border: `1px solid ${colors.secondary.border}`,
    borderRadius: '12px',
    // position: 'absolute',
    marginTop: '8px',
    width: '100%',
    zIndex: 1500,
    overflow: 'auto',
    maxHeight: '142px',
    position: 'absolute',
    '& ul': {
      textDecoration: 'none',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      '& li': {
        textDecoration: 'none',
        padding: '0 16px 16px 16px',
        '&:first-child': {
          paddingTop: '16px'
        },
        '&:last-child': {
          // paddingBottom: 0
        }
      }
    }
  },
  optionsContainer: {
    overflow: 'hidden'
  }
}))

type Item = {
  [value: string]: any
}

type Props = {
  values: Array<Item>
  Option?: any
  [value: string]: any
  getOptionLabel: (item: any) => string
}

const AutocompleteInput = (props: Props) => {
  const classes = useStyles()
  const {
    values,
    Option,
    getOptionLabel,
    defaultValue,
    value,
    inputValue,
    ...otherProps
  } = props
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions
  } = useAutocomplete({
    options: values,
    getOptionLabel,
    debug: false,
    autoHighlight: true,
    defaultValue
  })
  return (
    <div className={classes.root}>
      <div {...getRootProps()}>
        <Input {...otherProps} inputProps={{ ...getInputProps() }} fullWidth />
      </div>
      {groupedOptions.length > 0 ? (
        <div {...getListboxProps()}>
          <div className={classes.options}>
            <div className={classes.optionsContainer}>
              <ul>
                {groupedOptions.map((option: any, index: number) => (
                  <li {...getOptionProps({ option, index })} key={index}>
                    <Option option={option} />
                  </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default AutocompleteInput
