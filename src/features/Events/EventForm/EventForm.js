import { Box, Button, createTheme, Grid, Paper, Stack, ThemeProvider, Typography } from '@mui/material'
import cuid from 'cuid'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ThemeBtnPri } from '../../../components/button/ThemeBtn'
import { createEvent, updateEvent } from '../EventActions';
import { useNavigate } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import TextInput from '../../../components/ReduxForm/TextInput'
import TextArea from '../../../components/ReduxForm/TextArea'
import SelectInput from '../../../components/ReduxForm/Select'
import { combineValidators, composeValidators, hasLengthGreaterThan, isRequired } from 'revalidate'
import DateTimePickerField from '../../../components/ReduxForm/TimeDatePicker'
import { openToastr } from '../../toastr/toastrActions';

let btnTheme = createTheme({
    palette: {
        grey: {
            main: '#eee'
        }
    }
})

// Validation
const validate = combineValidators({
    title: isRequired({ message: 'The event title is required' }),
    category: isRequired({ message: 'The category is required' }),
    description: composeValidators(
        isRequired({ message: 'Please enter a description' }),
        hasLengthGreaterThan(5)({ message: 'Description needs to be at least 5 characters' })
    )(),
    city: isRequired({ message: 'The event city is required' }),
    venue: isRequired({ message: 'The event venue is required' }),
    date: isRequired({ message: 'The event date is required' }),
})

// Category Dropdown
const category = [
    { key: 'drinks', option: 'Drinks', value: 'drinks' },
    { key: 'culture', option: 'Culture', value: 'culture' },
    { key: 'film', option: 'Film', value: 'film' },
    { key: 'food', option: 'Food', value: 'food' },
    { key: 'music', option: 'Music', value: 'music' },
    { key: 'travel', option: 'Travel', value: 'travel' },
]

class Kero extends Component {

    // componentDidMount() {
    //     if (this.props.selectedEvent !== null) {
    //         this.setState({
    //             ...this.props.selectedEvent
    //         })
    //     }
    // } // to render the selected Event values

    onFormSubmit = async (values) => {
        try {
            if (this.props.initialValues.id) {
                this.props.updateEvent(values)
                this.props.openToastr('Toastr', { severity: 'success', message: 'Event is Updated SuccessFully' })
                this.props.navigate(`/event/${this.props.initialValues.id}`)
            } else {
                let createdEvent = await this.props.createEvent(values)
                this.props.openToastr('Toastr', { severity: 'success', message: 'Event is Created SuccessFully' })
                this.props.navigate(`/event/${createdEvent.id}`)
            }
        } catch (error) {
            console.log(error);
            this.props.openToastr('Toastr', { severity: 'error', message: 'Something went wrong' })
        }
    }

    // handleFieldChange = ({ target: { name, value } }) => {
    //     this.setState({
    //         [name]: value
    //     });
    // };
    render() {
        const { navigate, initialValues, handleSubmit, invalid, pristine, submitting } = this.props;
        return (
            <Grid container >
                <Grid item md={8}>
                    <Paper sx={{ p: 4 }}>
                        <Box component='form' sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <Typography variant='h6'>Event Details</Typography>
                            <Field label='Event Title' name='title' component={TextInput} placeholder='Give your event a name' />
                            <Field label='Event Category' name='category' component={SelectInput} dataSource={category} placeholder='What is your event about?' />
                            <Field label='Event Description' name='description' component={TextArea} rows='4' placeholder='Tell us about your event' />
                            <Typography variant='h6'>Event Location Details</Typography>
                            <Field label='Event City' name='city' component={TextInput} placeholder='Event City' />
                            <Field label='Event Venue' name='venue' component={TextInput} placeholder='Event Venue' />
                            <Field label='Event Date' name='date' component={DateTimePickerField} placeholder='Event Title' />
                            <Stack spacing={1} direction='row'>
                                <ThemeBtnPri disabled={invalid || submitting || pristine} onClick={handleSubmit(this.onFormSubmit)} variant='contained' label='Submit' />
                                <ThemeProvider theme={btnTheme}>
                                    <Button
                                        onClick={() => (
                                            initialValues ? navigate(`/event/${initialValues.id}`) : navigate('/event'))} variant='contained' color='grey'>Cancel</Button>
                                </ThemeProvider>
                            </Stack>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

// Render Class in Functional Component to use Hooks
function EventForm(props) {
    let navigate = useNavigate();
    return <Kero {...props} navigate={navigate} />
}

const mapStateToProps = (state) => {
    var parts = window.location.pathname.split('/');
    var lastSegment = parts.pop() || parts.pop();

    let event = {
        title: "",
        category: "",
        description: "",
        city: "",
        venue: "",
        date: "",
    };

    if (lastSegment && state.events.length > 0) {
        event = state.events.filter(event => event.id === lastSegment)[0]
    }

    return {
        initialValues: event
    };
}

const mapDispatchToProp = {
    createEvent,
    updateEvent,
    openToastr
}


export default connect(mapStateToProps, mapDispatchToProp)(reduxForm({ form: 'eventFrom', validate })(EventForm));