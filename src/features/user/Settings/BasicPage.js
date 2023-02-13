import { Box, Divider, FormControl, FormLabel, Grid, Paper, RadioGroup, Typography } from '@mui/material'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { ThemeBtnPri } from '../../../components/button/ThemeBtn'
import DatePickerField from '../../../components/ReduxForm/DatepickerField'
import { MuiRadio } from '../../../components/ReduxForm/RadioBtn'
import TextInput from '../../../components/ReduxForm/TextInput'

const BasicPage = ({ submitting, pristine, updateProfile, handleSubmit }) => {
  return (
    <Paper>
      <Box style={{ padding: '10px 15px' }}>
        <Typography variant='h4'>Basics</Typography>
        <Divider sx={{ marginBottom: '10px ' }} />
        <Box component='form'>
          <Grid container>
            <Grid item md={6}>
              <Field type='text' name='displayName' component={TextInput} placeholder='Known As' />
              <FormControl>
                <FormLabel id="gender">Gender</FormLabel>
                <RadioGroup row aria-labelledby="gender" defaultValue='male' name="gender">
                  <Field type='radio' name='gender' value='male' component={MuiRadio} label='Male' />
                  <Field type='radio' name='gender' value='female' component={MuiRadio} label='Female' />
                </RadioGroup>
              </FormControl>
              <Field type='date' name='dateOfBirth' component={DatePickerField} placeholder='Date of birth' />
              <Field type='text' name='city' component={TextInput} placeholder='Home Town' />
            </Grid>
          </Grid>
          <Divider sx={{ marginTop: '10px' }} />
          <ThemeBtnPri disabled={pristine || submitting} color='success' label='Update Profile' variant='contained' onClick={handleSubmit(updateProfile)} />
        </Box>
      </Box>
    </Paper>
  )
}

export default reduxForm({ form: 'userProfile', enableReinitialize: true, destroyOnUnmount: false })(BasicPage);