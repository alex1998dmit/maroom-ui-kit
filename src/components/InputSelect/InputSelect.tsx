import * as React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Input, { InputProps } from '../Input'

export type MenuItemType = {
  value: number | string
  label: string | number
  selected?: boolean
}

type Props = {
  values: Array<MenuItemType>
} & InputProps

function InputSelect(props: Props) {
  const { values, ...inputProps } = props
  return (
    <Input {...inputProps} select>
      {values.map((item: MenuItemType, index: number) => (
        <MenuItem key={index} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Input>
  )
}

export default InputSelect
