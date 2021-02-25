import React from 'react'

import {
  AutocompleteInput,
  Button,
  ButtonThemes,
  Caption,
  CaptionWeights,
  CircleButton,
  Heading,
  HeadingSizes,
  Input,
  InputMask,
  InputSelect
} from './dist'
import {Container, Grid} from "@material-ui/core";
import { CircleButtonSizes, CircleButtonThemes } from "./dist"

const App = () => {
  console.log(CircleButtonSizes)
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Heading size={HeadingSizes.h1}>
            Some text
          </Heading>
          <Heading size={HeadingSizes.h2}>
            Some text
          </Heading>
          <Heading size={HeadingSizes.h3}>
            Some text
          </Heading>
          <Heading size={HeadingSizes.h4}>
            Some text
          </Heading>
        </Grid>
        <Grid item xs={12}>
          <Caption weight={CaptionWeights.bold}>
            Caption text
          </Caption>
          <Caption weight={CaptionWeights.medium}>
            Caption text
          </Caption>
          <Caption weight={CaptionWeights.regular}>
            Caption text
          </Caption>
        </Grid>
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={3}>
            <Button>
              Click me
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button theme={ButtonThemes.light}>
              Click me
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button theme={ButtonThemes.white}>
              Click me
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button theme={ButtonThemes.brandLight}>
              Click me
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={1}>
            <CircleButton>
              +
            </CircleButton>
          </Grid>
          <Grid item xs={1}>

          </Grid>
          <Grid item xs={1}>
            <CircleButton theme={CircleButtonThemes.brandLight}>
              +
            </CircleButton>
          </Grid>
          <Grid item xs={1}>
            <CircleButton
              size={CircleButtonSizes.lg}
              theme={CircleButtonThemes.brandLight}
            >
              +
            </CircleButton>
          </Grid>
          <Grid item xs={1}>
            <CircleButton theme={CircleButtonThemes.brandLight}>
              +
            </CircleButton>
          </Grid>
          <Grid item xs={1}>
            <CircleButton size={CircleButtonSizes.lg} theme={CircleButtonThemes.white}>
              +
            </CircleButton>
          </Grid>
          <Grid item xs={1}>
            <CircleButton theme={CircleButtonThemes.white}>
              +
            </CircleButton>
          </Grid>
          <Grid item xs={1}>
            <CircleButton size={CircleButtonSizes.lg} theme={CircleButtonThemes.white}>
              +
            </CircleButton>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Input label={'Enter your name'} />
        </Grid>
        <Grid item xs={4}>
          <AutocompleteInput
            values={[
              {
                value: '1',
                label: 'Twenty one pilots - Stressed out'
              },
              {
                value: '2',
                label: 'Beatles - Yesterday'
              },
              {
                value: '3',
                label: 'Green day - Boulder of broken dreams'
              },
            ]}
            label={'Select song'}
            getOptionLabel={(item: any) => item.title}
            Option={(props: any) => <div>{props.option?.title || props.option?.value}</div>}
          />
        </Grid>
        <Grid item xs={4}>
          <InputMask mask={'+9999999'} label={'phone'} />
        </Grid>
        <Grid item xs={4}>
          {/*<DatePicker onChange={() => console.log()} />*/}
        </Grid>
        <Grid item xs={4}>
            <InputSelect
              label={'Select song'}
              values={[
                {
                  value: '1',
                  label: 'Twenty one pilots - Stressed out'
                },
                {
                  value: '2',
                  label: 'Beatles - Yesterday'
                },
                {
                  value: '3',
                  label: 'Green day - Boulder of broken dreams'
                },
              ]}
            />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
