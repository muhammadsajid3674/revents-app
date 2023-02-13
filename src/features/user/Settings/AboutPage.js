import { Box, Divider, FormControl, FormLabel, Grid, Paper, RadioGroup, Typography } from '@mui/material'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { ThemeBtnPri } from '../../../components/button/ThemeBtn'
import MultipleSelectInput from '../../../components/ReduxForm/multiSelectInput'
import { MuiRadio } from '../../../components/ReduxForm/RadioBtn'
import TextArea from '../../../components/ReduxForm/TextArea'
import TextInput from '../../../components/ReduxForm/TextInput'

const category = [
  { key: 'drinks', option: 'Drinks', value: 'drinks' },
  { key: 'culture', option: 'Culture', value: 'culture' },
  { key: 'film', option: 'Film', value: 'film' },
  { key: 'food', option: 'Food', value: 'food' },
  { key: 'music', option: 'Music', value: 'music' },
  { key: 'travel', option: 'Travel', value: 'travel' },
]

const AboutPage = ({ submitting, pristine, updateProfile, handleSubmit }) => {
  return (
    <Paper>
      <Box style={{ padding: '10px 15px' }}>
        <Typography variant='h4'>About Me</Typography>
        <Divider sx={{ marginBottom: '10px ' }} />
        <Box component='form'>
          <Grid container>
            <Grid item md={12}>
              <FormControl>
                <FormLabel id="status">Tell us your status</FormLabel>
                <RadioGroup row aria-labelledby="status" defaultValue='male' name="status">
                  <Field type='radio' name='status' value='single' component={MuiRadio} label='Single' />
                  <Field type='radio' name='status' value='Relationship' component={MuiRadio} label='Relationship' />
                  <Field type='radio' name='status' value='married' component={MuiRadio} label='Married' />
                </RadioGroup>
              </FormControl>
              <Divider sx={{ marginBottom: '10px ' }} />
              <Field type='text' name='about' component={TextArea} placeholder='About Me' label='Tell us about yourself' rows={5} />
              <Field name='interest' component={MultipleSelectInput} dataSource={category} label='Select your interest' />
              <Field type='text' name='occupation' component={TextInput} placeholder='Occupation' />
              <Field type='text' name='origin' component={TextInput} placeholder='Country of origin' />
            </Grid>
          </Grid>
          <Divider sx={{ marginTop: '10px' }} />
          <ThemeBtnPri disabled={pristine || submitting} color='success' label='Update Profile' variant='contained' onClick={handleSubmit(updateProfile)} />
        </Box>
      </Box>
    </Paper>
  )
}

export default reduxForm({ form: 'userProfile', enableReinitialize: true, destroyOnUnmount: false })(AboutPage);