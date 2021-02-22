import * as React from 'react'
import ReactInputMask from 'react-input-mask'
import Input, { InputProps } from '../Input'

type Props = {
  InputProps: InputProps
  mask: string | Array<string>
}

const InputMask = (props: Props) => {
  const { InputProps, mask, ...other } = props

  return (
    <ReactInputMask mask={mask} {...other}>
      {() => <Input {...InputProps} />}
    </ReactInputMask>
  )
}

export default InputMask
