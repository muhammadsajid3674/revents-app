
import { Grid } from '@mui/material'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventList from '../features/Events/EventList/EventList'
import { createEvent, deleteEvent, updateEvent } from '../features/Events/EventActions';
import BackdropLoader from '../components/loading/MuiBackdrop';
import EventActivity from '../features/Events/EventActivity/EventActivity';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class EventDashboard extends Component {

  handleDeleteEvent = (id) => {
    this.props.deleteEvent(id)
  }

  render() {
    if (this.props.isLoading) return <BackdropLoader />
    return (
      <Grid container spacing={2}>
        <Grid item md={7}>
          <EventList events={this.props.events} deleteEvent={this.handleDeleteEvent} />
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
    events: state.firestore.ordered.events,
    // events: sampleData,
    isLoading: state.async.loading
  }
}

const mapDispatchToProp = {
  createEvent,
  deleteEvent,
  updateEvent,
}

export default compose(firestoreConnect([{ collection: 'events' }]), connect(mapStateToProp, mapDispatchToProp))(EventDashboard);

