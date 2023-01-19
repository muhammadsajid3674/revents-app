import { Box, Button, createTheme, Grid, Paper, Stack, TextField, ThemeProvider, Typography } from '@mui/material'
import cuid from 'cuid'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ThemeBtnPri } from '../../../components/button/ThemeBtn'
import { createEvent, updateEvent } from '../EventActions';
import MuiDatePicker from '../../../components/Input/Datepicker'
import { useNavigate } from 'react-router-dom'

let btnTheme = createTheme({
    palette: {
        grey: {
            main: '#eee'
        }
    }
})

class Kero extends Component {

    state = {
        ...this.props.event
    }

    componentDidMount() {
        if (this.props.selectedEvent !== null) {
            this.setState({
                ...this.props.selectedEvent
            })
        }
    } // to render the selected Event values

    handleSubmit = (evt) => {
        evt.preventDefault()
        if (this.state.id) {
            this.props.updateEvent(this.state)
            this.props.navigate(`/event/${this.state.id}`)
        } else {
            const newEvent = {
                ...this.state,
                id: cuid(),
                hostImg: '../../../assets/user.png',
            }
            this.props.createEvent(newEvent)
            this.props.navigate(`/event/${newEvent.id}`)
        }
    }

    handleFieldChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <Paper>
                <Grid container justifyContent='center' sx={{ p: 2 }}>
                    <Grid item md={11}>
                        <Typography variant='h4'>Create Event</Typography>
                        <Box component='form' sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4
                        }}>
                            <TextField name='title' value={this.state.title} onChange={this.handleFieldChange} label="Event Title" variant="standard" />
                            <MuiDatePicker name='date' value={this.state.date} onChange={this.handleFieldChange} label='Event Date' type="date" />
                            <TextField name='city' value={this.state.city} onChange={this.handleFieldChange} label="City" variant="standard" />
                            <TextField name='venue' value={this.state.venue} onChange={this.handleFieldChange} label="Venue" variant="standard" />
                            <TextField name='hostedBy' value={this.state.hostedBy} onChange={this.handleFieldChange} label="Hosted By" variant="standard" />
                            <Stack spacing={1} direction='row'>
                                <ThemeBtnPri onClick={this.handleSubmit} variant='contained' label='Submit' />
                                <ThemeProvider theme={btnTheme}>
                                    <Button onClick={() => (window.history.back())} variant='contained' color='grey'>Cancel</Button>
                                </ThemeProvider>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

function EventForm(props) {
    let navigate = useNavigate();
    return <Kero {...props} navigate={navigate} />
}

const mapStateToProps = (state) => {
    var parts = window.location.pathname.split('/');
    var lastSegment = parts.pop() || parts.pop();

    let event = {
        title: '',
        date: '',
        city: '',
        venue: '',
        hostedBy: '',
    }

    if (lastSegment && state.events.length > 0) {
        event = state.events.filter(event => event.id === lastSegment)[0]
    }

    return { event };
}

const mapDispatchToProp = {
    createEvent,
    updateEvent,
}


export default connect(mapStateToProps, mapDispatchToProp)(EventForm);