import * as React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/styles'
import { Input, ThemeInterface } from '../../'

export type MenuItem = {
  value: number | string
  label: string | number
  selected?: boolean
}

const useStyles = makeStyles((theme: ThemeInterface) => ({
  root: {}
}))

type Props = {
  values: Array<>
}

const InputSelect = (props: any) => {
  const { values, ...inputProps } = props
  return (
    <Input {...inputProps} select>
      {values.map((item: MenuItem, index: number) => (
        <MenuItem key={index} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Input>
  )
}

export default InputSelect
