import React from 'react'
import { Grid, Stack } from '@mui/material'
import UserEventDetail from './UserEventDetail';
import UserProfile from './UserProfile';
import UserPhotos from './UserPhotos';
import UserDescription from './UserDescription';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isEmpty } from 'react-redux-firebase';
import { userProfilequery } from '../userProfilequery';
import BackdropLoader from '../../../components/loading/MuiBackdrop';

const UserDetailedPage = ({ profile, photos, auth, requesting }) => {

  const navigate = useNavigate();

  const params = useParams();
  const isCurrentUser = auth.uid === params.id;

  const loading = Object.values(requesting).some(a => a === true);

  if (loading) return <BackdropLoader />
  return (
    <Grid container spacing={3}>
      <Grid item md={6}>
        <Stack spacing={3}>
          <UserProfile navigate={navigate} profile={profile} auth={auth} isCurrentUser={isCurrentUser} />
          <UserDescription profile={profile} />
        </Stack>
      </Grid>
      <Grid item md={6}>
        <Stack spacing={3}>
          <UserPhotos photos={photos} />
          <UserEventDetail />
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
    photos: state.firestore.ordered.photos,
    requesting: state.firestore.status.requesting
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((auth, userId) => userProfilequery(auth, userId))
)
  (UserDetailedPage);