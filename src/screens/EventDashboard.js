
import { Grid } from '@mui/material'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventList from '../features/Events/EventList/EventList'
import { getEventsForDashboard } from '../features/Events/EventActions';
import BackdropLoader from '../components/loading/MuiBackdrop';
import EventActivity from '../features/Events/EventActivity/EventActivity';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';

class EventDashboard extends Component {

  componentDidMount() {
    this.props.getEventsForDashboard();
  }

  render() {
    if (this.props.loading) return <BackdropLoader />
    return (
      <Grid container spacing={2}>
        <Grid item md={7}>
          <EventList events={this.props.events} />
        </Grid>
        <Grid item md={5}>
          <EventActivity />
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProp = (state) => {
  return {
    events: state.events,
    loading: state.async.loading
  }
}

const mapDispatchToProp = {
  getEventsForDashboard
}

export default compose(firestoreConnect([{ collection: 'events' }]), connect(mapStateToProp, mapDispatchToProp))(EventDashboard);

