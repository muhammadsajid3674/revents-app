import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import InfoIcon from '@mui/icons-material/Info';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { createTheme, Divider, ListItemIcon, ThemeProvider } from '@mui/material';
import { ThemeBtnPri } from '../../../components/button/ThemeBtn';
import moment from 'moment';

const themeIcon = createTheme({
    palette: {
        themeDefault: {
            main: '#182848'
        }
    }
})

export default function EventDetailedInfo({ event }) {

    let eventDate, eventTime, eventDay;
    if (event.date) {
        let formatDate = event.date.toDate();
        eventDate = moment(formatDate).format('DD MMM YYYY');
        eventTime = moment(formatDate).format('hh:mm a');
        eventDay = moment(formatDate).format('dddd');
    }

    return (
        <ThemeProvider theme={themeIcon}>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemIcon>
                        <InfoIcon color="themeDefault" />
                    </ListItemIcon>
                    <ListItemText primary={event.description} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemIcon>
                        <CalendarMonthIcon color="themeDefault" />
                    </ListItemIcon>
                    <ListItemText primary={`${eventDay} ${eventDate} at ${eventTime}`} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemIcon>
                        <LocationOnIcon color="themeDefault" />
                    </ListItemIcon>
                    <ListItemText primary={event.venue} />
                    <ThemeBtnPri label='Show Map' />
                </ListItem>
            </List>
        </ThemeProvider>
    );
}