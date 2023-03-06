import { Box, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import BackdropLoader from '../components/loading/MuiBackdrop'
import PeopleCard from '../features/user/UserFriends/PeopleCard'
import { userFriendQuery } from '../features/user/UserFriends/userFriendsQuery'

const PeopleDashboard = ({ followers, following, requesting }) => {
  const isLoading = Object.values(requesting).some(a => a === true);
  if (isLoading) return <BackdropLoader />
  return (
    <Stack spacing={2}>
      <Paper>
        <Box sx={{ p: 1.5 }}>
          <Typography variant='h3'>Followers</Typography>
          <Divider sx={{ marginBottom: 1 }} />
          <Grid container spacing={2}>
            {followers && followers.map(followers => {
              return <Grid item md={2} key={followers.id}>
                <PeopleCard value={followers} />
              </Grid>
            })}

          </Grid>
        </Box>
      </Paper>
      <Paper>
        <Box sx={{ p: 1.5 }}>
          <Typography variant='h3'>Following</Typography>
          <Divider sx={{ marginBottom: 1 }} />
          <Grid container spacing={2}>
            {following && following.map(following => {
              return <Grid item md={2} key={following.id}>
                <PeopleCard value={following} />
              </Grid>
            })}
          </Grid>
        </Box>
      </Paper>
    </Stack>
  )
}
const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  followers: state.firestore.ordered.followers,
  following: state.firestore.ordered.following,
  requesting: state.firestore.status.requesting,
})
export default compose(
  connect(mapStateToProps),
  firestoreConnect(({ auth }) => userFriendQuery(auth))
)
  (PeopleDashboard);