import React from 'react'
import { Avatar, Box, Chip, Divider, Grid, Link, Paper, Stack, Typography } from '@mui/material'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import NavigationIcon from '@mui/icons-material/Navigation';
import EventListAttendee from './EventListAttendee'
import { ThemeBtnPri } from '../../../components/button/ThemeBtn';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';

function EventListItems(props) {
    const navigate = useNavigate()

    const { event } = props;

    let eventDate, eventTime, eventDay;
    if (event.date) {
        let formatDate = event.date.toDate();
        eventDate = moment(formatDate).format('DD MMM YYYY');
        eventTime = moment(formatDate).format('hh:mm a');
        eventDay = moment(formatDate).format('dddd');
    }

    return (
        <Paper>
            <Box sx={{ padding: '10px 15px' }}>
                <Grid container alignItems='center' spacing={2}>
                    <Grid item>
                        <Avatar
                            alt="Remy Sharp"
                            src={event.hostPhotoURL}
                            sx={{ width: 56, height: 56 }}
                        />
                    </Grid>
                    <Grid item sx={{ flexGrow: 1 }}>
                        <Typography variant='h4'>{event.title}</Typography>
                        <Typography variant='subtitle2'>Hosted By <Link>{event.hostedBy}</Link></Typography>
                    </Grid>
                    {event.cancelled && <Grid item alignSelf='flex-start'>
                        <Chip label='Event is cancelled by the host' color='error' />
                    </Grid>
                    }
                </Grid>
            </Box>
            <Divider />
            <Box style={{ padding: '10px 15px' }}>
                <Stack spacing={1} direction='row' alignItems='center'>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <AccessTimeFilledIcon fontSize='small' />
                        <Typography variant='body2'>{eventDay} {eventDate} at {eventTime}</Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <NavigationIcon fontSize='small' />
                        <Typography variant='body2'>{event.venue}</Typography>
                    </Box>
                </Stack>
            </Box>
            <Divider />
            <Box style={{ padding: '10px 15px', backgroundColor: '#eee' }}>
                <Stack spacing={2} direction='row' alignItems='center'>
                    {event.attendees && Object.values(event.attendees).map((elem, index) => {
                        return <EventListAttendee key={index} attendee={elem} />
                    })}
                </Stack>
            </Box>
            <Divider />
            <Box style={{ padding: '10px 15px' }}>
                <Stack spacing={1} direction='row' alignItems='center'>
                    <Typography variant='body2' style={{ flexGrow: 1 }}>{event.description}</Typography>
                    <ThemeBtnPri
                        onClick={() => { navigate(`${event.id}`) }}
                        variant='contained'
                        label='View'
                    />
                    {/* <ThemeBtnPri onClick={() => deleteEvent(event.id)} variant='contained' color='error' label='Delete' /> */}
                </Stack>
            </Box>
            <Divider />
        </Paper>
    )
}

export default EventListItems;