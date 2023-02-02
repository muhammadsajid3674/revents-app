import { Grid } from '@mui/material'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventList from '../features/Events/EventList/EventList'
import { createEvent, deleteEvent, updateEvent } from '../features/Events/EventActions';
import BackdropLoader from '../components/loading/MuiBackdrop';
import EventActivity from '../features/Events/EventActivity/EventActivity';

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
          <EventActivity/>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProp = (state) => {
  return {
    events: state.events,
    isLoading: state.async.loading
  }
}

const mapDispatchToProp = {
  createEvent,
  deleteEvent,
  updateEvent,
}

export default connect(mapStateToProp, mapDispatchToProp)(EventDashboard);
