import { Box, Button, Container, Grid, Toolbar } from '@mui/material'
import React, { Component } from 'react'
import EventForm from '../components/Events/EventForm'
import EventList from '../components/Events/EventList'
import Navbar from '../components/navbar/Navbar'

const eventsFromDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27T11:00:00+00:00',
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
    date: '2018-03-28T14:00:00+00:00',
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
        isOpen: false,
    }

    HandleFormIsToggle = () => {
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }))
    }

    render() {
        return (
            <Box sx={{ backgroundColor: 'rgba(0,0,0,0.15)', minHeight: '100vh' }}>
                <Navbar />
                <Container sx={{ p: 3 }}>
                    <Toolbar />
                    <Grid container spacing={2}>
                        <Grid item md={7}>
                            <EventList events={eventsFromDashboard} />
                        </Grid>
                        <Grid item md={5}>
                            <Button onClick={this.HandleFormIsToggle} variant='contained' sx={{ marginBottom: 2 }}>Create Event</Button>
                            {this.state.isOpen && <EventForm cancelFormOpen={this.HandleFormIsToggle} />}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        )
    }
}
