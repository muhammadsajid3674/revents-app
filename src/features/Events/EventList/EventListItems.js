import React from 'react'
import { Avatar, Box, Button, Divider, Grid, Link, Paper, Stack, Typography } from '@mui/material'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import NavigationIcon from '@mui/icons-material/Navigation';
import EventListAttendee from './EventListAttendee'
import { ThemeBtnPri } from '../../../components/button/ThemeBtn';
import { useNavigate } from 'react-router-dom';

export default function EventListItems(props) {
    const navigate = useNavigate()
    const { event, selectEvent, deleteEvent } = props;
    return (
        <Paper>
            <Box style={{ padding: '10px 15px' }}>
                <Grid container alignItems='center' spacing={2}>
                    <Grid item>
                        <Avatar
                            alt="Remy Sharp"
                            src={event.hostPhotoURL}
                            sx={{ width: 56, height: 56 }}
                        />
                    </Grid>
                    <Grid item>
                        <Typography variant='h4'>{event.title}</Typography>
                        <Typography variant='subtitle2'>Hosted By <Link>{event.hostedBy}</Link></Typography>
                    </Grid>
                </Grid>
            </Box>
            <Divider />
            <Box style={{ padding: '10px 15px' }}>
                <Stack spacing={1} direction='row' alignItems='center'>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <AccessTimeFilledIcon fontSize='small' />
                        <Typography variant='body2'>Today, 1:00 PM</Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <NavigationIcon fontSize='small' />
                        <Typography variant='body2'>{event.city}</Typography>
                    </Box>
                </Stack>
            </Box>
            <Divider />
            <Box style={{ padding: '10px 15px', backgroundColor: '#eee' }}>
                <Stack spacing={2} direction='row' alignItems='center'>
                    {event.attendees && event.attendees.map((elem, index) => {
                        return <EventListAttendee key={index} attendee={elem} />
                    })}
                </Stack>
            </Box>
            <Divider />
            <Box style={{ padding: '10px 15px' }}>
                <Stack spacing={1} direction='row' alignItems='center'>
                    <Typography variant='body2' style={{ flexGrow: 1 }}>{event.description}</Typography>
                    <ThemeBtnPri
                        // onClick={() => selectEvent(event)}
                        onClick={() => { navigate(`${event.id}`) }}
                        variant='contained'
                        label='View'
                    />
                    <Button onClick={() => deleteEvent(event.id)} variant='contained' color='error'>delete</Button>
                </Stack>
            </Box>
            <Divider />
        </Paper>
    )
}