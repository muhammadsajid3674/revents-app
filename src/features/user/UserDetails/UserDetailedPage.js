import React, { Component } from 'react'
import { Grid, Stack } from '@mui/material'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUserEvent } from '../userAction'
import { firestoreConnect, isEmpty } from 'react-redux-firebase';
import { userProfilequery } from '../userProfilequery';
import BackdropLoader from '../../../components/loading/MuiBackdrop';
import UserEventDetail from './UserEventDetail';
import UserProfile from './UserProfile';
import UserPhotos from './UserPhotos';
import UserDescription from './UserDescription';
import { withRouter } from '../../../config/common/util/withRouter';

class UserDetailedPage extends Component {

  async componentDidMount() {
    await this.props.getUserEvent(this.props.userId);
  }

  tabChange = (e, data) => {
    this.props.getUserEvent(this.props.userId, data)
  }

  render() {
    const { navigate, params, auth, profile, photos, requesting, events, eventLoading } = this.props;
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
            <UserEventDetail events={events} eventLoading={eventLoading} tabChange={this.tabChange} />
          </Stack>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let userId = null;
  let profile = {};

  if (ownProps.params.id === state.auth.uid) {
    profile = state.firebase.profile
  } else {
    profile = !isEmpty(state.firestore.ordered.profile) && state.firestore.ordered.profile[0];
    userId = ownProps.params.id;
  }

  return {
    profile,
    userId,
    auth: state.firebase.auth,
    photos: state.firestore.ordered.photos,
    requesting: state.firestore.status.requesting,
    events: state.events,
    eventLoading: state.async.loading
  }
};

const mapDispatchToProps = {
  getUserEvent
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((auth, userId) => userProfilequery(auth, userId))
)
  (UserDetailedPage);