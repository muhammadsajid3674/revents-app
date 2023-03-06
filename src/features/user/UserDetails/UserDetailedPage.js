import React, { Component } from 'react'
import { Grid, Stack } from '@mui/material'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUserEvent, followingPeople, unFollowPeople } from '../userAction'
import { firestoreConnect, isEmpty } from 'react-redux-firebase';
import { userProfilequery } from '../userProfilequery';
import BackdropLoader from '../../../components/loading/MuiBackdrop';
import UserEventDetail from './UserEventDetail';
import UserProfile from './UserProfile';
import UserPhotos from './UserPhotos';
import UserDescription from './UserDescription';
import { withRouter } from '../../../config/common/util/withRouter';
import UserFriends from './UserFriends';

class UserDetailedPage extends Component {

  async componentDidMount() {
    await this.props.getUserEvent(this.props.params.id);
  }

  tabChange = (e, data) => {
    this.props.getUserEvent(this.props.params.id, data)
  }

  render() {
    const { navigate, params, auth, profile, photos, requesting, events, eventLoading, followingPeople, following, followers, unFollowPeople } = this.props;
    const isCurrentUser = auth.uid === params.id;
    const loading = Object.values(requesting).some(a => a === true);
    const isFollowing = !isEmpty(following);

    if (loading) return <BackdropLoader />
    return (
      <Grid container spacing={3}>
        <Grid item md={6}>
          <Stack spacing={3}>
            <UserProfile
              navigate={navigate}
              profile={profile}
              auth={auth}
              isCurrentUser={isCurrentUser}
              followingPeople={followingPeople}
              isFollowing={isFollowing}
              unFollowPeople={unFollowPeople}
            />
            <UserDescription profile={profile} />
          </Stack>
        </Grid>
        <Grid item md={6}>
          <Stack spacing={3}>
            <UserFriends followers={followers} following={following} loading={loading} />
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

  if (ownProps.params.id === state.firebase.auth.uid) {
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
    eventLoading: state.async.loading,
    following: state.firestore.ordered.following,
    followers: state.firestore.ordered.followers,
  }
};

const mapDispatchToProps = {
  getUserEvent,
  followingPeople,
  unFollowPeople
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => userProfilequery(props))
)
  (UserDetailedPage);