import React from 'react'
import { Grid, Paper, Stack, Typography } from '@mui/material'
import UserEventDetail from './UserEventDetail';
import UserProfile from './UserProfile';
import UserPhotos from './UserPhotos';
import UserDescription from './UserDescription';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import EventIcon from '@mui/icons-material/Event';

export const UserDetailedPage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item md={6}>
        <Stack spacing={3}>
          <Paper sx={{ padding: '10px 15px' }}>
            <Stack direction='row' alignItems='center' spacing={1} sx={{ marginBottom: '0.5rem' }}>
              <AccountCircleIcon fontSize='large' />
              <Typography variant='h5'>Profile</Typography>
            </Stack>
            <UserProfile />
          </Paper>
          <Paper sx={{ padding: '10px 15px' }}>
            <Stack direction='row' alignItems='center' spacing={1} sx={{ marginBottom: '0.5rem' }}>
              <DescriptionIcon fontSize='large' />
              <Typography variant='h5'>About Sajid</Typography>
            </Stack>
            <UserDescription />
          </Paper>
        </Stack>
      </Grid>
      <Grid item md={6}>
        <Stack spacing={3}>
          <Paper sx={{ padding: '10px 15px' }}>
            <Stack direction='row' alignItems='center' spacing={1} sx={{ marginBottom: '0.5rem' }}>
              <InsertPhotoIcon fontSize='large' />
              <Typography variant='h5'>Photos</Typography>
            </Stack>
            <UserPhotos />
          </Paper>
          <Paper sx={{ padding: '10px 15px' }}>
            <Stack direction='row' alignItems='center' spacing={1} sx={{ marginBottom: '0.5rem' }}>
              <EventIcon fontSize='large' />
              <Typography variant='h5'>Events</Typography>
            </Stack>
            <UserEventDetail />
          </Paper>
        </Stack>
      </Grid>
    </Grid>
  )
}
