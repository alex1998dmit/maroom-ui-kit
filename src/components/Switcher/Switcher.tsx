import * as React from "react"
import {makeStyles} from "@material-ui/styles";
import classNames from "classnames";
import CircleCheckInput from "../../icons/CircleCheckInput";
import Checkbox from '@material-ui/core/Checkbox';
import CircleCheckedInput from "../../icons/CircleCheckedInput";
import { ThemeInterface } from "src/types/theme";
import Caption, { CaptionSizes, CaptionWeights } from "../Caption";

const useStyles = makeStyles((theme: ThemeInterface) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    border: `1px solid ${theme.palette.secondary.border}`,
    borderRadius: '66px',
    alignItems: 'center',
    padding: '0 4px 0 4px'
  },
  optionTitle: {
    color: theme.palette.secondary.medium
  },
  optionTitleActive: {
    color: theme.palette.primary.main
  },
  label: {
    paddingLeft: '16px',
    width: '100%'
  },
  options: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '4px 0',
    width: '100%'
  },
  option: {
    display: 'flex',
    height: '32px',
    alignItems: 'center',
    padding: '7px 12px 7px 0',
    '& input': {
      marginRight: '12px'
    }
  },
  active: {
    background: theme.palette.primary.light,
    borderRadius: '66px'
  },
  checkbox: {
    '& input': {
      borderRadius: '66px',
    }
  }
}))

interface CheckBoxProps<OptionProps> {
  index: number
  option: OptionProps,
  name?: string,
  className?: string,
  checked?: boolean,
  onChange: (option: OptionProps, index: number) => void,
  label: string,
}

function Option<OptionProps>(props: CheckBoxProps<OptionProps>) {
  const classes = useStyles()
  const { checked, name, onChange, label, option, index } = props
  const handleOnChange = () => {
    onChange(option, index)
  }
  return (
    <div className={classNames(classes.option, checked && classes.active)}>
      <Checkbox
        className={classes.checkbox}
        name={name}
        icon={<CircleCheckInput />}
        checkedIcon={<CircleCheckedInput />}
        checked={checked}
        onChange={handleOnChange}
      />
      <Caption
        size={CaptionSizes.s}
        weight={CaptionWeights.medium}
        className={classNames(classes.optionTitle, checked && classes.optionTitleActive)}
      >
        {label}
      </Caption>
    </div>
  )
}

interface Props<OptionProps> {
    options: Array<OptionProps & { label: string }>,
    onChange: (item: OptionProps, index: number) => void,
    label?: string
}

function Switcher<OptionProps>(props: Props<OptionProps>) {
  const [activeOption, setActiveOption] = React.useState<number>(0)
  const classes = useStyles()
  const { label, options, onChange } = props
  const handleChange = (item: OptionProps, index: number) => {
    onChange(item, index)
    setActiveOption(index)
  }
  return (
    <div className={classes.root}>
      {label && (
        <div className={classes.label}>
          <Caption size={CaptionSizes.s} weight={CaptionWeights.medium}>
            {label}
          </Caption>
      </div>
      )}
      <div className={classes.options}>
        {options.map((option, index: number) => (
          <Option<OptionProps>
            key={index}
            index={index}
            option={option}
            onChange={handleChange}
            label={option.label}
            checked={activeOption === index}
          />
        ))}
      </div>
    </div>
  )
}

export default Switcher
