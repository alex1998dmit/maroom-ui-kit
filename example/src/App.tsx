import * as React from 'react'
import { Caption, CaptionWeights, DatePicker, Input, Button, ButtonThemes, AutocompleteInput, Switcher, theme, ButtonSizes, InputSelect, Heading, HeadingSizes, HeadingWeights, CaptionSizes, InputMask, CircleButton, CircleButtonSizes } from 'maroom-ui-kit'
import { Container, Grid } from '@material-ui/core'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import 'react-datepicker/dist/react-datepicker.css'
import { CircleButtonThemes } from './dist'

type Item = {
  value: string
}

const items: Array<Item> = [
  {
    value: 'Twenty One Pilots - Addiction with pen'
  },
  {
    value: 'Oasis - Wonderwall'
  },
  {
    value: 'Beatles - Yesterday'
  },
  {
    value: 'Beatles - Help'
  },
]

const Option = (props: any) => <div>{props.option.value}</div>

type SwitchOptionProps = {
  id: number
  label: string
  value: string
}

const SwitcherItems: Array<SwitchOptionProps> = [
  {
    id: 1,
    label: 'React',
    value: 'React'
  },
  {
    id: 2,
    label: 'Vue',
    value: 'Vue'
  },
  {
    id: 3,
    label: 'Angular',
    value: 'Angular'
  }
]

const SelectOptions = [
  {
    value: 'TOP',
    label: 'Twenty One Pilots'
  },
  {
    value: 'Green day',
    label: 'Green day'
  },
  {
    value: 'Beatles',
    label: 'Beatles'
  }
]

const appTheme = createMuiTheme({
  ...theme,
})


const App = () => {
  const [date, setDate] = React.useState<Date>(new Date())
  return (
    <ThemeProvider theme={appTheme}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Heading size={HeadingSizes.h1} weight={HeadingWeights.bold}>
              Съешь ещё этих мягких французских булок, да выпей же чаю
            </Heading>
            <Heading size={HeadingSizes.h2} weight={HeadingWeights.bold}>
              Съешь ещё этих мягких французских булок, да выпей же чаю
            </Heading>
            <Heading size={HeadingSizes.h3} weight={HeadingWeights.normal}>
              Съешь ещё этих мягких французских булок, да выпей же чаю
            </Heading>
            <Heading size={HeadingSizes.h4} weight={HeadingWeights.medium}>
              Съешь ещё этих мягких французских булок, да выпей же чаю
            </Heading>
          </Grid>
          <Grid item xs={12}>
            <Caption size={CaptionSizes.m} weight={CaptionWeights.medium}>
              Съешь ещё этих мягких французских булок, да выпей же чаю
            </Caption>
            <Caption size={CaptionSizes.s} weight={CaptionWeights.medium}>
              Съешь ещё этих мягких французских булок, да выпей же чаю
            </Caption>
            <Caption size={CaptionSizes.xs} weight={CaptionWeights.medium}>
              Съешь ещё этих мягких французских булок, да выпей же чаю
            </Caption>
          </Grid>
          <Grid item xs={3}>
            <Input label='test' />
          </Grid>
          <Grid item xs={3}>
            <InputMask mask='+7(999)-999-99-99' label='Enter phone number' />
          </Grid>
          <Grid item xs={3} container justify='space-between' alignItems='center'>
            <CircleButton size={CircleButtonSizes.md}>
              +
            </CircleButton>
            <CircleButton size={CircleButtonSizes.lg}>
              +
            </CircleButton>
            <CircleButton size={CircleButtonSizes.md} theme={CircleButtonThemes.light}>
              +
            </CircleButton>
            <CircleButton size={CircleButtonSizes.lg} theme={CircleButtonThemes.light}>
              +
            </CircleButton>
          </Grid>
          <Grid item xs={12}>
            <DatePicker value={date} onChange={setDate} label='Select date' />
          </Grid>
          <Grid item xs={5}>
            <InputSelect values={SelectOptions} label='Select group' />
          </Grid>
          <Grid item xs={3} container justify='center' alignContent='center'>
            <Button
              theme={ButtonThemes.brandLight}
              size={ButtonSizes.sm}
            >
              Hello 1
            </Button>
            <Button
              theme={ButtonThemes.light}
              size={ButtonSizes.sm}
            >
              Hello 2
            </Button>
            <Button
              theme={ButtonThemes.white}
              size={ButtonSizes.sm}
            >
              Hello 3
            </Button>
          </Grid>
          <Grid item xs={3} container justify='center' alignContent='center'>
            <Button
              theme={ButtonThemes.brandLight}
              size={ButtonSizes.md}
            >
              Hello 1
            </Button>
            <Button
              theme={ButtonThemes.light}
              size={ButtonSizes.md}
            >
              Hello 2
            </Button>
            <Button
              theme={ButtonThemes.white}
              size={ButtonSizes.md}
            >
              Hello 3
            </Button>
          </Grid>
          <Grid item xs={3} container justify='center' alignContent='center'>
            <Button
              theme={ButtonThemes.brandLight}
            >
              Hello 1
            </Button>
            <Button
              theme={ButtonThemes.light}
            >
              Hello 2
            </Button>
            <Button
              theme={ButtonThemes.white}
            >
              Hello 3
            </Button>
          </Grid>
          <Grid item xs={6}>
            <AutocompleteInput
              values={items}
              getOptionLabel={(item: Item) => item.value}
              Option={Option}
              label='Music'
            />
          </Grid>
          <Grid item xs={6}>
            <Switcher<SwitchOptionProps>
              options={SwitcherItems}
              label='Select language'
              onChange={(item: SwitchOptionProps, index: number) => console.log(item, index)}
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>   
  )
}

export default App
