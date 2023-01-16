import { Box, Button, createTheme, Grid, Paper, Stack, TextField, ThemeProvider, Typography } from '@mui/material'
import React, { Component } from 'react'
import { ThemeBtnPri } from '../../components/button/ThemeBtn'
import MuiDatePicker from '../../components/Input/Datepicker'

let btnTheme = createTheme({
    palette: {
        grey: {
            main: '#eee'
        }
    }
})
export default class EventForm extends Component {

    state = {
        title: '',
        date: '',
        city: '',
        venue: '',
        hostedBy: '',
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
        } else {
            this.props.createEvent(this.state)
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
                                <ThemeBtnPri onClick={this.handleSubmit} variant='contained' label='Submit'/>
                                <ThemeProvider theme={btnTheme}>
                                    <Button onClick={this.props.cancelFormOpen} variant='contained' color='grey'>Cancel</Button>
                                </ThemeProvider>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}



