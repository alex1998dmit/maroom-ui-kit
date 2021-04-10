import * as React from 'react'
import DatePicker, {ReactDatePickerProps} from 'react-datepicker'
// import { Input } from '../../'
// import EndAdornment, { AdormentPositions } from '../EndAdorment/EndAdorment'
// import CalendarIcon from '../../icons/Calendar'
import { InputProps } from '../Input'

type Props = {
  name?: string
  label?: string
  inputProps?: InputProps
  error?: boolean
  errorMsg?: string
  defaultValue?: any
  fullWidth?: boolean
  value?: Date
  onChange?: (date: Date) => void
  dateFormat?: string
  dataPickerProps?: ReactDatePickerProps
}

const CalendarInput = (props: Props) => {
  const {
    name,
    label,
    inputProps,
    defaultValue,
    fullWidth,
    value,
    onChange,
    dateFormat,
    dataPickerProps,
    ...otherProps
  } = props
  console.log(props)
  const [selected, setSelected] = React.useState<Date>(new Date())
  const CustomInput = ({ value, onClick }: any) => (
    <Input
      {...otherProps}
      value={value}
      label={label}
      onClick={onClick}
      fullWidth
      inputProps={{
        ...inputProps,
        fullWidth: true,
        endAdornment: (
          <EndAdornment position={AdormentPositions.center}>
            <CalendarIcon />
          </EndAdornment>
        )
      }}
    />
  )

  return (
    // <DatePicker
    //   // {...dataPickerProps}
    //   selected={value}
    //   onChange={onChange}
    //   // customInput={<CustomInput />}
    //   // dateFormat={dateFormat}
    // />
    <DatePicker selected={selected} onChange={(date: Date) => setSelected(date)} />
  )
}

CalendarInput.defaultProps = {
  fullWidth: false,
  dateFormat: 'dd.MM.yyyy'
}

export default CalendarInput
