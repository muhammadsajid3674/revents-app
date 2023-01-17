import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import InfoIcon from '@mui/icons-material/Info';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { createTheme, Divider, ListItemIcon, ThemeProvider } from '@mui/material';
import { ThemeBtnPri } from '../../../components/button/ThemeBtn';

export default function EventDetailedInfo() {

    const themeIcon = createTheme({
        palette: {
            themeDefault: {
                main: '#182848'
            }
        }
    })

    return (
        <ThemeProvider theme={themeIcon}>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemIcon>
                        <InfoIcon color="themeDefault" />
                    </ListItemIcon>
                    <ListItemText primary="Description of Event" />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemIcon>
                        <CalendarMonthIcon color="themeDefault" />
                    </ListItemIcon>
                    <ListItemText primary="Event Date" />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemIcon>
                        <LocationOnIcon color="themeDefault" />
                    </ListItemIcon>
                    <ListItemText primary="Event Venue" />
                    <ThemeBtnPri label='Show Map' />
                </ListItem>
            </List>
        </ThemeProvider>
    );
}