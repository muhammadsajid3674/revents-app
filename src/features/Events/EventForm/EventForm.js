import { Box, Button, createTheme, Grid, Paper, Stack, TextField, ThemeProvider, Typography } from '@mui/material'
import cuid from 'cuid'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ThemeBtnPri } from '../../../components/button/ThemeBtn'
import { createEvent, updateEvent } from '../EventActions';
import MuiDatePicker from '../../../components/Input/Datepicker'
import { useNavigate } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import TextInput from '../../../components/ReduxForm/TextInput'
import TextArea from '../../../components/ReduxForm/TextArea'

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
            <Grid container >
                <Grid item md={8}>
                    <Paper sx={{ p: 4 }}>
                        <Box component='form' sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1.5
                        }}>

                            <Typography variant='h6'>Event Details</Typography>
                            <Field label='Event Title' name='title' component={TextInput} placeholder='Give your event a name' />
                            <Field label='Event Category' name='category' component={TextInput} placeholder='What is your event about?' />
                            <Field label='Event Description' name='description' component={TextArea} rows='4' placeholder='Tell us about your event' />
                            <Typography variant='h6'>Event Location Details</Typography>
                            <Field label='Event City' name='city' component={TextInput} placeholder='Event City' />
                            <Field label='Event Venue' name='venue' component={TextInput} placeholder='Event Venue' />
                            <Field label='Event Title' name='date' component={TextInput} placeholder='Event Title' />
                            {/* <TextField name='title' value={this.state.title} onChange={this.handleFieldChange} label="Event Title" variant="standard" /> */}
                            {/* <MuiDatePicker name='date' value={this.state.date} onChange={this.handleFieldChange} label='Event Date' type="date" />
                            <TextField name='city' value={this.state.city} onChange={this.handleFieldChange} label="City" variant="standard" />
                            <TextField name='venue' value={this.state.venue} onChange={this.handleFieldChange} label="Venue" variant="standard" />
                            <TextField name='hostedBy' value={this.state.hostedBy} onChange={this.handleFieldChange} label="Hosted By" variant="standard" /> */}
                            <Stack spacing={1} direction='row'>
                                <ThemeBtnPri onClick={this.handleSubmit} variant='contained' label='Submit' />
                                <ThemeProvider theme={btnTheme}>
                                    <Button onClick={() => (window.history.back())} variant='contained' color='grey'>Cancel</Button>
                                </ThemeProvider>
                            </Stack>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
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


export default connect(mapStateToProps, mapDispatchToProp)(reduxForm({ form: 'event' })(EventForm));