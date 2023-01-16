import { Box, Button, Container, Grid, Toolbar } from '@mui/material'
import cuid from 'cuid'
import React, { Component } from 'react'
import EventForm from '../features/Events/EventForm'
import EventList from '../features/Events/EventList'
import Navbar from '../components/navbar/Navbar'

const eventsFromDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]


export default class EventDashboard extends Component {

  state = {
    events: eventsFromDashboard,
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
    newEvent.id = cuid();
    newEvent.hostImg = './assets/user.png'
    this.setState(({ events }) => ({
      events: [...events, newEvent],
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
    this.setState({
      events: this.state.events.map((elem, index) => {
        if (elem.id === updatedEvent.id) {
          return { ...updatedEvent }
        } else {
          return elem
        }
      }),
      isOpen: false,
      selectedEvent: null
    })
  }

  handleDeleteEvent = (id) => {
    this.setState({
      events: this.state.events.filter(elem => elem.id !== id)
    })
  }

  render() {
    return (
          <Grid container spacing={2}>
            <Grid item md={7}>
              <EventList events={this.state.events} selectEvent={this.handleSelectEvent} deleteEvent={this.handleDeleteEvent} />
            </Grid>
            <Grid item md={5}>
              <Button onClick={this.handleFormOpen} variant='contained' sx={{ marginBottom: 2 }}>Create Event</Button>
              {this.state.isOpen && <EventForm
                key={this.state.selectedEvent ? this.state.selectedEvent.id : 0} // to update the state of form while selecting other events 
                createEvent={this.handleCreateEvent} // to send the selected Event to form
                cancelFormOpen={this.handleFormCancel}
                selectedEvent={this.state.selectedEvent}
                updateEvent={this.handleUpdateEvent}
              />}
            </Grid>
          </Grid>
    )
  }
}
