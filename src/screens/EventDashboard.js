import { Grid } from '@mui/material'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventList from '../features/Events/EventList/EventList'
import { createEvent, deleteEvent, updateEvent } from '../features/Events/EventActions';

class EventDashboard extends Component {

  handleDeleteEvent = (id) => {
    this.props.deleteEvent(id)
  }

  render() {
    return (
          <Grid container spacing={2}>
            <Grid item md={7}>
              <EventList events={this.props.events} deleteEvent={this.handleDeleteEvent} />
            </Grid>
            <Grid item md={5}>
              <h2>  Activity Feed</h2>
            </Grid>
          </Grid>
    )
  }
}

const mapStateToProp = (state) => {
  return {
    events : state.events
  }
}

const mapDispatchToProp = {
  createEvent,
  deleteEvent,
  updateEvent,
}

export default connect(mapStateToProp, mapDispatchToProp)(EventDashboard);
