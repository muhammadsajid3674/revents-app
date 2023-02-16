import { Box, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { ThemeBtnSec } from '../../../components/button/ThemeBtn'
import userImage from '../../../assets/user.png';
import setDate from '../../../config/common/HelperMethods/setDate';
import moment from 'moment/moment';

const UserProfile = ({ navigate, profile, auth }) => {

  let age;
  if (profile.dateOfBirth) {
    const dob = profile.dateOfBirth.toDate()
    age = moment().diff(dob, 'years');
  }

  return (
    <Grid container spacing={3} justifyContent='center'>
      <Grid item md={10} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: 200 }}>
          <img src={profile.photoURL} alt='' style={{ width: '100%', minHeight: 'auto', borderRadius: '100px' }} />
        </Box>
      </Grid>
      <Grid item md={5}>
        <Typography variant='body1'>{profile.displayName}</Typography>
        <Divider />
      </Grid>
      <Grid item md={5}>
        <Typography variant='body1'>{profile.occupation}</Typography>
        <Divider />
      </Grid>
      <Grid item md={10}>
        <Typography variant='body1'>{age}, {profile.city}</Typography>
        <Divider />
      </Grid>
      <Grid item md={10}>
        <Typography variant='body1'>{auth.email}</Typography>
        <Divider />
      </Grid>
      <Grid item md={10} textAlign='center'>
        <ThemeBtnSec onClick={() => { navigate('/settings') }} label='Edit Profile' style={{
          border: '1px solid #182848',
          color: '#182848',
          '&:hover': {
            transition: "500ms all",
            backgroundColor: "#182848 !important",
            color: '#fff',
          }
        }} />
      </Grid>
    </Grid>
  )
}

export default UserProfile