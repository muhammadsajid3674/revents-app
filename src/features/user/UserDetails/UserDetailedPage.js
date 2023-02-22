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
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isEmpty } from 'react-redux-firebase';
import { userProfilequery } from '../userProfilequery';

const UserDetailedPage = ({ profile, photos, auth }) => {

  const navigate = useNavigate()
  return (
    <Grid container spacing={3}>
      <Grid item md={6}>
        <Stack spacing={3}>
          <Paper sx={{ padding: '10px 15px' }}>
            <Stack direction='row' alignItems='center' spacing={1} sx={{ marginBottom: '0.5rem' }}>
              <AccountCircleIcon fontSize='large' />
              <Typography variant='h5'>Profile</Typography>
            </Stack>
            <UserProfile navigate={navigate} profile={profile} auth={auth} />
          </Paper>
          <Paper sx={{ padding: '10px 15px' }}>
            <Stack direction='row' alignItems='center' spacing={1} sx={{ marginBottom: '0.5rem' }}>
              <DescriptionIcon fontSize='large' />
              <Typography variant='h5'>About {profile.displayName}</Typography>
            </Stack>
            <UserDescription profile={profile} />
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
            <UserPhotos photos={photos} />
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

const mapStateToProps = (state) => {
  let parts = window.location.pathname.split('/');
  let pathId = parts.pop() || parts.pop();

  let userId = null;
  let profile = {};

  if (pathId === state.auth.uid) {
    profile = state.firebase.profile
  } else {
    profile = !isEmpty(state.firestore.ordered.profile) && state.firestore.ordered.profile[0];
    userId = pathId;
  }

  return {
    profile,
    userId,
    auth: state.firebase.auth,
    photos: state.firestore.ordered.photos
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((auth, userId) => userProfilequery(auth, userId))
)
  (UserDetailedPage);