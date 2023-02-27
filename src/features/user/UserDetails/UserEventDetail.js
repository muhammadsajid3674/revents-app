import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, CardActionArea, CardContent, CardMedia, CircularProgress, Grid, Paper, Stack } from '@mui/material';
import eventImage from '../../../assets/categoryImages/travel.jpg';
import EventIcon from '@mui/icons-material/Event';
import moment from 'moment';
import { Link } from 'react-router-dom';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography variant='body1'>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `event-tab-${index}`,
        'aria-controls': `event-tabpanel-${index}`,
    };
}

export default function UserEventDetail({ events, eventLoading, tabChange }) {
    const [value, setValue] = React.useState(0);

    return (
        <Paper sx={{ padding: '10px 15px' }}>
            <Stack direction='row' alignItems='center' spacing={1} sx={{ marginBottom: '0.5rem' }}>
                <EventIcon fontSize='large' />
                <Typography variant='h5'>Events</Typography>
            </Stack>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={(e, data) => { tabChange(e, data); setValue(data); }} textColor="primary" indicatorColor="primary" aria-label="basic tabs example">
                        <Tab label="All Event" {...a11yProps(0)} />
                        <Tab label="Past Event" {...a11yProps(1)} />
                        <Tab label="Future Event" {...a11yProps(2)} />
                        <Tab label="Events Hosted" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={value}>
                    <Grid container spacing={2}>
                        {eventLoading ? <Grid item md={12} textAlign='center'>
                            <CircularProgress />
                        </Grid> : <>
                            {events && events.map(event => {
                                return <Grid item md={4} key={event.id}>
                                    <Card sx={{ maxWidth: 200 }}>
                                        <CardActionArea>
                                            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/event/${event.id}`}>
                                                <CardMedia
                                                    component="img"
                                                    height="80"
                                                    image={require(`../../../assets/categoryImages/${event.category}.jpg`)}
                                                    alt={event.title}
                                                />
                                                <CardContent sx={{ p: 1.5 }}>
                                                    <Typography gutterBottom variant="h6" component="div">
                                                        {event.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {moment(event.date.toDate()).format('DD MMM YYYY')}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {moment(event.date.toDate()).format('hh:mm a')}
                                                    </Typography>
                                                </CardContent>
                                            </Link>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            })}
                        </>}
                    </Grid>
                </TabPanel>
            </Box>
        </Paper>
    );
}