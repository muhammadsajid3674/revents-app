import { Box, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { ThemeBtnSec } from '../../../components/button/ThemeBtn'
import brokenImage from '../../../assets/user.png';
import moment from 'moment/moment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LazyLoad from 'react-lazyload';

const UserProfile = ({ navigate, profile, auth, isCurrentUser, followingPeople, isFollowing, unFollowPeople }) => {

  let age;
  if (profile.dateOfBirth) {
    const dob = profile.dateOfBirth.toDate()
    age = moment().diff(dob, 'years');
  }

  return (
    <Paper sx={{ padding: '10px 15px' }}>
      <Stack direction='row' alignItems='center' spacing={1} sx={{ marginBottom: '0.5rem' }}>
        <AccountCircleIcon fontSize='large' />
        <Typography variant='h5'>Profile</Typography>
      </Stack>
      <Grid container spacing={3} justifyContent='center'>
        <Grid item md={10} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: 200 }}>
            <LazyLoad height={150} offset={-100} placeholder={<img src={brokenImage} style={{ width: '100%', minHeight: 'auto' }} alt='' />}>
              <img src={profile.photoURL || require('../../../assets/user.png')} alt='' style={{ width: '100%', minHeight: 'auto', borderRadius: '100px' }} />
            </LazyLoad>
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
          {isCurrentUser ? (
            <ThemeBtnSec onClick={() => { navigate('/settings') }} label='Edit Profile' style={{
              border: '1px solid #182848',
              color: '#182848',
              '&:hover': {
                transition: "500ms all",
                backgroundColor: "#182848 !important",
                color: '#fff',
              }
            }} />
          ) : (
            isFollowing ? (
              <ThemeBtnSec label='Unfollow User' onClick={() => unFollowPeople(profile)} style={{
                border: '1px solid #182848',
                color: '#182848',
                '&:hover': {
                  transition: "500ms all",
                  backgroundColor: "#182848 !important",
                  color: '#fff',
                }
              }} />
            ) : (
              <ThemeBtnSec label='Follow User' onClick={() => followingPeople(profile)} style={{
                border: '1px solid #182848',
                color: '#182848',
                '&:hover': {
                  transition: "500ms all",
                  backgroundColor: "#182848 !important",
                  color: '#fff',
                }
              }} />
            )
          )}
        </Grid>
      </Grid>
    </Paper>
  )
}

export default UserProfile