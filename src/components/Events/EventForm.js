import { Box, Button, createTheme, Grid, Paper, Stack, TextField, ThemeProvider, Typography } from '@mui/material'
import React, { Component } from 'react'
import MuiDatePicker from '../Input/Datepicker'

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

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state);
    }
    handleFieldChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

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
                                <Button onClick={this.handleSubmit} variant='contained' >Submit</Button>
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



