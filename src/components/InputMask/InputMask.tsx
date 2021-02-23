import * as React from 'react'
import ReactInputMask, {Props} from 'react-input-mask'
import Input, { InputProps } from '../Input'

type InputMaskProps = {
  inputProps?: InputProps
  label?: string
  mask: string | Array<string>
} & Props

const InputMask = (props: InputMaskProps) => {
  const { inputProps, mask, label, ...other } = props

  return (
    <ReactInputMask mask={mask} {...other}>
      {() => <Input {...inputProps} label={label} />}
    </ReactInputMask>
  )
}

export default InputMask
