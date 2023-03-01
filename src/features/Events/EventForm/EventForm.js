import { Box, Button, createTheme, Grid, Paper, Stack, ThemeProvider, Typography } from '@mui/material'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ThemeBtnPri } from '../../../components/button/ThemeBtn'
import { createEvent, updateEvent, cancelEvent } from '../EventActions';
import { useNavigate, useParams } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import TextInput from '../../../components/ReduxForm/TextInput'
import TextArea from '../../../components/ReduxForm/TextArea'
import SelectInput from '../../../components/ReduxForm/Select'
import { combineValidators, composeValidators, hasLengthGreaterThan, isRequired } from 'revalidate'
import DateTimePickerField from '../../../components/ReduxForm/TimeDatePicker'
import { openToastr } from '../../toastr/toastrActions';
import { withFirestore } from 'react-redux-firebase';
import { compose } from 'redux';
import { withRouter } from '../../../config/common/util/withRouter';

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

class EventForm extends Component {

    async componentDidMount() {
        const { firestore, params } = this.props;
        await firestore.setListener(`events/${params.id}`)
    } // to render the selected Event values

    async componentWillUnmount() {
        const { firestore, params } = this.props;
        await firestore.unsetListener(`events/${params.id}`)
    }

    onFormSubmit = async (values) => {
        const { initialValues, updateEvent, openToastr, navigate, createEvent } = this.props;
        try {
            if (initialValues.id) {
                await updateEvent(values)
                openToastr('Toastr', { severity: 'success', message: 'Event is Updated SuccessFully' })
                navigate(`/event/${initialValues.id}`)
            } else {
                let createdEvent = await createEvent(values)
                openToastr('Toastr', { severity: 'success', message: 'Event is Created SuccessFully' })
                navigate(`/event/${createdEvent.id}`)
            }
        } catch (error) {
            console.log(error);
            openToastr('Toastr', { severity: 'error', message: 'Something went wrong' })
        }
    }

    render() {
        const { navigate, initialValues, handleSubmit, invalid, pristine, submitting, event, cancelEvent, loading } = this.props;
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
                                <ThemeBtnPri disabled={invalid || submitting || pristine} isLoading={loading} onClick={handleSubmit(this.onFormSubmit)} variant='contained' label='Submit' />
                                <ThemeBtnPri onClick={() => (initialValues ? navigate(`/event/${initialValues.id}`) : navigate('/event'))} disabled={loading} variant='contained' color='themeGrey' label='Cancel' />
                                <div style={{ flexGrow: 1 }} />
                                <ThemeBtnPri onClick={() => cancelEvent(!event.cancelled, event.id)} variant='contained' label={event.cancelled ? 'Activate Event' : 'Cancel Event'} color={event.cancelled ? 'success' : 'error'} />
                            </Stack>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let event = {};

    if (state.firestore.ordered.events && state.firestore.ordered.events.length > 0) {
        event = state.firestore.ordered.events.filter(event => event.id === ownProps.params.id)[0] || {}
    }

    return {
        initialValues: event,
        event,
        loading: state.async.loading
    };
}

const mapDispatchToProp = {
    createEvent,
    updateEvent,
    openToastr,
    cancelEvent
}


export default compose(
    withRouter,
    withFirestore,
    connect(mapStateToProps, mapDispatchToProp),
    reduxForm({ form: 'eventFrom', validate, enableReinitialize: true })
)(EventForm);