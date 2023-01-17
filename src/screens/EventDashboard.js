import { Grid } from '@mui/material'
import cuid from 'cuid'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ThemeBtnPri } from '../components/button/ThemeBtn'
import EventForm from '../features/Events/EventForm/EventForm'
import EventList from '../features/Events/EventList/EventList'
import { createEvent, deleteEvent, updateEvent } from '../features/Events/EventActions';

class EventDashboard extends Component {

  state = {
    events: this.props.events,
    isOpen: false,
    selectedEvent: null
  }

  // HandleFormIsToggle = () => {
  //   this.setState((prevState) => ({ isOpen: !prevState.isOpen }))
  // }

  handleFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    })
  }
  handleFormCancel = () => {
    this.setState({
      isOpen: false,
    })
  }

  handleCreateEvent = (newEvent) => {
    this.props.createEvent(newEvent)
    this.setState(() => ({
      isOpen: false
    }))
  }

  handleSelectEvent = (event) => {
    this.setState({
      selectedEvent: event,
      isOpen: true,
    })
  }

  handleUpdateEvent = (updatedEvent) => {
    this.props.updateEvent(updatedEvent)
    this.setState({
      isOpen: false,
      selectedEvent: null
    })
  }

  handleDeleteEvent = (id) => {
    this.props.deleteEvent(id)
  }

  render() {
    return (
          <Grid container spacing={2}>
            <Grid item md={7}>
              <EventList events={this.props.events} selectEvent={this.handleSelectEvent} deleteEvent={this.handleDeleteEvent} />
            </Grid>
            <Grid item md={5}>
              <ThemeBtnPri onClick={this.handleFormOpen} variant='contained' sx={{ marginBottom: 2 }} label='Create Event'/>
              {this.state.isOpen && <EventForm
                key={this.state.selectedEvent ? this.state.selectedEvent.id : 0} // to update the state of form while selecting other events 
                createEvent={this.props.createEvent} // to send the selected Event to form
                cancelFormOpen={this.handleFormCancel}
                selectedEvent={this.state.selectedEvent}
                updateEvent={this.handleUpdateEvent}
              />}
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
